import React,{useState} from 'react'

const App=()=> {
  const [data,setData]=useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:"",
  })

  const {username,email,password,confirmpassword}=data;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})

    
  }
  const submitHandler = e =>{
    e.preventDefault();
    if (password===confirmpassword){
      console.log(data)
  

    }
    else{
      console.log("Passwords are not matching");
    }
    
  }

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
        <input type="text" name="username" value={username} onChange={changeHandler} placeholder="UserName" /> <br/>
        <input type="email" name="email" value={email} onChange={changeHandler} placeholder="Email" /><br/>
        <input type="password" name="password" value={password} onChange={changeHandler} placeholder="Password" /><br/>
        <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler} placeholder="ConfirmPassword" /><br/>

        <input type="Submit" name="submit" placeholder='Submit' />
        </form>

      </center>
      
    </div>
  )
}

export default App
