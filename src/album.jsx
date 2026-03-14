export default function Album({ album }) {
  const { title, id } = album;
  return (
    <div className="album">
      <h4>Id-{id}</h4>
      <h3>Album-{title}</h3>
    </div>
  );
}
