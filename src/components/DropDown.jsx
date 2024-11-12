import React, { useState, useRef, useEffect } from 'react'
import down from './images/down.svg'
export default function DropDown(props) {
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
    const getList = (ss, d, setD)=>{
        let result = []
        for(let i=0;i<ss.length;i++){
                result.push(
                    <li onClick={()=>{setIsDropdownOpen(false); setD(i)}}>{ss[i]}</li>
                )
        
        }
        return result
    }
      
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);
  return (
    <div  style={{position:'relative' , display: 'inline-block', width:'80px'}}>
    <div className='drop' onClick={toggleDropdown}>
        <div>
            <div className='one'>{props.sstates[props.current_display]}</div> 
            <div className='two'><img src={down} alt="" srcset="" /></div>
        </div>
    </div>
    {isDropdownOpen && <div   style={styles.dropdown}>
            <ul className='drop1'>
                {getList(props.sstates, props.current_display, props.changeDisplay)}
            </ul>
        </div>}
    </div>

  )
}
const styles = {
    dropdown: {
      position: 'absolute',
      width:'80px',
      top: "100%", 
      left: "0px",
      backgroundColor: '#fff',
      padding: '0px',
      border: '1px solid #ccc',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      zIndex: 1000, // Ensures it appears above other elements
    },
  };