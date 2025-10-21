export default function NotFound() {
  return (
    <div className="mx-auto mt-32 flex w-full max-w-3xl flex-col items-center gap-6 px-4 pb-24 text-center">
      <span className="rounded-full bg-[linear-gradient(135deg,#9a5bff,#c4ff3f)] px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#100222]">
        Missing project
      </span>
      <h1 className="text-3xl font-semibold text-[var(--foreground)]">We could not locate that case study.</h1>
      <p className="text-sm text-[var(--muted)]">
        Please return to the portfolio and choose another experience to explore.
      </p>
      <a
        className="rounded-full bg-[linear-gradient(135deg,#9a5bff,#c4ff3f)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#100222] transition-transform duration-300 hover:scale-[1.04]"
        href="/"
      >
        Back to home
      </a>
    </div>
  );
}
