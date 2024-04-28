import React from 'react';
import GithubSignIn from '../components/GithubSignIn';

const Home: React.FC = () => {
    return (
        <div>
            <GithubSignIn />
            <h1>Github</h1>
        </div>
    );
};

export default Home;