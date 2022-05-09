import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ListGroup, Tab, Row, Col, Card } from "react-bootstrap";
import Group from "../../Components/Group/Group";
import Menubar from "../../Components/Menubar/Menubar";

const ManageGroupsPage = () => {
    const [values, setValues] = useState({
        groupList: [],
        current: ''
    })

    /*if(localStorage.getItem("email") === null) {
        window.location.pathname = "/";
    }*/

    let email = localStorage.getItem("email");
    let id = localStorage.getItem("id");

    const changeCurrent = (group) => {
        setValues({
            ...values,
            current: group
        });
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/api/votingelection`,{
                params: {
                    email: email
                }
            }).then((res)=>{
                if(res.data.success) {
                    setValues({
                        ...values,
                        groupList: res.group,
                        current: res.group[0]
                    });
                } else {
                    alert('Some Error Occurred');
                }
                
            }).catch((err)=>{
                alert(err.response.data.error);
            });            

            console.log(values);
    }, []);

    
    return (
        <>
        <Menubar />
        <Tab.Container id="list-group-tabs-example" defaultActiveKey = "#linkinit">
            <Row style = {{marginTop: '20px'}}>
                <Col sm={4}>
                <ListGroup>
                    {Object.keys(values.electionList).length !== 0? (
                        values.groupList.map((group) => {
                            return (
                                <ListGroup.Item key = {group._id} action href={"#" + group._id} onClick = {() => changeCurrent(group)}>
                                    {group.name}
                                </ListGroup.Item>
                            )
                        })) : (
                        <ListGroup.Item key = "none" action href="#none">
                            Nothing to Show
                        </ListGroup.Item>
                    )}
                </ListGroup>
                </Col>
                <Col sm={8}>
                <Tab.Content>
                    {Object.keys(values.groupList).length !== 0 ? <Group group = {values.current}/> : (
                        <Tab.Pane key = "none" eventKey="#none">
                            <Card style={{ width: '100%', backgroundColor: "white" }} >
                                <Card.Body style = {{display: 'flex', width: '100%'}}>
                                    You haven't been invited to join any group
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                    )}
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </>
    );
}

export default ManageGroupsPage;