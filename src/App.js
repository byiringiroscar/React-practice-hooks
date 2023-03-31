
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const  [resourceType, setResourceType] = useState('posts')
  const [item, setItem] = useState([]);
  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItem(json));
  }, [resourceType]);
  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {item.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  );
}

export default App;
// import { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const  [windowWidth, setwindowWidth] = useState(window.innerWidth)
//   const handleResize = () => {
//     setwindowWidth(window.innerWidth)
//   }
//   useEffect(() => {
//       window.addEventListener('resize', handleResize)
//   }, [])
//   return (
//     <div>{windowWidth}</div>
//   );
// }

// export default App;


