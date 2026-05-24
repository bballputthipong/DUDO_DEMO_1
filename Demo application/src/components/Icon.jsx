export default function Icon({ name, className = "" }) {
  const isFill = name.endsWith("-fill");
  const iconName = isFill ? name.replace("-fill", "") : name;
  const weightClass = isFill ? "ph-fill" : "ph";

  return <i className={`${weightClass} ${iconName} ${className}`} aria-hidden="true"></i>;
}
