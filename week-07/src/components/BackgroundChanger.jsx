import React, { useState } from "react";
import "../style/BackgroundChanger.css"

const BackgroundChanger = () => {
    const [color, setColor] = useState("white");


    return <div style={{
        margin: 0,
        backgroundColor: color,
        width: "100vw",
        height: "100vh",
        transition: "background-color 0.5s",
    }}>
        <div style={{
            border: "2px solid grey",
            textAlign: "center",
        }}>
            <h1>Background Color Changer</h1>
        </div>
        <div style={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px"
        }}>
            <button className="button" onClick={() => { setColor("lightpink") }}
                style={{ backgroundColor: "lightpink", color: "black" }}>Pink</button>
            <button className="button" onClick={() => { setColor("red") }}
                style={{ backgroundColor: "red", color: "white" }}>Red</button>
            <button className="button" onClick={() => { setColor("lightyellow") }}
                style={{ backgroundColor: "lightyellow", color: "black" }}>Yellow</button>
            <button className="button" onClick={() => { setColor("lightgreen") }}
                style={{ backgroundColor: "lightgreen", color: "black" }}>Green</button>
            <button className="button" onClick={() => { setColor("lightblue") }}
                style={{ backgroundColor: "lightblue", color: "black" }}>Blue</button>
        </div>
    </div >
}
export default BackgroundChanger;
