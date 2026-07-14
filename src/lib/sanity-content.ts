import { getSanityClient } from "@/sanity/client";
import { activities, courses, news, partners } from "@/lib/content";
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

export async function getCourses(): Promise<Course[]> {
  const data = await fetchSanity<Course[]>(
    `*[_type == "course"] | order(order asc, title asc) {
      title,
      category,
      summary
    }`
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
    }`
  );

  return withFallback(data, activities);
}

export async function getPartners(): Promise<Partner[]> {
  const data = await fetchSanity<Partner[]>(
    `*[_type == "partner"] | order(order asc, name asc) {
      name,
      note,
      "photo": photo.asset->url
    }`
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
    }`
  );

  return withFallback(data, news);
}

export async function getNewsArticle(slug: string): Promise<NewsArticle | null> {
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
    { slug }
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
    }`
  );

  if (!members || members.length === 0) return governance;

  const director = members.find((member) => member.roleGroup === "director");
  const managers = members.filter((member) => member.roleGroup === "manager");
  const adminOfficers = members.filter(
    (member) => member.roleGroup === "adminOfficer"
  );
  const tacMembers = members.filter((member) => member.roleGroup === "tacMember");

  return {
    director: director || governance.director,
    managers: managers.length > 0 ? managers : governance.managers,
    adminOfficers:
      adminOfficers.length > 0 ? adminOfficers : governance.adminOfficers,
    tacMembers: tacMembers.length > 0 ? tacMembers : governance.tacMembers,
  };
}
