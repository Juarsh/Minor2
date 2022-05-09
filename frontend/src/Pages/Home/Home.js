import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../../Components/Card/Card";
import Menubar from "../../Components/Menubar/Menubar";
import { useNavigate } from 'react-router-dom';

const HomePage = (props) => {

    const navigate = useNavigate();

    const useService1 = () => {

    }

    const useService2 = () => {

    }

    const manageGroups = () => {
        navigate('/manage-groups');
    }

    return (
        <>
        <Menubar/>
        <Container>
            <Row style = {{margin: "50px", marginLeft: "120px"}}>
                <Col style={{alignContent: "center"}}>
                    <CardComponent title = "Service 1" text = "You can use this service individually" buttonText = "Use Cloud Service" showStats img = "https://sopostech.com/assets/img/cloud-services.gif" click = {useService1}/>
                </Col>
                <Col style={{alignContent: "center"}}>
                    <CardComponent title = "Service 2" text = "You can use this service in a group" buttonText = "Use Cloud Service" showStats img = "https://singhdigitalhub.com/wp-content/uploads/2019/06/03.gif" click = {useService2}/>
                </Col>
                <Col style={{alignContent: "center"}}>
                    <CardComponent title = "Management" text = "Make your Groups" buttonText = "Manage Groups" img = "https://cdn.dribbble.com/users/836931/screenshots/2787289/interactive_ae-2_1.gif" click = {manageGroups}/>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default HomePage;