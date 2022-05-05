import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
import { Card, CardBody} from "reactstrap";


const CardCustom = (props)=>{
    switch (props.item) {
        case "cross":
            return (
                <Card style={{backgroundColor: "#4DD637"}} onClick={()=>props.callBack(props.index)}>
                    <CardBody className="box">
                    <FaTimes className="icon" />
                    </CardBody>
                </Card>
            );
        case "circle":
            return (
                <Card style={{backgroundColor: "#03C6C7"}} onClick={()=>props.callBack(props.index)}>
                    <CardBody className="box">
                    <FaRegCircle className="icon" />
                    </CardBody>
                </Card>
            );
        default:
            return (
                <Card style={{backgroundColor: "#E8BD0D"}} onClick={()=>props.callBack(props.index)}>
                    <CardBody className="box">
                    <FaPen className="icon" />
                    </CardBody>
                </Card>
            );
    }
};
              
export default CardCustom;