export default function TabelStatistik({ stats, total }) {
  return (
    <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '400px' }}>
      <thead>
        <tr><th>Kategori</th><th>Jumlah</th></tr>
      </thead>
      <tbody>
        {Object.entries(stats).map(([kat, count]) => (
          <tr key={kat}><td>{kat}</td><td>{count}</td></tr>
        ))}
        <tr><td><strong>Total</strong></td><td><strong>{total}</strong></td></tr>
      </tbody>
    </table>
  );
}