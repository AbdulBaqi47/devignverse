export default function NotFound() {
  return (
    <div className="mx-auto mt-32 flex w-full max-w-3xl flex-col items-center gap-6 px-4 pb-24 text-center">
      <span className="rounded-full border border-slate-900 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-900">
        Missing project
      </span>
      <h1 className="text-3xl font-semibold text-[var(--foreground)]">We could not locate that case study.</h1>
      <p className="text-sm text-[var(--muted)]">
        Please return to the portfolio and choose another experience to explore.
      </p>
      <a
        className="rounded-full border border-slate-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-900 transition-colors duration-300 hover:bg-slate-900 hover:text-white"
        href="/"
      >
        Back to home
      </a>
    </div>
  );
}
