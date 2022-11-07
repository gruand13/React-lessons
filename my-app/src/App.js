import {Component, Fragment} from "react";
import './App.css';


// use destructurizatin props object
class WhoAmI extends Component{
    constructor (props){
        super(props);
        this.state= {
            years: 37,
            position: ''
            
        }
        this.nextYear = this.nextYear.bind(this);
        // if not arrow function is declarated
    }

    nextYear(){
        // console.log("+++");
        this.setState(state =>({
            years: state.years +1 
        }))
    }

    commitInputChanges=(e, color)=>{
        console.log(color);
        // console.log(e.target.value);
        this.setState({
            position: e.target.value
        })
    }

    render (){
        const {name, surname, link} = this.props;
        const {position, years} = this.state;
        return (
            <>
                <button onClick={this.nextYear}>++++</button>
                {/* if object name.firstName */}
                <h1>My name is {name}, surname - {surname},
                    age-{years}, 
                    position-{position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Enter</span>
                    <input type="text" onChange={(e)=>this.commitInputChanges(e, 'some color')}/>
                </form>
            </>
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
