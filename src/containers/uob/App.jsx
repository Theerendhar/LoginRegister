import { useState } from "react";
import signupImgae from "../../assets/signup_image.svg";
import loginImage from "../../assets/login_image.svg";
import googleIcon from "../../assets/google_icon.svg";
import eyeIcon from "../../assets/eye_icon.svg";
import "./App.css";
import Input from "../../components/input";
import Separator from "../../components/separator";
import Button from "../../components/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main id="login">
      <div className="form">
        <h1 className="form-heading">Create an Account 👋 </h1>
        <p className="desc">Kindly fill in your details to create an account</p>

        <Input
          fieldName="fullname"
          inputType="text"
          labelText="Your fullname*"
        />
        
        <Input fieldName="email" inputType="email" labelText="Email Address*" />
        
        <Input
          fieldName="password"
          inputType="password"
          labelText="Create password*"
          eyeIcon={eyeIcon}
        />
        
        <Input
          fieldName="terms"
          inputType="checkbox"
          labelText="I agree to terms & conditions"
        />

        <Button className="submit" buttonText="Register Account" />

        <Separator />

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

export default App;
