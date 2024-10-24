import { Button } from 'antd';
import './sider.css';
import { useState } from 'react';
import { siderButtonList } from '../../constant/siderButtonList';
import { Link } from 'react-router-dom';

export default function Sider() {
    const [selected, setSelected] = useState(0);
    return (
        <div className='sider'>
            {siderButtonList.map((button, index)=>
                <Button
                    key={index}
                    className='sider-button'
                    color={index===selected ? 'primary' : 'default'}
                    variant={index===selected ? 'filled' : 'text'}
                    onClick={() => {
                        // if (button.href) location.href = button.href;
                        setSelected(index);
                    }}
                >
                    {button.href ? <Link to={button.href}>{button.title}</Link> : button.title}
                </Button>
            )}
        </div>
    )
}