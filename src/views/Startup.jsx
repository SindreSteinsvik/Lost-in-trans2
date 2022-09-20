import LoginForm from "../components/Startup/LoginForm"
import Container from "react-bootstrap/Container"

const Login = () => {
    return (
        <>
        <div className="light_grey">
            <Container>
            <h1>Login</h1>
            <LoginForm/>
            </Container>
        </div>
        </>
    )
}

export default Login