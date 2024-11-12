import React, { useState, useRef, useEffect } from 'react'
import down from './images/down.svg'
import display from './images/Display.svg'
import DropDown from './DropDown.jsx'
export default function Navbar(props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null)  
    const toggleDropdown = () => {
      setIsDropdownOpen((prevState) => !prevState); 
    };   
    const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); 
    }
    };
      
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);
  return (
    <>
    <div className='Navbar'>
        <div onClick={toggleDropdown}>
            <img src={display} alt="" srcset="" />
            <span>Display</span>
            <img src={down} alt="" srcset="" />
        </div>
    </div>
    {isDropdownOpen && <div className='Dropdown'  ref={dropdownRef} style={styles.dropdown}>
             <div className='row1'>
                <p>Grouping:</p>
                <DropDown sstates={props.sstates} current_display={props.current_display} changeDisplay={props.changeDisplay}/>
             </div>
             <div className='row1'>
                <p>Ordering:</p>
                <DropDown sstates={props.sortedStates} current_display={0} changeDisplay={props.sort}/>
             </div>
        </div>}
    </>
  )
}
const styles = {
    dropdown: {
      position: 'absolute',
      top: "50px", // Adjust as needed to position above the button
      left: "10px",
      backgroundColor: '#fff',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      zIndex: 1000, // Ensures it appears above other elements
    },
  };