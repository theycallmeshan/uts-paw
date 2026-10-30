import { useKoleksi } from '../context/KoleksiContext';

export default function Beranda() {
  const { koleksi } = useKoleksi();
  const unikKategori = new Set(koleksi.map(k => k.kategori)).size;

  return (
    <div>
      <h1>Direktori Kuliner Sekitar Kampus</h1>
      <p>Selamat datang di direktori tempat makan hits incaran mahasiswa.</p>
      <ul>
        <li>Jumlah Item Kuliner: {koleksi.length}</li>
        <li>Jumlah Kategori: {unikKategori}</li>
      </ul>
    </div>
  );
}
