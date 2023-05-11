import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { ws_url } from "../../services/backend";
import { useState, useRef } from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import music from './badto.mp3'
import { Container } from "./style";
import {BsSend} from 'react-icons/bs'
import hajimete from './rebecca3.jpg'

export default function Romm(){
    const [connectionStatus, setConnectionStatus] = useState(false)
    const roomName = useLocation().pathname.split('/')[2]
    const [message, setMessage] = useState('')
    const name = useSelector((state) => state.namer.name) 
    const [messages, setMessages] = useState([{'message':`opa, ${name}! bem vindo ao chat`, 'user':'thalles'}, {'message':'ateste', 'user':'ramon', 'type':'normal'}])
    const messagesContainerRef = useRef()
    const soundPlayer = useRef()
    const height = window.height

    function playAudio(){
        soundPlayer.current.play()
    }
    
    const wsConnection = useWebSocket(`${ws_url}/ws/chat/${roomName}/`, {
        onOpen: ()=>{
            setTimeout(()=>{wsConnection.sendJsonMessage({
                type: 'user-enter',
                user: name
            })}, 2000)
            setConnectionStatus(true)
            
        },
        onClose:()=>{
            wsConnection.sendJsonMessage({
                type: 'user-exit',
                user: name
            })
            setConnectionStatus(false)
        },
        onMessage:(e)=>{
            const received = JSON.parse(e.data)

            setMessages([...messages, received.message])
           
            window.scrollTo({
                top: 100,
                left: 100,
                behavior: "smooth",
              });

            console.log(messagesContainerRef.current)
            
            if (received.message.user !== name){
                
            }
            if(received.message.type == 'normal' && received.message.user !== name){
                playAudio()
            }
            
            messagesContainerRef.current.scroll(0,  1000000000000000)
        }

        
    })


    function sendMessage(){
        wsConnection.sendJsonMessage({
            'message':message,
            'user': name,
            'type':'normal'
        })    

        setMessage('')
    }
    

    return(
        <Container>
        
            <header>
                <h1>{roomName} {connectionStatus?<span className="status active"></span>:<span className="status innactive"></span>}</h1>
                
                <audio ref={soundPlayer} src={music} id='hidden'/>
            </header>
            
            <div ref={messagesContainerRef} className="messages">
                {messages.map(m=>{
                    if (m.type == 'normal' && m.message !== 'xxx'){
                        return(
                            <div className={`message ${m.user==name?'sent':'received'} `}>
                                <span className="username">{m.user}</span>
                                {m.message}
                            </div>
                        )
                    }
                    else if(m.type=='user-enter'){
                        return(
                            <div className="text-align-center">{m.user} entrou</div>
                        )
                    }
                    else if(m.type=='user-exit'){
                        return(
                            <div className="text-align-center">{m.user} saiu</div>
                        )
                    }

                 
                    
                })}
            </div>


            <div className="message-input">
                <input onKeyPress={(e)=>{if(e.key=='Enter'){sendMessage()};}} value={message} placeholder="Esreva alguma coisa..." onChange={(e)=>{setMessage(e.target.value)}}/>
                <button id="send-message" onClick={sendMessage}><BsSend color="white"/></button>
            </div>
        
        
        </Container>
        
    )
}