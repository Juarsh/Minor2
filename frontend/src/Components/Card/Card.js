import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardComponent = (props) => {

    const [values, setValues] = useState({
        service : {
            totalAvailable: 0,
            inUse : 0
        },
        serviceInUse : false,
        serviceNotAvailable : false, 
        showServiceStats : false,
    });

    useEffect(() => {
        //api call to get stats
    });
    const showStatistics = (event) => {
        event.preventDefault();
        if(props.title === "Service 1") {
            //get service 1 usage stats
            setValues({
                ...values,
                showServiceStats : !values.showServiceStats
            });
        } else  {
            //get service 1 usage stats
            setValues({
                ...values,
                showServiceStats : !values.showServiceStats
            });
        }
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.text}
                </Card.Text>
                {
                    values.serviceInUse || values.serviceNotAvailable ? 
                    (<Button variant="primary" disabled onClick = {props.click}>{props.buttonText}</Button>) : 
                    (<Button variant="primary" onClick = {props.click}>{props.buttonText}</Button>)
                }
                {props.showStats ? (<Button variant="primary" style = {{marginLeft: "10px"}} onClick = {showStatistics}>Statistics</Button>) : (<></>)}
                {values.showServiceStats ? (<div>ABC</div>) : (<></>)}
            </Card.Body>
        </Card>
    );
}

export default CardComponent;