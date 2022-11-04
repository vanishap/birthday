import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data';

function App() {   
  const [userName, setUserName] = useState('Madhan');
  const [age, setAge] = useState();
  const [img, setImg] = useState();
  const [users, setUsers] = useState(data);
  const [usersLocal, setUsersLocal] = useState(data);

  const clickHandler =(users)=>{
  setUsers([]);
}
const nameHandler = (e)=>{
e.target.innerHTML = e.target.innerHTML+'*'
  
}
const length = users.length;

  return ( <>
  <div className="container">
  <h1>This Vanisha's app</h1>
    <h3>{length} birthdays today</h3>
    <div className='people-container'>
    { users.map((user) => { 
    const {name, age, img} = user;
    return ( 
      <main>
        <section style={{"display":"flex"}}> 
          <article className='person'>
            <img src={img}></img>
            <div>
              <h4 value={name}  className= 'name'onClick={(e)=>nameHandler(e)}>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        </section>
      </main>
    )
  })}
  </div>
      <button className='btn' onClick={() =>clickHandler(users)}>Clear Items</button>  
      </div>
  </>
  );   
}

export default App;
