import React, { useState } from 'react'
import { Input, Button, Modal } from 'antd'
import { addMessage } from '../../api/movies';
import { useDispatch } from "react-redux";
import { changeShowLogin } from "../movieSlice";
import getUser from "../../utils/getUser";

export default function ForumInput(props) {

    const movieId = props.movieId;
    const customerId = props.customerId;

    const [message, setMessage] = useState();
    const [isShown, setIsShown ] = useState(false);
    const dispatch = useDispatch();

    function handleChange(event){
        setMessage(event.target.value);
    }

    function handleSubmit() {
        const messageBody = {
            customerId: customerId,
            message: message,
            movieId: movieId
        };
        console.log(messageBody);
        addMessage(messageBody).then((response) => {
            setMessage("");
            console.log(response);
        })
        .catch((error) => {
            if (getUser() === ""){
                dispatch(changeShowLogin(true));
            } else{
                setIsShown(true);
            }

        })
    
    }

    const handleOk = () => {
        setIsShown(false);
      };
    
      const handleCancel = () => {
        setIsShown(false);
      };


    return (
        <div style={{margin: "10px", textAlign:"center"}}>
            <Input.Group compact>
                <Input style={{width: 'calc(100% - 200px)'}} placeholder='Your message' onChange={handleChange} value={message}></Input>
                <Button type="primary" onClick={handleSubmit}>Submit</Button>
            </Input.Group>
            <Modal title="Error occured" open={isShown} onOk={handleOk} onCancel={handleCancel}></Modal>
        </div>
    )
}
