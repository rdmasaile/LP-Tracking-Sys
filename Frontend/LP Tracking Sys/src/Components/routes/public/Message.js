import Button from "../../Button";
import cancel from './Images/cancel.png';
import ok from './Images/ok.png'
import './Css/Message.css'
//import {useState} from 'react'
import Image from "../../Image";
import React, { useState, useEffect } from 'react';



const Message = ({message,type,onClick}) => {
    let icon = null;
    const [OK, setOK] = useState(false);
    const [interval, setInterval] = useState();
    if(type === 'good')
        icon = <Image src={ok} alt="ok icon"/>
    if(type === 'error')
        icon = <Image src={cancel} alt="cancel icon"/>
    useEffect(() => {
        if(!OK){
            setInterval(setTimeout(()=>setOK(true),5000))
        }else
            clearInterval(interval)
    }, [OK,interval]);
    
    return ( 
        <>
            {
                (!OK)&&(
                <div className="message">
                    {icon}
                    <p>{message}</p>
                    <Button type="button" value="OK" onClick={onClick} />
                </div>)
                
            }
        </>
    );
}
 
export default Message;