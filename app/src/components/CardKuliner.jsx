import { Link } from 'react-router-dom';

export default function CardKuliner({ item }) {
  return (
    <article style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h3>{item.judul}</h3>
      <p>Kategori: {item.kategori}</p>
      <Link to={`/koleksi/${item.id}`}>Lihat Detail</Link>
    </article>
  );
}