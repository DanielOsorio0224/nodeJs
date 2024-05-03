import { useState } from "react"
import { Home } from "./Home"

export const Login = () => {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginSuccessful, setLoginSuccessful] = useState(false)

  const handdleLogin = (e) =>{
    e.preventDefault()
    const data = {
      username,
      password
    }

    fetch('http://localhost:3000/login',{
      method:'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(result=>{

        if(result.token){
          localStorage.setItem('token',result.token)
          setLoginSuccessful(true)
        }else{
          setLoginSuccessful(false)
        }
        
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  return (

    <>
      { loginSuccessful ? <Home/> :
        <div>
            <form >
                <label>Username:</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
                <label>Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handdleLogin}>Ingresar</button>
            </form>
        </div>
      }
    </>
  )
}
