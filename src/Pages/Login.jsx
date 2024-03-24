import React from 'react';
import { handleGoogleSignIn } from './../Authentication/firebase'; // Import the function from firebase.js

const Login = () => {
    return (
        <div className='z-50 flex-1'>
            <form onSubmit={handleGoogleSignIn}>
                <button type="submit" className="google-sign-in-btn">
                    Login with Google
                </button>
            </form>
        </div>
    );
};

export default Login;