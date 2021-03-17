// vendor imports
import { useState, useEffect } from 'react';
// components
import Popup from './widgets/Popup';
// styles
import '../assets/styles/global.css';

const App = () => {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    /* fetch('https://jsonplaceholder.typicode.com/posts/1') // GET, POST, PUT, PATCH, DELETE
      .then(response => { // Promise
        // console.log(response);
        return response.json();
      })
      .then(data => { // data
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      }); */

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setIsDataFetched(true);
        setAlbums(data);
      })
      .catch(error => {
        setIsDataFetched(true);
        setError('Error fetching albums');
      });
  }, []);


  /* fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        userId: 123,
        title: 'My new post',
        body: 'My new post content'
    }),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': Bearer token
    }
  }); */

  const setAlbumDetails = (index) => {
    setSelectedAlbum(albums[index]);
  };

  return (
    <div id='app'>
      {/* Task 01 - From https://jsonplaceholder.typicode.com/.
                      * fetch all albums
      */}

      {/* Task 02 - Display the albums title */}

      {isDataFetched
        ?
        error === ''
          ?
          <>
            <h2>Albums</h2>
            {albums.slice(0, 10).map((album, index ) => {
              return (
                <Album key={album.id} title={album.title} setAlbumDetails={setAlbumDetails} index={index}/>
              )
            })
            }
            {selectedAlbum && <Popup album={selectedAlbum} />}
          </>
          :
          <h2>{error}</h2>
        :
        <h2>Loading data..</h2>
      }
    </div>
  );
};

const Album = (props) => {
  const handleTitleClick =() => {
    props.setAlbumDetails(props.index)
  }
  return (
  <p onClick={handleTitleClick}>{props.title}</p>
  );
};

/* Homework 10
  1. Create navigation menu with two pages - Users, Posts.
  2. From https://jsonplaceholder.typicode.com .
      * fetch all users
      * fetch all posts
  3. Display the coresponding data in the pages.
  4. Count the number of posts that each user wrote. Add the post number as property in each user object and display it. 
  5. Count the number of comments for each post. Add the comment number as property in each post object and display it. 
  * Bonus - make POST, PUT, PATCH, DELETE request for any resource available at https://jsonplaceholder.typicode.com.
*/


export default App;
