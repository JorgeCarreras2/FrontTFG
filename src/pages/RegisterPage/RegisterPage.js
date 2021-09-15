import UseAuth from "../../auth/UseAuth";
import { Form, Button, Container, Col, Row, Card } from "react-bootstrap";
import { useHistory, useLocation } from 'react-router-dom';
import {RoutesConts} from "../../routers/RoutesConts";
import { useState } from "react";

export default function RegisterPage() {
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from; //Obtengo el objeto de privaterouter, si es null no pasa nada gracias al '?'

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = UseAuth();
    const handleRegister = () => {
        auth.register({
            username,
            email,
            password
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
                            <Card.Title>Registrate</Card.Title>
                            <Form>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="User Name" placeholder="Introduce tu nombre de usuario" value={username} onChange={(event)=>setUsername(event.target.value)}/>
                                    <Form.Text className="text-muted"/>
                                </Form.Group>

                                <Form.Group className="mb-1" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Introduce tu Email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                                    <Form.Text className="text-muted"/>
                                </Form.Group>

                                <Form.Group className="mb-1" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={handleRegister}>
                                    Aceptar
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
