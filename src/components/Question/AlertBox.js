
import React from 'react';
import {Alert, Button} from 'antd';

const AlertBox =(message, type) =>{
    return  ( 
    <Alert
    message={message}
    type={type}
    showIcon
    action={
    <Button size="small" type="text">
    UNDO
    </Button>
    }
    closable
    />
    )

}

export default AlertBox;
