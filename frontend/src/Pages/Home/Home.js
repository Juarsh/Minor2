import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import CardComponent from "../../Components/Card/Card";
import Menubar from "../../Components/Menubar/Menubar";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isExpired, decodeToken } from "react-jwt";
import { init } from '../../Web3Client/Web3Client';
import Service1 from "../../Service1";
import constants from "../../config";
//import Service2 from "../../Service2";

const HomePage = (props) => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        useService2Clicked : false,
        allGroupsWhereUserAdmin: []
    });

    useEffect(() => {
        if(localStorage.getItem("metamaskId") === null) {
            //init();
        }
    }, []);

    const useService1 = () => {

    }

    const useService2 = () => {
        axios.get(`${constants.SERVER_URL}/` ,{
            // get all groups where user admin
        });
        setValues({
            ...values,
            useService2Clicked : true
        });
    }

    const submitDetails = () => {
        //send log in blockchain
        setValues({
            ...values,
            useService2Clicked : false
        })
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
                    {values.useService2Clicked ? (
                        <Card style={{ width: '18rem' }}>
                            <Form.Select aria-label="Default select example">
                                {
                                    values.allGroupsWhereUserAdmin.map((group) => {
                                        return (<option value={group._id}>{group.name}</option>);
                                    })
                                }
                            </Form.Select>
                            <Button onClick = {submitDetails}>Use this Service</Button>
                        </Card>
                    ) : (<></>)}
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