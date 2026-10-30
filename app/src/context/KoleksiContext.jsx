import { createContext, useContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const KoleksiContext = createContext();

export const KoleksiProvider = ({ children }) => {
  const [koleksi, setKoleksi] = useLocalStorage('koleksi_kuliner', []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadInitialData = async () => {
      if (koleksi.length === 0) {
        try {
          const res = await fetch(`${import.meta.env.BASE_URL}data/koleksi.json`);
          if (!res.ok) throw new Error("Gagal memuat data koleksi");
          const data = await res.json();
          setKoleksi(data);
        } catch (err) {
          setError(err.message);
        }
      }
      setLoading(false);
    };
    loadInitialData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const tambahItem = (item) => setKoleksi([...koleksi, item]);
  const hapusItem = (id) => setKoleksi(koleksi.filter(item => item.id !== id));

  return (
    <KoleksiContext.Provider value={{ koleksi, loading, error, tambahItem, hapusItem }}>
      {children}
    </KoleksiContext.Provider>
  );
};

export const useKoleksi = () => useContext(KoleksiContext);