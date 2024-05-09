import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const EmailSignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/page");
    } catch (err) {
      if (err instanceof Error) {
        const firebaseError = err as { code?: string; message: string };
        setError(`${firebaseError.code}: ${firebaseError.message}`);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-label="Email Address"
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        aria-label="Password"
      />
      <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
      <button type="button" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Already have an account? Sign In" : "Create an account"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default EmailSignIn;
