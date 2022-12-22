import React from 'react'
import './Payment.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Image  } from "antd";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postBooking } from "../../api/movies";
import getUser from "../../utils/getUser";
import App from './App';


export default function Payment() {

    const navigate = useNavigate();

    const foodTotal = useSelector((state) => {
        // console.log("!#$#@!$" , state.movie.foodTotal);
        return state.movie.foodTotal;
    });

    const location = useLocation();
    const {movie,cinema, date, session} = location.state;

     console.log(getUser());
    const handleClick = () => {
        const booking = {
            "customerId": getUser().customerId,
            "movieSessionId": session.sessionId,
            "ticketRequestItems": [
                {
                    "item": "adult",
                    "quantity": 1
                },
                {
                    "item": "student",
                    "quantity": 1
                }
            ],
            "foodRequestItems": [
                {
                    "item": "63a27f882f79dc66649c430b",
                    "quantity": 1
                }
            ],
            "seatingRequests":[
                {
                    "row": 1,
                    "column": 1
                }
            ]
        };
        
        postBooking(booking).then(response =>{
            console.log(response);
        });
        navigate("/ticket" );
    };

    return (

        <Container className='centered-div'>
            <Row> 
            <Col>
            <h2>Buy Ticket</h2>
            <br></br>
            </Col>       
            <Col>
                <Image
                    src= {movie.thumbnailUrl}
                    width={200}
                />
            </Col>
            <Col id= "total">
                Total: {foodTotal}
            </Col>
            <Col id= "total">
                <App/>
            </Col>
            <Col id= "total">
                <input type="button" value='Submit' onClick={handleClick}/>   <br/>
            </Col>
            </Row>
            <Row className ="middle"> 
                    <Col>
                        Move: {movie.movieName}
                    </Col>
                    <Col>
                        Date: {date.getMonth()}/{date.getDate()}-{date.getHours()}:{date.getMinutes()}
                    </Col>
                    <Col>
                        Cinema: {cinema.cinemaName}
                    </Col>
                    <Col>
                        Seat:
                    </Col>
                    <Col>
                        Ticket:
                    </Col>
            </Row> 

        </Container>

    )
}
