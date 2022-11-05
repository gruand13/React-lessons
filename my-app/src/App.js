import {Component} from "react";
import './App.css';


// use destructurizatin props object
class WhoAmI extends Component{
    constructor (props){
        super(props);
        this.state= {
            years: 37,
            text: "++++"
        }
    }

    nextYear= ()=>{
        console.log("+++");
        this.setState(state =>({
            years: state.years +1 
        }))
    }

    render (){
        const {name, surname, link} = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                {/* if object name.firstName */}
                <h1>My name is {name}, surname - {surname}, age-{this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
    
}


function App() {
  return (
    <div className="App">
        {/* if object firstName: "Alex" */}
        <WhoAmI name="Johnny" surname="Hrusheuski" link="facebook.com"/>
        <WhoAmI name="John" surname="Pupkin" link="vk.com"/>
    </div>
  );
}

export default App;
