import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

function Timer(){
  const [count, setCount] = useState(0);
  return (<div class='container'>
  <p>{count}</p> <button type='button' class= 'btn btn-warning btn-sm' onClick={()=> setCount(count+1)}>Increase</button>
  </div>
  );
}

class Clout extends React.Component{
  state = {
    coun : 0
  }
  inc = () => {
    this.setState({coun:this.state.coun+1});
  }
  componentDidMount(){
    this.setState({coun:66});
  }
  render(){
    return <div class='container>'>
    <p>{this.state.coun}</p><button type='button' class='btn btn-primary btn-sm' onClick={this.inc}>Increase</button>
    </div>;
  }
}


const cnt = <Clout />
ReactDOM.createRoot(document.getElementById('root')).render(cnt,document.getElementById('root'));
reportWebVitals();
