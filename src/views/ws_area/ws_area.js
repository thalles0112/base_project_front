import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { ws_url } from "../../services/backend";
import { Container } from "./style";
import { useState } from 'react';

export default function WsArea(){

    const [connectionStatus, setConnectionStatus] = useState(false)

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

    

    console.log(connectionStatus)
    return(
        <Container>
            <div>
                <h1>Welcome to websocket area</h1>
                <h2>Websocket status: <span style={{color:connectionStatus?'green':'red'}}>{connectionStatus?'online':'offline'}</span></h2>
            </div>
        </Container>
        
    )
}