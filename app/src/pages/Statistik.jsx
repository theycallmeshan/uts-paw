import { useKoleksi } from '../context/KoleksiContext';
import TabelStatistik from '../components/TabelStatistik';

export default function Statistik() {
  const { koleksi } = useKoleksi();
  
  const stats = koleksi.reduce((acc, item) => {
    acc[item.kategori] = (acc[item.kategori] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Statistik Kategori Kuliner</h2>
      <TabelStatistik stats={stats} total={koleksi.length} />
    </div>
  );
}