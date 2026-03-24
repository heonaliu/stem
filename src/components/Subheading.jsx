export default function Subheading({ title, color}) {
  return <h1 className={`text-2xl font-bold ${color}`}>
    {title}
    </h1>;
}
