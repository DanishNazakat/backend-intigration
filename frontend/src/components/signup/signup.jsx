import { useState } from 'react'
import "./signup.css"
import { useNavigate } from "react-router"
export default function Signup() {
  let navigate = useNavigate();
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const signupFnc = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Fname,
          Lname,
          Email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <>
      <div>
        <h1>
          signup page
        </h1>
        <input
          type="text"
          placeholder="Fname"
          value={Fname}
          onChange={(e) => setFname(e.target.value)}
        />

        <input
          type="text"
          placeholder="Lname"
          value={Lname}
          onChange={(e) => setLname(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />


        <button onClick={signupFnc}>signup</button>
      </div>
    </>
  )
}
