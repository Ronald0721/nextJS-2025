import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setUser } from "@/store";
import { AppDispatch } from "@/store";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"admin" | "user" | "guest">("user");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSignUp = async () => {
    // Simulate a sign-up API call
    const user = {
      id: "1",
      name,
      email,
      role,
    };

    // Dispatch the setUser action with the user data
    dispatch(setUser(user));

    // Redirect to the login page
    router.push("/login");
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as "admin" | "user" | "guest")}
      >
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="guest">Guest</option>
      </select>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
