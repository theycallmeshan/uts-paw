import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useKoleksi } from '../context/KoleksiContext';
import useForm from '../hooks/useForm';

export default function Tambah() {
  const { tambahItem } = useKoleksi();
  const navigate = useNavigate();
  const [form, handleChange] = useForm({ judul: '', kategori: '', alamat: '', hargaRataRata: '', jamBuka: '' });
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.judul.trim()) {
      setErrorMsg('Judul wajib diisi');
      return;
    }
    tambahItem({ ...form, id: Date.now().toString() });
    navigate('/koleksi');
  };

  return (
    <div>
      <h2>Tambah Tempat Makan Baru</h2>
      {errorMsg && <p role="alert" style={{ color: 'red' }}>{errorMsg}</p>}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '10px' }}>
        <div>
          <label htmlFor="judul" style={{ display: 'block' }}>Judul</label>
          <input id="judul" type="text" value={form.judul} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <div>
          <label htmlFor="kategori" style={{ display: 'block' }}>Kategori</label>
          <input id="kategori" type="text" value={form.kategori} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <div>
          <label htmlFor="alamat" style={{ display: 'block' }}>Alamat</label>
          <input id="alamat" type="text" value={form.alamat} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <div>
          <label htmlFor="hargaRataRata" style={{ display: 'block' }}>Harga Rata-rata</label>
          <input id="hargaRataRata" type="number" value={form.hargaRataRata} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <div>
          <label htmlFor="jamBuka" style={{ display: 'block' }}>Jam Buka</label>
          <input id="jamBuka" type="text" value={form.jamBuka} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Simpan</button>
      </form>
    </div>
  );
}