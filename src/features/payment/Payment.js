import React from 'react'
import './Payment.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Image  } from "antd";
import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


export default function Payment(props) {
  // const movie = props.selectedMovie;
    const location = useLocation();
    const {movie,cinema, date} = location.state;
    // const navigate = useNavigate();

    const handleClick = () => {
    //    navigate("/DisplayTickets" , {state: {booking} });
    };
    //console.log("***" , cinema);
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
                Total:
            </Col>
            <Col id= "total">
                <input type="radio" value="Apple" name="gender" /> Apple Pay
                <input type="radio" value="Visa" name="gender" /> Visa Card
                <input type="radio" value="Master" name="gender" /> Master Card
            </Col>
            <Col id= "total">
                Pay by credit Card <br/>
                <input type="date" id="valid" name="valid"/> <br/>
                <input type="text" placeholder='(MM-YYY)'/> <br/>
                <input type="text" placeholder='CVV'/>  <br/>
            </Col>
            <Col id= "total">
                <input type="button" value='Submit'  onClick={handleClick}/>   <br/>
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
