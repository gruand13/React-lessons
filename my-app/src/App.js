import {Component} from 'react';
import './App.css';

const Header = () =>{
  return <h2>Hello world</h2>
}


// const Field = ()=>{
//   const holder ="Enterhere";
//   const styledField = {
//     width: '300px'
//   }
//   return <input placeholder={holder} 
//         type='text' 
//         style={styledField}/>
// }

class Field extends Component {
    render(){
    const holder ="Enterhere";
    const styledField = {
    width: '300px'
    };
        return <input placeholder={holder} 
        type='text' 
        style={styledField}/>
    }
}




function Btn(){
  // const text="log in";
  const logged= false;
  // function res(){
  //   return "log In";
  // }
  // const p=<p>LOG IN</p>;
  return <button>{logged ? "enter" : "Log in"}</button>

}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
     
    </div>
  );
}
export {Header};
export default App;
