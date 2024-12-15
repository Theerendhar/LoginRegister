import { useState } from 'react'
import signupImgae from '../../assets/signup_image.svg'
import loginImage from '../../assets/login_image.svg'
import googleIcon from '../../assets/google_icon.svg'
import eyeIcon from '../../assets/eye_icon.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main id="login">
      <div className="form">
        <h1 className="form-heading">Create an Account 👋 </h1>
        <p className="desc">Kindly fill in your details to create an account</p>

        <label for="fullname" className="text-inputs">
          Your fullname*
          <input type="text"></input>
        </label>
        <label for="email" className="text-inputs">
          Email Address*
          <input type="email"></input>
        </label>
        <label for="password" className="text-inputs">
          Create password*
          <div className='password'>
            <input type="password"></input>
            <img src={eyeIcon} className="eye-icon"></img>
          </div>
        </label>
        <label for="terms" className="terms">
          <input type="checkbox" id="terms" class="terms-checkbox"></input>I
          agree to terms & conditions
        </label>

        <button className="submit">Register Account</button>

        <div className="line-break">
          <hr></hr>
          <p>or</p>
          <hr></hr>
        </div>

        <button className="social">
          <img src={googleIcon} alt="google-icon" class="google-icon" />
          Register With Google
        </button>
      </div>
      <div className="image">
        <img src={signupImgae} className="login-image"></img>
      </div>
    </main>
  );
}

export default App
