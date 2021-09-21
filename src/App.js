import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUser></LoadUser>
      <MyComponent barnd="Apple" price="50000"></MyComponent>
      <MyComponent barnd="Microsoft" price="30000"></MyComponent>
      <MyComponent barnd="Vivo" price="10000"></MyComponent>
      <MyComponent barnd="Google" price="0"></MyComponent>
    </div >
  );
}

// JSON with useEffect
function LoadUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>Users Loaded: {users.length}</h2>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div className="user">
      <h4>Name: {props.name}</h4>
      <p>Call me baby!! {props.phone}</p>
    </div>
  )
}
// my own component --> start capital letter convention
function MyComponent(props) {
  const [points, setPoints] = useState(1)
  const myStyle = {
    backgroundColor: 'skyblue',
    margin: '10px',
    padding: '5px',
    border: '2px solid blue',
    borderRadius: '10px'
  }
  const handleAddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints)
  }
  return (
    <div style={myStyle}>
      <h1>Yo Yo Mama!!! {props.barnd}</h1>
      <h4>Asking Money!! Price: {props.price}, I have points: {points}</h4>
      <button onClick={handleAddPoints} style={{ cursor: "pointer" }}>Add Points</button>
      <p style={{ color: 'magenta', fontWeight: '700' }}>I can write my own component</p>
    </div >
  )
}

export default App;
