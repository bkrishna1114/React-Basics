import React,{Component,useEffect,useState} from "react";
import Display from "./display";
import './App.css';
import axios from "axios";

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

// state and props...and use state
// export default class App extends Component {
//   state = {
//     name : "Balu",
//   }
//   render(){
//     return(
//       <div className='container'>
//         <center>
//           <h1>{this.state.name} Hello World !</h1>
//           <Display name={this.state.name} />
//           <button className="submit"
//               onClick={
//                 ()=>console.log("clicked")
//               }
              
//           >Submit</button>
//         </center>
//       </div>
//     )
//   }
// }

///onclick use state...
// const App  = () => {
//   const [count,setCount] = useState(0)

//   return(
//     <div>
//       <center>
//         <h1>{count}</h1>
//         <button className="submit"
//           onClick={
//             () => setCount(count+1)
//           }
//           >
//           click Here
//         </button>
//       </center>
//     </div>
//   )
// }

// export default App;



// using UseEffect{} in from react hook..
// const App  = () => {
//   const [count,setCount] = useState(0)
//   useEffect(
//     () => console.log(count,[count])
//   )
//   return(
//     <div>
//       <center>
//         <h1>I have {count} Iphones</h1>
//         <button className="submit"
//           onClick={
//             () => setCount(count+1)
//           }
//           >
//           click Here
//         </button>
//       </center>
//     </div>
//   )
// }

// OnChange Event handeler..
// const App = () =>{
//   const [user,setUser] = useState("");
//   const handeler = e => {
//     setUser(e.target.value)
//   }
//   return(
//     <div>
//       <center>
//           <h1>Welcome to react {user}</h1>
//           <input 
//               type="text" 
//               placeholder="username" 
//               value={user} 
//               name="user"
//               onChange={handeler}
//           />
//           <br/>
//           <h1>{user}</h1>
//       </center>
//     </div>
//   )
// }

// //Onsubmit Handler...
// const App = ( )=> {
// 	const [data,setData] = useState({
// 		username : "",
// 		password : "",
// 	})
// 	const {username,password} = data;
// 	//onchange.. usename , password..
// 	const onChange = e=>{
// 		setData({...data,[e.target.name]:[e.target.value]})
// 	}

// 	//Onsubmit Handler..
// 	const submitHandler = e =>{
// 		e.preventDefault();
// 		console.log(data);
// 		//to send data to the backend..
// 		// axios.post('url',data);
// 	}
//   return(
// 	<center>
// 		<form onSubmit={submitHandler}>
// 		<input
// 			type="text"
// 			name="username"
// 			value={username}
// 			onChange={onChange}
// 			placeholder="user name"
// 		/>
// 		<br/>
// 		<input
// 			type="password"
// 			name="password"
// 			value={password}
// 			onChange={onChange}
// 			placeholder="password"
// 		/>
// 		<br/>
// 		<input 
// 			type="submit"
// 			name="submit"
// 		/>
// 		</form>
// 	</center>
//   )
// }


// export default App;



// Map Fucntion in React JS.

// const App= () => {
// 	const array = ["data analyst","data engineer","python developer",'PowerBI developer']
// 	const obj = [
// 		{ id: 1, name: 'data analyst' },
// 		{ id: 2, name: 'data engineer' },
// 		{ id: 3, name: 'python developer' },
// 		{ id: 4, name: 'PowerBI developer' }
// 	  ]	  

// 	return (
// 		<div>
// 			<h1>List in Map</h1>
// 			<div>
// 				{
// 					array.map(
// 						(value,index) => <li key={index}>{index} {value}</li>
// 					)
// 				}
// 				<div>
// 					<h1>Objects in Map</h1>
// 					{
// 						obj.map(
// 						 (value)=>  <li key={value.id}>{value.id} {value.name}</li>
// 						)
// 					}
// 				</div>
// 			</div>
// 		</div>
// 	)
// };

// export default App;


// using filter in react.. App
const App = () =>{
	const array = [12,34,546,678,34,67,23]
	const obj = [
		{ id: 1, name: 'data analyst' },
		{ id: 2, name: 'data engineer' },
		{ id: 3, name: 'python developer' },
		{ id: 4, name: 'PowerBI developer' }
	]; 
	// array filete function....
	const filtered_arr = array.filter(value => value>0);
	const filtered_obj = obj.filter(value => value.name.includes('a'));
	return(
		<div>
			<h2>filtered</h2>
			{
				filtered_arr.map(value => <li>{value}</li>)
			}
			{
				filtered_obj.map(value => <li>{value.name}</li>)
			}
		</div>
	)
};

export default App;