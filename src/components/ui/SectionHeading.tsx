export default function SectionHeading({
    eyebrow,
    title,
    desc,
  }: {
    eyebrow?: string;
    title: string;
    desc?: string;
  }) {
    return (
      <div className="max-w-2xl bg-primary">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#012147] dark:text-white">
          {title}
        </h2>
        {desc ? (
          <p className="mt-3 text-neutral-600 leading-relaxed">{desc}</p>
        ) : null}
      </div>
    );
  }
  