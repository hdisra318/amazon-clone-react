import { useState } from 'react';
import './Login.css';
import {auth} from './firabase';

import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
    
    function signIn(e) {
        e.preventDefault();

        // Firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message))

    }

    function register(e) {
        e.preventDefault();

        // Firebase register
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //Successfull registration
                console.log(auth)
                if(auth) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))
        
    }
    
    
    return (
        <div className='login'>
            <Link to='/'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    className='login__logo'
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' 
                        className='login__signInButton'
                        onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>

                <p>By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.</p>

                <button 
                    className='login__registerButton'
                    onClick={register}    
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}
