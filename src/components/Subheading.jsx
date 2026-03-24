export default function Subheading({ title, color, size}) {
  return <h1 className={`text-${size}xl font-bold ${color}`}>
    {title}
    </h1>;
}
