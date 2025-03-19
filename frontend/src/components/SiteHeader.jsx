import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import { CurrentUserContext } from "../context/CurrentUserProvider";
import { Column } from "./Column";
import { LogIn } from "./LogIn";
import { Row } from "./Row";
import { SignUp } from "./SignUp";
import { ViewCart } from "./ViewCart";
import "./SiteHeader.css"; // Import the CSS file for styling
import throwbackthreads from "../assets/throwbackthreads1.png"; // Import the logo image

export const SiteHeader = () => {
  const [currentUser, , setToken] = useContext(CurrentUserContext);
  const navigate = useNavigate();
  return (
    <div className="container">
      <Row className="header-row">
        <div className="left-section">
          <ViewCart />
        </div>
        <div className="center-section">
          <img
            src={throwbackthreads}
            alt="Throwback Threads Logo"
            className="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="right-section">
          {currentUser ? (
            <>
              <button onClick={() => navigate("/orders")}>View Orders</button>
              <button onClick={() => setToken(null)}>Sign Out</button>
            </>
          ) : (
            <>
              <SignUp />
              <LogIn />
            </>
          )}
        </div>
      </Row>
      <Row className="centered-buttons">
        <button className="large-button" onClick={() => navigate("/")}>Home</button>
        <button className="large-button" onClick={() => navigate("/shirts")}>Shirts</button>
        <button className="large-button" onClick={() => navigate("/contact")}>Contact Us</button>
        <button className="large-button" onClick={() => navigate("/about")}>About Us</button>
      </Row>
    </div>
  );
};
