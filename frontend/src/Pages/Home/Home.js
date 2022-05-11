import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import CardComponent from "../../Components/Card/Card";
import Menubar from "../../Components/Menubar/Menubar";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isExpired, decodeToken } from "react-jwt";
import constants from "../../config";
import Web3 from 'web3';

const HomePage = (props) => {

    const navigate = useNavigate();
    var serviceContract;
    var inUseContract;
    const [values, setValues] = useState({
        useService2Clicked : false,
        allGroupsWhereUserAdmin: [],
        onceCalled: false,
        serviceContract : null,
        inUseContract: null
    });
    
    useEffect(() => {
        async function load() {
            //if(localStorage.getItem("metamaskId") === null) {
                console.log(Web3.givenProvider);
                var web3 = new Web3(Web3.givenProvider || constants.localProvider);
                const accounts = await web3.eth.requestAccounts();
                localStorage.setItem("metamaskId", accounts[0]);
            //}
             serviceContract = new web3.eth.Contract(constants.SERVICE_CONTRACT_ABI, constants.SERVICE_CONTRACT_ADDRESS);
             inUseContract = new web3.eth.Contract(constants.IN_USE_CONTRACT_ABI, constants.IN_USE_CONTRACT_ADDRESS);
            setValues({
                ...values, 
                serviceContract: serviceContract,
                inUseContract: inUseContract
            });
            console.log(serviceContract);
        }
        load();
        if(!values.onceCalled) {
            axios.get(`${constants.SERVER_URL}/stark/getgroup`,{
                params: {
                    adminEmail: localStorage.getItem("email")
                }
            }).then((res)=>{
                if(res.data.found) {
                    setValues({
                        ...values,
                        allGroupsWhereUserAdmin: res.data.Object,
                        onceCalled: true
                    });
                } else {
                    alert('Some Error Occurred');
                }
            }).catch((err)=>{
                alert(err);
            });
        }
    }, []);

    const useService1 = async () => {
        //blockchain
        console.log(serviceContract);
        const sendDataOfUse = await serviceContract.methods.addService1.send({
            from: localStorage.getItem("metamaskId"),
            startTime: new Date(),
            userId: localStorage.getItem("id")
        })
        .on('receipt', (receipt) => {
            console.log(receipt);
        });
    }

    const useService2 = () => {
        setValues({
            ...values,
            useService2Clicked : !values.useService2Clicked
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