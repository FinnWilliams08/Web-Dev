import { useState } from "react";
import Placeholder from "../assets/placeholder.jpg";

export const Image = ({ src = Placeholder, title, alt, style, onClick }) => {
    return (
        <>
        <div
        style={{
            placeItems: "center",
            minHeight: "100px",
            backgroundColor: "transparent",
            cursor: "pointer"
        }}
        onClick={onClick}
        >
            <img 
            src={src} 
            title={title} 
            alt={alt} 
            style={{width: "250px", ...style, height: "250px"}}            />
        </div>
        </>
    );
};