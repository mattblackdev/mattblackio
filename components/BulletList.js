export default function BulletList({ bullets }) {
  if (!bullets?.length) return null;

  return (
    <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
      {bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  );
}
