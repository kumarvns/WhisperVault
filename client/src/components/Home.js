import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (<>
        <div className='container'>
            <div className='home'>
                <div className='mt-5'>
                    <h1 className='mt-4'>Welcome to WhisperVault 🔥</h1>
                </div>
                <div>
                    <p className='tagline'>Embrace the power of anonymity and share your secrets on WhisperVault.</p>
                </div>
                <div style={{display: "flex"}} className='mt-3'>
                    <Link className='btn' to={"/account/register"} style={{backgroundColor: '#4384f3'}}>Join <i class="fa-solid fa-arrow-right"></i></Link>
                    <Link className='btn' to={"https://www.linkedin.com/in/ashish-singh-b258a2201/"} target='_blank' style={{backgroundColor: '#2e3848'}}>Linked <i class="fa-brands fa-linkedin"></i></Link>
                </div>
            </div>
        </div>
    </>);
}

export default Home;