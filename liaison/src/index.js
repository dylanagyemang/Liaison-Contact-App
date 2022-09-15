import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

function AddPersonForm(props){
  const [person, setPerson] = useState('');
  const [readO, setReadO] = useState(true)

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
  
  function handleChange(l){
    let cont = document.getElementById('contact');
    cont.value = l.target.value;
    
  }
  function handleClick(){
    let list = document.getElementById('list');
    let cont = document.getElementById('contact');
    if (cont.hasAttribute('readOnly')){
      cont.removeAttribute('readOnly');
      console.log('true')
    }
    // console.log(l.target.hasAttribute('id')==='list');
    // if (con == true){
    //   l.target.removeAttribute('readOnly');
    // }
    // else if(!con){
    //   l.target.setAttribute('readOnly','readOnly');
    // }
    //setReadO(readO => !readO)
  }
  const listItems = arr.map((val, index) => <li id='list' key={index}><input id='contact' class='contact' type='text' value={val} onChange={handleChange} readOnly ></input><button type='buttton' id='edit' class='btn btn-dark btn-sm' onClick={handleClick}>Edit</button><button type='submit' class='btn btn-dark btn-sm' onClick={(e) => this.deleteRow(this.id, this.list)}>Delete Contact</button></li>);
  return <div id='wlist'><ul>{listItems}</ul></div>;
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

let editb = document.getElementById('edit');
let con = document.getElementById('contact');
let contactList = document.getElementById('wlist');
let liste = document.getElementById('list');
/*
editb.addEventListener('click',function(){
  if (con.hasAttribute('readonly')) {
    con.removeAttribute('readonly');
    editb.innerText = "Save";
    }
   else if (!con.value){
     contactList.removeChild(liste);
 } 
    else if (!con.hasAttribute('readonly')){
        con.setAttribute('readonly','readonly');
        editb.innerText = "Edit";
}
})*/


ReactDOM.createRoot(document.getElementById('root')).render(act, document.getElementById('root'));
reportWebVitals();
