import UseAuth from "../../auth/UseAuth";
import { Form, Button, Container, Col, Row, Card } from "react-bootstrap";
import { useHistory, useLocation } from 'react-router-dom';

export default function LoginPage() {
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from; //Obtengo el objeto de privaterouter, si es null no pasa nada gracias al '?'

    const auth = UseAuth();
    const handleLogin = () => {
        auth.login();
        history.push(previusObjectURL || "/user");
    }

    return (
        <Container class="mb-5">
            <Row className="justify-content-md-center">
                <Col className="col-md-auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/img/UserInit.png" alt="error-404"/>
                        <Card.Body>
                            <Card.Title>Iniciar sesión</Card.Title>
                            <Form>
                                <Form.Group className="mb-1" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Introduce tu Email" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-1" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Contraseña" />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={handleLogin}>
                                    Singin
                                </Button>
                                <a class="btn btn-secondary" href="/register" role="button">Register</a>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
