export default function truncate(str, limit) {
  if (str.length < limit) return str;

  return str.slice(0, limit) + "...";
}
