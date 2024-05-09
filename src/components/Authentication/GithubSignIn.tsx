import React, { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useStoreUserInDatabase } from "../../hooks/useStoreUserInDatabase";

const GithubSignIn: React.FC = () => {
  const provider = new GithubAuthProvider();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Manage loading state
  const navigate = useNavigate();
  const storeUserInDatabase = useStoreUserInDatabase(db);

  const handleGithubSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await storeUserInDatabase(user);
      navigate("/page");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={handleGithubSignIn} disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign in with GitHub"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default GithubSignIn;
