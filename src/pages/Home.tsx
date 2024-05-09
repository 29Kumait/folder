import React from "react";
import GithubSignIn from "../components/Authentication/GithubSignIn.tsx";
import EmailSignIn from "../components/Authentication/EmailSignIn.tsx";
import GoogleSignIn from "../components/Authentication/GoogleSignIn.tsx";
import FetchImage from "../components/Image/FetchImage.tsx";
const Home: React.FC = () => {
    return (
        <>
            <div>
                <GithubSignIn />
                <h1>Github</h1>
                <FetchImage path="github-icon.png" />
            </div>
            <div>
                <GoogleSignIn />
                <FetchImage path="Google-icon.png" />
            </div>
            <div>
                <EmailSignIn />
            </div>
        </>
    );
};
export default Home;
