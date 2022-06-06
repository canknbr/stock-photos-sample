import React, { useState, useEffect } from 'react';
import Photo from './Photo';
import { FaSearch } from 'react-icons/fa';

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const App = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const getFetch = async () => {
    setLoading(true);
    let url;
    try {
      url = `${mainUrl}?client_id=KiBehg2aSR_vbRU9qN22AntTKtGQQmNqrS3wdvx7I5Y`;
      const response = await fetch(url);
      const data = await response.json();

      setPhotos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getFetch();
  }, [search]);
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <main>
      <h2 className="sample-title">Stock Photos Sample</h2>
      <section className="search">
        <form className="search-form">
          <input type="text" placeholder="Search..." />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo, index) => {
            return <Photo key={index} {...photo} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
};

export default App;
