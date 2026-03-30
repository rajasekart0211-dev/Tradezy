import './CSS/Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
      <h1>Sign Up</h1>
      <div className="login-signup-fields">
        <input type="text" placeholder='Enter Your Name'/>
        <input type="email" placeholder='Enter your Email'/>
        <input type="Password" placeholder='Password'/>
      </div>
      <button>Continue</button>
      <p className="login-signup-login">Already have an account? <span>Login here</span></p>
      <div className="login-signup-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing, i agree to the terms of use & Privacy policy.</p>
      </div>
      </div>
    </div>
  )
}

export default Login