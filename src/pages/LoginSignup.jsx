import "./CSS/loginsignup.css"
const LoginSignup= () => {
  return (
    <div className="loginSignup">
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Passsword" /> 
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">Already having an account ? <span>Login here </span>
      </p>
      <div className="loginsignup-agree">
      <input type="checkbox" name="" id="" />
        <p>By Continuing, i agree to the terms of use  & privacy policy</p>
      </div>
    </div>
    </div>
  )
}
export default LoginSignup