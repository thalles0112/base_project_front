import amor from './amor.jpg'
import styled from "styled-components";
const height = window.innerHeight



export const Container = styled.div`
    //min-height: 25%;
    height: 100%;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #3b3b3b;

    @keyframes rotate {
        0%{transform:rotate(0deg);}
        100%{transform: rotate(360deg);}
    }

    
    h1{
        color: white;
        text-align: center;
        background-image: linear-gradient(to right, #79bae8, #de5467);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        width: fit-content;
        margin: 0 auto;

    }

    .form-user{
        display: flex;
        flex-direction: column;
        margin: 25% auto;
        width: 90%;
        
    }

    @media only screen and (min-width: 700px) {
        .form-user{
            width: 50%;
            margin: 10% auto;
        }
    }

    .form-user input{
        padding: 8px;
        font-size: large;
    }

    .form-user label{
        color: white;
    }

    .enter-button{
        background-color: #cdcdcd;
        padding: 14px;
        text-align: center;
        text-decoration: none;
        margin-top: 24px;
    }
    
    div.message-input{
        height: 60px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: fixed;
        bottom: 0px;
        width: 100%;
        padding: 0 10%;
        border-top: 1px solid gray;
        background-color: #4c4c4c;

    }

    div.message-input input{
        width: 80%;
        border: none;
        outline: none;
        padding: 2px;
        height: 40px;
        text-indent: 3px;
        border-radius: 14px;
        font-size: large;
    }

    div.message-input button{
        border-radius: 60px;
        width: 50px;
        height: 50px;
        border: 0;
        font: inherit;
        background-image: linear-gradient(to right, #79bae8, #de5467);
    }


    div.messages{
        height: calc(100% - 120px);
        overflow-y: scroll;
        color: white;
        padding: 30px 30px;
        padding-bottom: 90px;
        margin: 0 auto;
        width: 90%;
        display: flex;
        flex-direction: column;
    }

    div.messages::-webkit-scrollbar{
        background-color: transparent;
        width: 6px;
    }

    div.messages::-webkit-scrollbar-track{
        background-color: transparent;
    }


    div.messages::-webkit-scrollbar-thumb{
        width: 6px;
        border-radius: 4px;
        background: #79bae8;

    }

    

    input:focus div{
        height: 50px !important;
    }
    

    
    div.messages .message{
        margin: 5px 2px;
        text-align: center;
        padding: 20px;
        border-radius: 7px;
        min-height: auto;
        overflow-y: hidden;
        position: relative;
        overflow-x: hidden;
        max-width: 45%;
        min-width: 100px;
        word-wrap: break-word;
        text-align: left;
        
    }


    
    div.messages .message.received{
        align-self: flex-start;
        background-color:#6505a1;
    }
    div.messages .message.sent{
        align-self: flex-end;
        background-color: black;
    }


    div.messages .message#img{
       min-height: 500px !important; 

    }

    div.messages .message#img img{
       height: 400px !important; 

    }
    .username{
        position: absolute ;
        top: 0;
        left: 2px;
        opacity: 0.8;
        font-size: 0.9em;
        color: white;
        font-weight: 300;
    }


    header{
        background-color: #cdcdcd;
        height: 60px;
        background-color: black;
        color: white;
        width: 100%;
        
    }

    #hidden{
        display: none;
    }

    #send-message{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text-align-center{
        text-align: center;
        background-color: rgba(0,0,0, 0.4);
        width: fit-content;
        margin: 5px auto;
        padding: 2px;
        border-radius: 4px;

    }

    .status{
        width: 8px;
        height: 8px;
        border-radius: 50px;
        
        position: absolute;
        top: 20px;
        
     
    }

    .status.innactive{
        background-color: red;
    }

    .status.active{
        background-color: green;
    }
`