import { Container } from "./style";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <Container>
            <div>
               <h1>home</h1> 
               <nav>
                    <ul>
                        <li>
                            <Link to={'/example'}>example {'->'}</Link>
                        </li>
                        <li>
                            <Link to={'/ws_area'}>Ws Area {'->'}</Link>
                        </li>
                        <li>
                            <Link to={'/chat'}>Chat {'->'}</Link>
                        </li>
                    </ul>
               </nav>
                
                
            </div>
        </Container>
    )
}