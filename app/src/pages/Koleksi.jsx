import { useState } from 'react';
import { useKoleksi } from '../context/KoleksiContext';
import CardKuliner from '../components/CardKuliner';

export default function Koleksi() {
  const { koleksi, loading, error } = useKoleksi();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  const categories = [...new Set(koleksi.map(k => k.kategori))];
  const filtered = koleksi.filter(k => 
    k.judul.toLowerCase().includes(search.toLowerCase()) &&
    (filter === '' || k.kategori === filter)
  );

  return (
    <div>
      <h2>Daftar Koleksi Kuliner</h2>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input type="search" placeholder="Cari judul kuliner..." value={search} onChange={e => setSearch(e.target.value)} />
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="">Semua Kategori</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
        {filtered.map(item => <CardKuliner key={item.id} item={item} />)}
      </div>
    </div>
  );
}