export default function Header({ domain, title }) {
  return (
    <div className="text-4xl font-bold text-primary-500">
      <h1>
        <p className="text-xs font-semibold tracking-[0.14em] text-accent-500 uppercase">
          Domain {domain}
        </p>
      </h1>
      <h2 className="text-2xl font-black tracking-tight text-graphite-900 sm:text-3xl">
          {title}
        </h2>
    </div>
  );
}
