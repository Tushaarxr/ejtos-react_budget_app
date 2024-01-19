import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, chgCurrency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        chgCurrency(newCurrency);
    };

    return (
        <div className='alert alert-primary'>
            <label htmlFor="currency">Currency: </label>
            <select   id="currency" value={currency} onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
                
            </select>
        </div>
    );
};

export default CurrencySelector;
