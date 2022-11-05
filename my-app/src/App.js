
import './App.css';


// use destructurizatin props object
function WhoAmI ({name, surname, link}){
    return (
        <div>
            {/* if object name.first name */}
            <h1>My name is {name()}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}


function App() {
  return (
    <div className="App">
        {/* if object firstName: "Alex" */}
        <WhoAmI name={()=> {return "John"}} surname="Hrusheuski" link="facebook.com"/>
        <WhoAmI name={()=> {return "John"}} surname="Pupkin" link="vk.com"/>
    </div>
  );
}

export default App;
