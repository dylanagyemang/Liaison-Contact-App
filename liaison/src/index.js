import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

function AddPersonForm(){
  const [person, setPerson] = useState("");

  function handleChange(l){
    setPerson(l.target.value);
  }

  function handleSubmit(l){
    l.preventDefault();
    alert("Contact information can't be empty!");
  }

  return (
      <div class='container'>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Add new contact' onChange={handleChange} value={person} /> <button type='submit' class='btn btn-dark btn-sm'>Add Contact</button>
        </form>
      </div>
  );
}

function PeopleList(props){
  const arr = props.data;
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
  return <div><ul>{listItems}</ul></div>;
}

function ContactMangaer(props){
  const [contacts, setContacts] = useState(props.data);

  return(
    <div>
      <AddPersonForm />
      <PeopleList data={contacts} />
    </div>
  )
}

const contacts = ["Dylan Agyemang", "John Doe", "Jane Doe"]

const act = (
  <div class='container'>
    <AddPersonForm />
    <PeopleList data={contacts} />
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(act, document.getElementById('root'));
reportWebVitals();
