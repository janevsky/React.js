import { useEffect, useState } from "react";
const App = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAlbums(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="albums">
        {albums.map((album) => {
          return <p key={album.id}>{album.title}</p>;
        })}
      </div>
    </div>
  );
};
export default App;
