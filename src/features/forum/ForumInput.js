import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { addMessage } from '../../api/movies';

export default function ForumInput(props) {

    const movieId = props.movieId;
    const customerId = props.customerId;

    const [message, setMessage] = useState();

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
            console.log(response);
        })


    }


    return (
        <div style={{margin: "10px", textAlign:"center"}}>
            <Input.Group compact>
                <Input style={{width: 'calc(100% - 200px)'}} placeholder='Your message' onChange={handleChange}></Input>
                <Button type="primary" onClick={handleSubmit}>Submit</Button>
            </Input.Group>
        </div>
    )
}
