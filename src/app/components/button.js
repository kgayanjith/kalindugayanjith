export default function Button({ label, type, className = "" }) {
  return (
    <button className={`btn  ${className}`} type={type}>
      {label}
    </button>
  );
}
