import React, { useState } from 'react'
import './Toggle_buttonCSS.css';
import { Switch } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Toggle_button() {
    const navigate = useNavigate();
    const [isUser, setIsUser] = useState(true);

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
        <Switch defultChecked ={isUser} checkedChildren = "Owner" unCheckedChildren = "User" onChange={handleToggle}>
        </Switch>
    </div>
  )
}


