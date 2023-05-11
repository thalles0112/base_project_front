import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/home";
import Example from "../views/example/example";
import WsArea from "../views/ws_area/ws_area";
import Chat from "../views/chat/chat";
import Room from "../views/chat/room";

export const routes = createBrowserRouter(createRoutesFromElements([
    <Route path="" element={<Home/>}/>,
    <Route path="/example" element={<Example/>}/>,
    <Route path="/ws_area" element={<WsArea/>}/>,
    <Route path="/chat" element={<Chat/>}/>,
    <Route path="/chat/:roomName" element={<Room/>}/>
        
    
]))