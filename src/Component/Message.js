import { Card, CardContent, Typography } from '@material-ui/core';
import React, { forwardRef } from 'react'
import './Message.css';
const Message=forwardRef(({username,message},ref) =>{
    const isUser = username===message.username;
    console.log(isUser);
    
    return (
             <>
        <div ref={ref} className={`message  ${isUser && 'message_user'}`}>

        <Card className={isUser ? "message_userCard" : "message_guestCard"} >
      <CardContent>
        <Typography color="white" variant="h5" component="h2">
        {!isUser && `${message.username || 'unknown user'} : `}{message.message}
        </Typography>
      </CardContent>
    </Card>
        </div>
        </>
    

    
    )
})

export default Message;
