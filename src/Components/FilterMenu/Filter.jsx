import React from 'react';
import "./Filter.css";
import Dropdown from "../Dropdown/Dropdown";

const Filter = () => {
    const dropdownOptions1 = [
        { value: 'option1', label: 'All' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const dropdownOptions2 = [
        { value: 'optionA', label: 'Option A' },
        { value: 'optionB', label: 'Option B' },
        { value: 'optionC', label: 'Option C' },
    ];

    const dropdownOptions3 = [
        { value: 'itemX', label: 'Item X' },
        { value: 'itemY', label: 'Item Y' },
        { value: 'itemZ', label: 'Item Z' },
    ];

    const handleDropdownChange = (selected) => {
        console.log("Selected option:", selected);
    };

    return (
        <div className='FilterMenuMainContainer'>
            <div className='FilterMenu-Checkbox'>
                <div>
                    <input type="checkbox" id="filter1" />
                    <label htmlFor="filter1">Customize</label>
                </div>
            </div>
            <div className='FilterMenu-Dropdown'>
                <Dropdown
                    options={dropdownOptions1}
                    label="Item For"
                    onSelect={handleDropdownChange}
                    defaultOption="All"
                />
            </div>
            <div className='FilterMenu-Dropdown'>
                <Dropdown
                    options={dropdownOptions1}
                    label="Occasion"
                    onSelect={handleDropdownChange}
                    defaultOption="All"
                />
            </div><div className='FilterMenu-Dropdown'>
                <Dropdown
                    options={dropdownOptions1}
                    label="Work"
                    onSelect={handleDropdownChange}
                    defaultOption="All"
                />
            </div><div className='FilterMenu-Dropdown'>
                <Dropdown
                    options={dropdownOptions1}
                    label="Fabric"
                    onSelect={handleDropdownChange}
                    defaultOption="All"
                />
            </div><div className='FilterMenu-Dropdown'>
                <Dropdown
                    options={dropdownOptions1}
                    label="Segment"
                    onSelect={handleDropdownChange}
                    defaultOption="All"
                />
            </div><div className='FilterMenu-Dropdown'>
                <Dropdown
                    options={dropdownOptions1}
                    label="Suitable For"
                    onSelect={handleDropdownChange}
                    defaultOption="All"
                />
            </div>
            <div className='FilterMenu-Dropdown'>
                <Dropdown
                    options={dropdownOptions1}
                    label="Raw Materials"
                    onSelect={handleDropdownChange}
                    defaultOption="All"
                />
            </div><div className='FilterMenu-Dropdown'>
                <Dropdown
                    options={dropdownOptions1}
                    label="Pattern"
                    onSelect={handleDropdownChange}
                    defaultOption="All"
                />
            </div>

        </div>
    )
}

export default Filter
