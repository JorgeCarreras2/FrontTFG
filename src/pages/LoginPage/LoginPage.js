import UseAuth from "../../auth/UseAuth";
import { Form, Button, Container, Col, Row, Card } from "react-bootstrap";
import { useHistory, useLocation } from 'react-router-dom';
import {RoutesConts} from "../../routers/RoutesConts";
import { useState } from "react";

export default function LoginPage() {
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from; //Obtengo el objeto de privaterouter, si es null no pasa nada gracias al '?'

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const auth = UseAuth();
    const handleLogin = () => {
        auth.login({
            email: username,
            password : password
        });
        //aqui recojo el usuario para colocarlo en la ruta
        var user = JSON.parse(localStorage.getItem("user"));
        history.push(previusObjectURL || RoutesConts.userHome(user["username"])); //este es el que pusea la ruta
    }

    return (
        <Container className="mb-5">
            <Row className="justify-content-md-center">
                <Col className="col-md-auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/img/UserInit.png" alt="error-404"/>
                        <Card.Body>
                            <Card.Title>Iniciar sesión</Card.Title>
                            <Form>
                                <Form.Group className="mb-1" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Introduce tu Email" value={username} onChange={(event)=>setUsername(event.target.value)}/>
                                    <Form.Text className="text-muted"/>
                                </Form.Group>

                                <Form.Group className="mb-1" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={handleLogin}>
                                    Singin
                                </Button>
                                <a className="btn btn-secondary" href={RoutesConts.register} role="button">Register</a>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
