import { useContext } from "react";
import { UserContext } from "../UserContext.jsx";
import Navbar from "../navbar/navbar.jsx";

export default function Profile() {
    const { user } = useContext(UserContext);

    if (!user) return <p>Please login first</p>;

    return (
        <>
            <Navbar />
            <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
                <h1>Profile Page</h1>

                <div style={{ marginBottom: "10px" }}>
                    <strong>First Name:</strong> {user.Fname}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <strong>Last Name:</strong> {user.Lname}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <strong>Email:</strong> {user.Email}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <strong>ID:</strong> {user._id}
                </div>
            </div>
        </>
    );
}
