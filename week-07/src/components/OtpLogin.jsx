import React, { useState } from "react";

function OtpLogin() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState("");

    // Step 1: Generate OTP
    const handleSendOtp = () => {
        const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedOtp(randomOtp);
        alert(`Your OTP is: ${randomOtp}`); // simulate sending OTP
        setStep(2);
    };

    // Step 2: Verify OTP
    const handleVerifyOtp = () => {
        if (otp === generatedOtp) {
            alert("✅ Login Successful!");
            setStep(3);
        } else {
            alert("❌ Invalid OTP, please try again.");
        }
    };

    return (
        <div style={styles.container}>
            {step === 1 && (
                <>
                    <h2>Login via OTP</h2>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />
                    <button onClick={handleSendOtp} style={styles.button}>
                        Send OTP
                    </button>
                </>
            )}

            {step === 2 && (
                <>
                    <h2>Enter OTP sent to {email}</h2>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        style={styles.input}
                    />
                    <button onClick={handleVerifyOtp} style={styles.button}>
                        Verify OTP
                    </button>
                </>
            )}

            {step === 3 && <h2>🎉 Welcome, you are logged in!</h2>}
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial",
    },
    input: {
        padding: "10px",
        margin: "10px",
        width: "250px",
        borderRadius: "8px",
        border: "1px solid gray",
    },
    button: {
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#007bff",
        color: "white",
        cursor: "pointer",
    },
};

export default OtpLogin;
