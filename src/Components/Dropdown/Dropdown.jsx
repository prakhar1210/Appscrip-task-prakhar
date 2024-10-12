import React, { useState } from 'react';
import './Dropdown.css'; // Link to your CSS file if needed

const Dropdown = ({ options, label, onSelect, defaultOption }) => {
    const [selectedOption, setSelectedOption] = useState(defaultOption || '');

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        if (onSelect) {
            onSelect(value);
        }
    };

    return (
        <div className='dropdown-container'>
            {label && <label className='dropdown-label'>{label}</label>}
            <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="dropdown-select"
            >
                <option value="" disabled>{defaultOption || "Select an option"}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
