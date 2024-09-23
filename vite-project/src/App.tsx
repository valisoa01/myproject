import React, { useEffect, useState } from 'react';  // Ajout de useState

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h1>Hello World</h1>
      <table>
        <thead>
          <tr>  {/* Ajout de <tr> autour des en-têtes */}
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>  {/* Utiliser l'ID comme clé */}
              <td>{i.id}</td>
              <td>{d.name}</td>
              <td>{d.phone}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
