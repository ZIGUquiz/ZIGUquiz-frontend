import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Select from 'react-select';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const country = require('country-list');

const Country = ({ setPage }) => {

    const navigate = useNavigate();

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countryOptions, setCountryOptions] = useState([]);
        
    useEffect(() => {
        const options = country.getNames().map((name) => ({
            value: country.getCode(name),
            label: name
        }));
        setCountryOptions(options);
    }, []);

    const handleChange = selectedOption => {
        setSelectedCountry(selectedOption);
    };

    const handleSubmit = () => {
        if (Cookies.get('accessToken') && selectedCountry) {
            axios.post('http://35.208.142.216:8080/user/set-country', {
                nationality: selectedCountry.value.toLowerCase()
            }, { withCredentials: true })
            .then(response => {
                navigate("/main");
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        }
    };

    return (
        <div className='startPageLayout' style={{ position: 'absolute' }}>
            <Navbar />
            <div className='startmainbox'>
                <div className='maintext'>
                    <div className='choose'>Choose your country</div>
                </div>
                {/* <select className='selectbox'>
                    <option value="korea" className='option'>Korea</option>
                    <option value="korea" className='option'>japen</option>
                    <option value="korea" className='option'>india</option>
                </select> */}
                <Select
                    className='selectbox'
                    value={selectedCountry}
                    onChange={handleChange}
                    options={countryOptions}
                    placeholder="Select a country..."
                    isSearchable={true}
                />
                <div className='submit' onClick={handleSubmit}>
                    Submit
                </div>
            </div>
        </div>
    );
};

export default Country;