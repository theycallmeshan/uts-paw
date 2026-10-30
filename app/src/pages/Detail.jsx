import { useParams, useNavigate, Link } from 'react-router-dom';
import { useKoleksi } from '../context/KoleksiContext';

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { koleksi, hapusItem } = useKoleksi();

  const item = koleksi.find(k => k.id === id);

  if (!item) return <p>tidak ditemukan</p>;

  const handleHapus = () => {
    if (window.confirm('Yakin ingin menghapus item ini?')) {
      hapusItem(id);
      navigate('/koleksi');
    }
  };

  return (
    <div>
      <h2>{item.judul}</h2>
      <p><strong>Kategori:</strong> {item.kategori}</p>
      <p><strong>Alamat:</strong> {item.alamat}</p>
      <p><strong>Harga Rata-rata:</strong> {item.hargaRataRata}</p>
      <p><strong>Jam Buka:</strong> {item.jamBuka}</p>
      
      <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
        <button onClick={handleHapus} style={{ background: '#ff4444', color: 'white', border: 'none', padding: '5px 10px' }}>Hapus</button>
        <Link to="/koleksi">Kembali</Link>
      </div>
    </div>
  );
}