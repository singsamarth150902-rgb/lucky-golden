type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  summary?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  summary,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-600">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-stone-900 sm:text-5xl">
        {title}
      </h1>
      {summary ? (
        <p className="mt-5 text-lg leading-relaxed text-stone-600">
          {summary}
        </p>
      ) : null}
    </div>
  );
}
