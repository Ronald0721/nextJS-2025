import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setUser } from "@/store";
import { AppDispatch } from "@/store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleLogin = async () => {
    // Simulate a login API call
    const user = {
      id: "1",
      name: "John Doe",
      email,
      role: "user" as "admin" | "user" | "guest",
    };

    // Dispatch the setUser action with the user data
    dispatch(setUser(user));

    // Redirect to the dashboard
    router.push("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
