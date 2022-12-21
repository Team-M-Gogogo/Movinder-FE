import React from 'react'
import './Payment.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Image  } from "antd";

export default function Payment(props) {
    // const movie = props.selectedMovie;

    const {movie, cinema, session, date} = props;
    
    return (

        <Container className='centered-div'>
            <Row> 
            <Col>
            <h2>Buy Ticket</h2>
            <br></br>
            </Col>       
            <Col>
                <Image
                    //src={movie.thumbnailUrl}
                    width={200}
                    src= "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
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
                <input type="button" value='Submit'/>   <br/>
            </Col>
            </Row>
            <Row className ="middle"> 
                    <Col>
                        Move: 
                    </Col>
                    <Col>
                        Date:
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
