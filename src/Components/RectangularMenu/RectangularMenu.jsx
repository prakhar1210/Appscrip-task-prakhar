import React, { useState } from 'react';
import "./ReactangularMenu.css";
import Frame1 from "../../Albums/Frame 136394.png";
// import { useState } from "react";


const RectangularMenu = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(`Selected: ${event.target.value}`);
    };
    return (
        <div>
            <div className='RectangularMenuContainer'>
                <div className='RectangularMenu1'>
                    <h3>3425 Items</h3>
                    <div className='RectangularMenu-InnerMenu'>
                        <img src={Frame1} alt='Frame' />
                        <select
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className="dropdown-select"
                        >
                            <option value="" disabled>Recommended</option>
                            <option value="Option 1">Option 1</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RectangularMenu
// C:\Users\hp\OneDrive\Desktop\AssignmentV\appscrip\appscrip-assignment\src\Albums\Frame 136394.png