import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//ReactDOM.createRoot(document.getElementById('root')).render(<h1>Hello World</h1>);
//let count = 0
function Timer(){
  const [count, setCount] = useState(0);

  return (<div class='container'>
  <p>{count}</p> <button type='button' class= 'btn btn-warning btn-sm' onClick={()=> setCount(count+1)}>Increase</button>
  </div>
  );
}
/*class Counter extends React.Component{
  state = {
    counter:0
  }
  increase = () =>{
    this.setState({counter: this.state.counter+1});

  }
  render(){
    return <div class='container'>
    <p>{this.state.counter} </p> <button type='button' class= 'btn btn-warning btn-sm' onClick={this.increase}>Increase</button>
    </div>;
  }
}*/
const timera = <Timer />
ReactDOM.createRoot(document.getElementById('root')).render(timera,document.getElementById('root'));
//setInterval(timer,1000);
reportWebVitals();
