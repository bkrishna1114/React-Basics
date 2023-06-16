import React,{Component,useState} from "react";
import Display from "./display";
import './App.css';

// const App  = () => {
//   return(
//     <div>
//        <h1>Hello Bala Krishna Baddi</h1>
//     </div>
//   )
// }

// export default App;

// lets use the react component..

// export default class App extends Component{
//   state = {
//     name : "balu",
//   }
//   render(){
//     return (
//     <div>
//       <h2>Hey {this.state.name} how are you...</h2>
//     </div>
//     )
//   }
// }


// const App = () => {
//   const [name,setName] = useState("Use State")
//   return(
//       <div>
//          <h2> This is {name} function in React... </h2>
//       </div>
//   )
// }

// export default App;

// state and props...
export default class App extends Component {
  state = {
    name : "Balu",
  }
  render(){
    return(
      <div className='container'>
        <center>
          <h1>{this.state.name} Hello World !</h1>
          <Display name={this.state.name} />
          <button className="submit"
              onClick={
                ()=>console.log("clicked")
              }
              
          >Submit</button>
        </center>
      </div>
    )
  }
}

