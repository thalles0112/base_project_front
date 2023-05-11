import { Link } from "react-router-dom"
import { Container } from "./style"

export default function Example(){
    return(
        <Container>
        <div>
            <h1>Example page</h1>
            <Link to={'/'}>{'<-'} Home</Link>
        </div>
        </Container>
    )
}