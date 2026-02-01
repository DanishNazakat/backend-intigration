// import { useState } from "react";
// import { useNavigate } from "react-router";


// export default function Login() {
//   const navigate = useNavigate();

//   const [Email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const loginFnc = async () => {
//     if (!Email || !password) {
//       alert("Email aur password required hai");
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await fetch("http://localhost:3000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           Email,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Login successful");
//         // future me yahin token localStorage me save hoga
//         navigate("/home");
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Server error");
//     } finally {
//       setLoading(false);
//     }


//   };
//   return (
//     <>
//       <div>
//         <h1>Login</h1>

//         <input
//           type="email"
//           placeholder="Email"
//           value={Email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button onClick={loginFnc} disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </div>
//     </>
//   );
// }




import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../UserContext"; // adjust path

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginFnc = async () => {
    if (!Email || !password) {
      alert("Email aur password required hai");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful");

        // ✅ tumhare backend ke hisaab se pura data save karna
        setUser(data.user); // pura user object context me save ho gaya
        console.log("Login user:", data);

        navigate("/home");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginFnc} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}





