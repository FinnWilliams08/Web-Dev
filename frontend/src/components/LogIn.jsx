import { useState, useContext } from "react";
import { Modal } from "./Modal";
import { InputField } from "./InputField";
import axios from "axios";
import { CurrentUserContext } from "../context/CurrentUserProvider";
import { SignUp } from "./SignUp"; // Import SignUp component

export const LogIn = () => {
  const [ , , setToken] = useContext(CurrentUserContext);
  const [isVisible, setVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isVisible) 
    return <button onClick={() => setVisibility(true)}>Log In</button>;

  return (
    <Modal setVisibility={setVisibility}>
      <InputField label="Email:" setValue={setEmail} value={email} />
      <InputField label="Password:" setValue={setPassword} value={password} type="password" />
      
      {errorMessage && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          {errorMessage}
        </div>
      )}
      
      <button onClick={async () => {
        try {
          const response = await axios.post("http://localhost:8080/api/sign-in", {
            email,
            password,
          });
          setToken(response.data.token);
          setVisibility(false);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            setErrorMessage("Account does not exist. Please sign up.");
          } else {
            setErrorMessage("An error occurred. Please try again.");
          }
        }
      }}>
        Log In
      </button>
      
      <p>Don't have an account? <button onClick={() => setVisibility(false)}>Sign Up</button></p>
    </Modal>
  );
};