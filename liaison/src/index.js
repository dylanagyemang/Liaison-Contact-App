import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

function AddPersonForm(props){
  const [person, setPerson] = useState('');

  function handleChange(l){
    setPerson(l.target.value);
  }

  function handleSubmit(l){
    if (person == ''){
      alert("Contact information can't be empty!");
    }
    if (person !== '') {
    props.handleSubmit(person);
    setPerson('');
    }
    l.preventDefault();
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

function ContactManager(props){
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return(
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}

function Search (props){
  const [val, setVal] = useState('');
  return <div>
  <input type='text' value={val} /> <button type='submit' class='btn btn-dark btn-sm'>Search</button>
  </div>
}

const contacts = ["Dylan Agyemang", "John Doe", "Jane Doe"]

const act = (
  <div class='container'>
    <ContactManager data={contacts} />
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(act, document.getElementById('root'));
reportWebVitals();
