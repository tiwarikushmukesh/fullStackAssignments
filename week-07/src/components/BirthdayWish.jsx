import { useState } from "react";
import "../style/BackgroundChanger.css"

const BirthdayWish = () => {
    const [name, setName] = useState("");
    const [step, setStep] = useState(1);
    return (
        <div style={{ margin: "0", width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px", backgroundColor: "lightyellow" }}>
            <div>
                {step === 1 && (<div style={{
                    width: "50vw", border: "1px solid black", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", alignItems: "center", background: "transparent",
                    backgroundColor: "rgba(209, 161, 28, 0.5)"
                }}>
                    <div style={{ marginBottom: "10px", fontWeight: "bold", color: "White", fontSize: "25px", fontFamily: "sans-serif" }}>Enter Your Name</div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }} /><br />
                    <button className="button" onClick={() => setStep(2)} style={{ backgroundColor: "lightblue", color: "black" }}>Done</button>
                </div>
                )}
                {step === 2 && (<div style={{
                    width: "600px", border: "1px solid black", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", alignItems: "center", background: "transparent",
                    backgroundColor: "rgba(209, 161, 28, 0.5)"
                }}>
                    <div style={{ marginBottom: "10px", fontWeight: "bold", color: "White", fontSize: "25px", fontFamily: "sans-serif" }}>Choose Your Wish Card</div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div onClick={() => setStep(3)} style={{ border: "1px solid grey", padding: "10px", borderRadius: "10px", cursor: "pointer", backgroundColor: "white" }}>
                            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card 1" style={{ width: "150px", height: "150px", borderRadius: "10px" }} />
                        </div>
                        <div onClick={() => setStep(4)} style={{ border: "1px solid grey", padding: "10px", borderRadius: "10px", cursor: "pointer", backgroundColor: "white" }}>
                            <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card 2" style={{ width: "150px", height: "150px", borderRadius: "10px" }} />
                        </div>
                        <div onClick={() => setStep(5)} style={{ border: "1px solid grey", padding: "10px", borderRadius: "10px", cursor: "pointer", backgroundColor: "white" }}>
                            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card 3" style={{ width: "150px", height: "150px", borderRadius: "10px" }} />
                        </div>
                    </div>
                </div>
                )}
                <div>
                    {step === 3 && <WishCard1 name={name} />}
                    {step === 4 && <WishCard2 name={name} />}
                    {step === 5 && <WishCard3 name={name} />}
                </div>
            </div>
        </div>
    )

};

const WishCard1 = ({ name }) => {
    return (
        <div>
            <h1>Happy Birthday {name}!</h1>
            <p>Wishing you a day filled with love and joy.</p>
        </div>
    );
};
const WishCard2 = ({ name }) => {
    return (
        <div>
            <h1>Happy Birthday {name}!</h1>
            <p>Wishing you a day filled with love and joy.</p>
        </div>
    );
};
const WishCard3 = ({ name }) => {
    return (
        <div>
            <h1>Happy Birthday {name}!</h1>
            <p>Wishing you a day filled with love and joy.</p>
        </div>
    );
};
export default BirthdayWish;