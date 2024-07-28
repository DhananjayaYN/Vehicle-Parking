import React, { useState, useEffect } from 'react'
import './Toggle_buttonCSS.css';
import { Switch } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Toggle_button() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isUser, setIsUser] = useState(location.pathname === '/customer');
    
    useEffect(() => {
        setIsUser(location.pathname === '/customer');
    }, [location.pathname]);
    
    const handleToggle = (checked) => {
    setIsUser(checked);
    if (checked) {
      navigate('/customer');
    } else {
      navigate('/');
    }
  };

  return (
    <div className='toggle_main'>
        <p className='change_mode_p'>Change Mode</p>
        <Switch 
            defaultChecked={location.pathname === '/customer'}
            Checked ={isUser} 
            checkedChildren = "Owner" 
            unCheckedChildren = "User" 
            onChange={handleToggle}
        />
        
    </div>
  )
}


