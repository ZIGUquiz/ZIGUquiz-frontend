import React from 'react';
import Navbar from './Navbar';

const Country = ({ setPage }) => {
    return (
        <div className='startPageLayout' style={{ position: 'absolute' }}>
            <Navbar/>
            <div className='startmainbox'>
                <div className='maintext'>
                    <div className='choose'>Choose your country</div>
                </div>
                <select className='selectbox'>
                    <option value="korea" className='option'>Korea</option>
                    <option value="korea" className='option'>japen</option>
                    <option value="korea" className='option'>india</option>
                </select>
                <div className='submit'>
                    Submit
                </div>

            </div>
        </div>
    );
};

export default Country;

