import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useStoreUserInDatabase } from '../hooks/useStoreUserInDatabase';

const GithubSignIn: React.FC = () => {
    const provider = new GithubAuthProvider();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const storeUserInDatabase = useStoreUserInDatabase(db);

    const handleGithubSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            await storeUserInDatabase(user);
            navigate('/page');
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred");
            }
        }
    };

    return (
        <>
            <button onClick={handleGithubSignIn}>
                Sign in with
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
};

export default GithubSignIn;
