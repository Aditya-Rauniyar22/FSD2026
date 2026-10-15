function ICard({ data }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', maxWidth: '320px' }}>
      <img
        src={data.pic}
        alt={data.name}
        style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '12px' }}
      />
      <p><strong>Roll:</strong> {data.roll}</p>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Branch:</strong> {data.branch}</p>
      <p><strong>Brand:</strong> {data.brand}</p>
      <p><strong>Tag:</strong> {data.tag}</p>
      <p><strong>Fame:</strong> {data.fame}</p>
    </div>
  );
}

export default ICard;