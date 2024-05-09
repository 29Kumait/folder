import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const GoogleSignIn: React.FC = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      await signInWithPopup(auth, provider);
      navigate("/page");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(" error occurred during sign-in");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={handleGoogleSignIn} disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign with Google"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default GoogleSignIn;
