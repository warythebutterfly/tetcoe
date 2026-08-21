import { getSanityClient } from "@/sanity/client";
import { activities, courses, news, partners, site } from "@/lib/content";
import { governance, type BoardMember } from "@/lib/governance";

type Course = (typeof courses)[number];
type Activity = (typeof activities)[number];
type NewsArticle = (typeof news)[number];
type Partner = (typeof partners)[number];
type GovernanceContent = {
  director: BoardMember;
  managers: BoardMember[];
  adminOfficers: BoardMember[];
  tacMembers: BoardMember[];
};
type AboutContent = typeof site & {
  eyebrow: string;
  title: string;
  description: string;
  overview: string;
  directorPhoto: string;
};

async function fetchSanity<T>(query: string, params?: Record<string, unknown>) {
  const client = getSanityClient();
  if (!client) return null;

  try {
    return await client.fetch<T>(query, params || {});
  } catch (error) {
    console.warn("Sanity fetch failed, using local fallback content.", error);
    return null;
  }
}

function withFallback<T>(items: T[] | null | undefined, fallback: T[]) {
  return items && items.length > 0 ? items : fallback;
}

const aboutFallback: AboutContent = {
  ...site,
  eyebrow: "About",
  title: "Overview of the Centre",
  description:
    "TETCoE supports skills development, entrepreneurship, and applied research aligned to national priorities and industry needs.",
  overview: `${site.fullName} was established in ${site.established} at ${site.host}. The Centre strengthens institutional capacity for quality training and demand-driven research, and supports programmes that address priority development challenges.`,
  directorPhoto: "/img/members/director.jpg",
};

export async function getAbout(): Promise<AboutContent> {
  const data = await fetchSanity<Partial<AboutContent>>(
    `*[_type == "aboutPage"][0] {
      eyebrow,
      title,
      description,
      fullName,
      established,
      host,
      overview,
      directorMessage,
      directorName,
      directorTitle,
      "directorPhoto": directorPhoto.asset->url,
      vision,
      mission
    }`,
  );

  const about = {
    ...aboutFallback,
    ...Object.fromEntries(
      Object.entries(data || {}).filter(
        ([, value]) => value !== null && value !== "",
      ),
    ),
  } as AboutContent;

  if (!data?.overview && (data?.fullName || data?.established || data?.host)) {
    about.overview = `${about.fullName} was established in ${about.established} at ${about.host}. The Centre strengthens institutional capacity for quality training and demand-driven research, and supports programmes that address priority development challenges.`;
  }

  return about;
}

export async function getCourses(): Promise<Course[]> {
  const data = await fetchSanity<Course[]>(
    `*[_type == "course"] | order(order asc, title asc) {
      title,
      category,
      summary
    }`,
  );

  return withFallback(data, courses);
}

export async function getActivities(): Promise<Activity[]> {
  const data = await fetchSanity<Activity[]>(
    `*[_type == "activity"] | order(order asc, year desc, title asc) {
      title,
      year,
      desc,
      highlights,
      "images": images[].asset->url,
      youtube
    }`,
  );

  return withFallback(data, activities);
}

export async function getPartners(): Promise<Partner[]> {
  const data = await fetchSanity<Partner[]>(
    `*[_type == "partner"] | order(order asc, name asc) {
      name,
      note,
      "photo": photo.asset->url
    }`,
  );

  return withFallback(data, partners);
}

export async function getNews(): Promise<NewsArticle[]> {
  const data = await fetchSanity<NewsArticle[]>(
    `*[_type == "newsArticle"] | order(coalesce(publishedAt, _createdAt) desc) {
      title,
      "slug": slug.current,
      date,
      summary,
      "cover": cover.asset->url,
      content,
      "gallery": gallery[].asset->url
    }`,
  );

  return withFallback(data, news);
}

export async function getNewsArticle(
  slug: string,
): Promise<NewsArticle | null> {
  const article = await fetchSanity<NewsArticle | null>(
    `*[_type == "newsArticle" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      date,
      summary,
      "cover": cover.asset->url,
      content,
      "gallery": gallery[].asset->url
    }`,
    { slug },
  );

  if (article) return article;
  return news.find((item) => item.slug === slug) || null;
}

type GovernanceMemberFromSanity = BoardMember & {
  roleGroup: "director" | "manager" | "adminOfficer" | "tacMember";
};

export async function getGovernance(): Promise<GovernanceContent> {
  const members = await fetchSanity<GovernanceMemberFromSanity[]>(
    `*[_type == "governanceMember"] | order(roleGroup asc, order asc, name asc) {
      name,
      title,
      roleGroup,
      "photo": photo.asset->url,
      bio
    }`,
  );

  if (!members || members.length === 0) return governance;

  const director = members.find((member) => member.roleGroup === "director");
  const managers = members.filter((member) => member.roleGroup === "manager");
  const adminOfficers = members.filter(
    (member) => member.roleGroup === "adminOfficer",
  );
  const tacMembers = members.filter(
    (member) => member.roleGroup === "tacMember",
  );

  return {
    director: director || governance.director,
    managers: managers.length > 0 ? managers : governance.managers,
    adminOfficers:
      adminOfficers.length > 0 ? adminOfficers : governance.adminOfficers,
    tacMembers: tacMembers.length > 0 ? tacMembers : governance.tacMembers,
  };
}
