export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95";

  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-sm",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    ghost: "text-primary-500 hover:bg-primary-50",
  };

  const styles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles} {...props}>
      {children}
    </button>
  );
}