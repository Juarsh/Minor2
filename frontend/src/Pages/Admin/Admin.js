import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ListGroup, Tab, Row, Col, Card } from "react-bootstrap";
import AdminGroup from "../../Components/AdminGroup/AdminGroup";
import Menubar from "../../Components/Menubar/Menubar";
import constants from "../../config";

const AdminPage = () => {
    const [values, setValues] = useState({
        groupList: [],
        current: ''
    });

    if(localStorage.getItem("email") === null) {
        window.location.pathname = "/";
    }

    let email = localStorage.getItem("email");

    const changeCurrent = (group) => {
        setValues({
            ...values,
            current: group
        });
    }

    useEffect(() => {
        axios.get(`${constants.SERVER_URL}/stark/getallgroup`,{
            params: {
                adminEmail: email
            }
        }).then((res)=>{
            const nonDeletedGroups = res.data.Object.filter((group) => {
                return !group.deleted;
            });
            if(res.data.found) {
                setValues({
                    ...values,
                    groupList: nonDeletedGroups,
                    current: nonDeletedGroups.length === 0? null : nonDeletedGroups[0]
                });
            } else {
                alert('Some Error Occurred');
            }
        }).catch((err)=>{
            alert(err);
        });
    }, []);

    
    return (
        <>
        <Menubar />
        <Tab.Container id="list-group-tabs-example" defaultActiveKey = "#linkinit">
            <Row style = {{marginTop: '20px'}}>
                <Col sm={4}>
                <ListGroup>
                    {Object.keys(values.groupList).length !== 0? (
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
                    {Object.keys(values.groupList).length !== 0 ? <AdminGroup group = {values.current}/> : (
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

export default AdminPage;