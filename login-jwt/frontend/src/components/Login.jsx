import { useState } from "react"

export const Login = () => {
  
  const [username, setUsername] =useState("")
  const [password, setPassword] =useState("")

  const handdleLogin = (e) =>{
    e.preventDefault()
    console.log({username:username,password:password})
  }
  
  return (
    <div>
        <form >
            <label>Username:</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handdleLogin}>Ingresar</button>
        </form>
    </div>
  )
}
