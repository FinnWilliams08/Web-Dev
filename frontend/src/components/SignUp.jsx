import { useState } from "react";
import { Modal } from "./Modal";
import { InputField } from "./InputField";
import axios from "axios";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserProvider";

export const SignUp = () => {
  const [user, token, setToken] = useContext(CurrentUserContext);
  const [isVisible, setVisibility] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emptyFormFields = !firstName || !lastName || !location || !email || !password || !confirmPassword;
  const passwordsNoMatch = password !== confirmPassword;

  if (!isVisible) return <button onClick={() => setVisibility(true)}>Sign Up</button>;

  return (
    <Modal setVisibility={setVisibility}>
      <InputField label="First Name:" value={firstName} setValue={setFirstName} />
      <InputField label="Last Name:" value={lastName} setValue={setLastName} />
      <InputField label="Email:" value={email} setValue={setEmail} />
      <InputField label="Password:" value={password} setValue={setPassword} type="password" />
      <InputField label="Confirm Password:" value={confirmPassword} setValue={setConfirmPassword} type="password" />
      <InputField label="Address:" value={location} setValue={setLocation} />
      {errorMessage && (
        <div style={{ border: "2px solid red" }}>
          <p style={{ color: "red" }}>{errorMessage}</p>
        </div>
      )}
      <button
        onClick={async () => {
          setIsSubmitted(true);
          if (emptyFormFields) {
            return setErrorMessage("Please fill out all fields");
          }
          if (passwordsNoMatch) {
            return setErrorMessage("Passwords do not match");
          }
          try {
            const response = await axios.post("http://localhost:8080/api/signup", {
              email,
              firstName,
              lastName,
              location,
              password,
            });
            setToken(response.data.token);
            setVisibility(false);
          } catch (error) {
            if (error.response && error.response.status === 409) {
              setErrorMessage("Email already in use. Please use a different email.");
            } else {
              console.error("Error signing up:", error);
              setErrorMessage("Sign up failed. Please try again.");
            }
          }
        }}
      >
        Sign Up
      </button>
    </Modal>
  );
};