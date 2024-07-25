import React, { useState, useEffect } from 'react';
import './App.css';

// import FormComponent from './FormComponent';


function App() {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [startId, setStartId] = useState('');
  const [endId, setEndId] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  const handleFilter = () => {
    const start = parseInt(startId, 10);
    const end = parseInt(endId, 10);
    const filtered = photos.filter((photo) => photo.id >= start && photo.id <= end);
    setFilteredPhotos(filtered);
  };

  return (
    <div className="App">
      <div className="filter">
        <input
          type="number"
          placeholder="Boshlang'ich ID"
          value={startId}
          onChange={(e) => setStartId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Oxirgi ID"
          value={endId}
          onChange={(e) => setEndId(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>
      <div className="photo-cards">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="card">
            <img src={photo.url} alt={photo.title} />
            <div className="card-body">
              <h5 className="card-title">{photo.title}</h5>
              <p className="card-id">ID: {photo.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
