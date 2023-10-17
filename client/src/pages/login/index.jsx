import {Link} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import addNotification from 'react-push-notification'; 
import { Notifications } from 'react-push-notification'; 
const   Login =()=>{
	const navigate = useNavigate();
	const [username,Setusername]=useState("");
	const [password,Setpassword]=useState("");
	const handleSubmit =  (e)=>{
		e.preventDefault();
		if(username=="" || password==""){
			addNotification({ 
				title: 'NOT VALID USERNAME OR PASSWORD!!!', 
				native:true         
              })
		}
		
		axios.post(`http://localhost:3002/todos/login`,{"Username":username,"Password":password}).then( (res) => 
		{
			console.log(res,res.data[0]);
			if(res.data[0].u_name == username){
			addNotification({ 
					title: `${username} ,WELCOME!!!`, 
					native:true         
                })
             navigate(`${username}/dashboard`);
			}
			
		

	
	}).catch( () =>  addNotification({ 
		title: `THERE WAS AN ERROR OR CRENDENTIALS WERE WRONG!!`, 
		native:true         
	}),
	navigate("/login"));
		
		
	}
   return(<>
    <Notifications /> 
    <div className="h-screen md:flex">
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
		<div>
			<h1 className="text-white font-bold text-4xl font-sans">#UP CAHLLENGE</h1>
			<p className="text-white mt-1">Be organized on the go without losing focus or your brain cells</p>
			<button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form className="bg-white" onSubmit={handleSubmit}>
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
			
				
    
				<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
							d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
					<input className="pl-2 outline-none border-none" type="text" name="username" id="" placeholder="Username" onChange={(e) =>Setusername(e.target.value)}/>
      </div>
					
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd" />
							</svg>
							<input className="pl-2 outline-none border-none" type="password" name="password" id="" placeholder="Password" onChange={(e) => Setpassword(e.target.value)} />
      </div>                                      
							<button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-4">Login</button>
							<span className="text-md m-4 p-2 rounded-2xl border-2 text-blue-500 hover:text-white hover:bg-green-400 cursor-pointer">Forgot Password</span>
                            <Link to='/Register'><span className="text-md m-4 p-2 rounded-2xl border-2 text-blue-500 hover:text-white hover:bg-green-400 cursor-pointer">Register</span></Link>

		</form>
	</div>
</div>
   </>)
}
export default Login;