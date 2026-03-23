export default function Header({ domain, title }) {
  return (
    <h1 className="text-4xl font-bold text-primary-500">
      <p className="text-xs font-semibold tracking-[0.14em] text-accent-500 uppercase">
        Domain {domain}
      </p>
      <h2 className="text-2xl font-black tracking-tight text-graphite-900 sm:text-3xl">
        {title}
      </h2>
    </h1>
  );
}
