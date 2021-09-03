import { Container, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function NotFoundPage() {
    return (
        <Container>
            <Row>
                <Col  lg={true} className="text-center">
                    <img
                        src="/img/404NotFound.png"
                        alt="error-404"
                        class="rounded mx-auto d-block"                
                    />
              
                <h2>¿Te has perdido?</h2>
                <p>Vuelve al <Link to="/">inicio</Link></p>
                </Col>
            </Row>
        </Container>
    )
}
