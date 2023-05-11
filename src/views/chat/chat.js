import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { ws_url } from "../../services/backend";
import { Container } from "./style";
import { useState } from 'react';
import { Link } from "react-router-dom";


import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setName } from '../../contexts/userInfo/counterSlice' 



export default function Chat(){

    const [roomName, setRoomName] = useState('')
    const [connectionStatus, setConnectionStatus] = useState(false)

    const dispatch = useDispatch()


    const wsConnection = useWebSocket(`${ws_url}/ws/chat/1/`, {
        onOpen: ()=>{
            setConnectionStatus(true)
        },
        onClose:()=>{
            setConnectionStatus(false)
        },
        onMessage:(e)=>{
            console.log(e)
        } 
    })

    function handleNameChange(e){
       
        dispatch(setName(e.target.value))
    }
    

    console.log(connectionStatus)
    return(
        <Container>
            <div>
                <h1>Bem vind@</h1>
                <div className="form-user">
                    <label>Seu nome de usuario</label>
                    <input onChange={handleNameChange}/>
                    <label>Nome da sala</label>
                    <input onChange={(e)=>{setRoomName(e.target.value)}}/>
                    
                    <Link to={'/chat/'+roomName} className="enter-button">Entrar</Link>
                 
                </div>
                
            </div>
        </Container>
        
    )
}