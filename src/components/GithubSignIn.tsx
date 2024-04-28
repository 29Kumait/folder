import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const GithubSignIn: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const provider = new GithubAuthProvider();
    const navigate = useNavigate();

    const handleGithubSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);
            setError(null);

            navigate('/page');

        } catch (error: any) {
            setError(error.message || 'An error occurred during sign-in.');
        }
    };

    return (
        <>
            <button onClick={handleGithubSignIn}>
                Sign with Github
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
};

export default GithubSignIn;