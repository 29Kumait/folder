import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ref, set } from 'firebase/database';

const GithubSignIn: React.FC = () => {

    const provider = new GithubAuthProvider();

    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleGithubSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);
            setError(null);


            // Store user data in Realtime Database
            const userRef = ref(db, 'users/' + user.uid);
            set(userRef, {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                providerData: user.providerData.map(data => ({
                    providerId: data.providerId,
                    uid: data.uid,
                    displayName: data.displayName,
                    email: data.email,
                    photoURL: data.photoURL
                })),
                lastLogin: new Date().toISOString()
            });

            navigate('/page');

        } catch (error: any) {
            setError(error.message);
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