import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header style={{ padding: '10px 20px', background: '#f5f5f5' }}>
      <nav style={{ display: 'flex', gap: '15px' }}>
        <NavLink to="/">Beranda</NavLink>
        <NavLink to="/koleksi">Koleksi</NavLink>
        <NavLink to="/tambah">Tambah</NavLink>
        <NavLink to="/statistik">Statistik</NavLink>
        <NavLink to="/tentang">Tentang</NavLink>
      </nav>
    </header>
  );
}