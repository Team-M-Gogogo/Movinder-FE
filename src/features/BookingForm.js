import React from 'react'
import { Breadcrumb, Button, Divider, Input} from 'antd'
import { useSelector } from 'react-redux'
import FoodInfo from './food/FoodInfo';

export default function BookingForm() {

    const movie = useSelector((state) => {
        return state.movie.selectedMovie;
    });


    return (
        <>
            <div>
                <div style={{ padding: 24, minHeight: 380, background: "#ffffff", textAlign: "center" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>{movie.movieName}</Breadcrumb.Item>
                    <Breadcrumb.Item>Booking</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>Buy Ticket</h1>
                    <Divider></Divider>
                    <div style={{ textAlign: "left"}}>
                        <h2>Ticket Details</h2>
                        <table>
                            <thead></thead>
                            <tbody>
                            <tr>
                                <td><h3>Movie Title: </h3></td>
                                <td><h4>jytjjtyjytjy</h4></td>
                            </tr>
                            <tr>
                                <td><h3>Cinema: </h3></td>
                                <td><h4>jytjjtyjytjy</h4></td>
                            </tr>
                            <tr>
                                <td><h3>Selected Date & Time: </h3></td>
                                <td><h4>jytjjtyjytjy</h4></td>
                            </tr>
                            <tr>
                                <td><h3>Status: </h3></td>
                                <td> <Input></Input></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <Divider></Divider>
                    <div style={{ textAlign: "left", margin:"10px"}}>
                        <Button> Choose Your Seat </Button>
                    </div>
                    <div style={{ textAlign: "left", margin: "10px"}}>
                        {/* <Button> Food Info </Button> */}
                        <FoodInfo/>
                    </div>
                    <div style={{ textAlign: "right", margin:"10px"}}>
                        <h3>Net Total: 100,000,000,000</h3>
                    </div>
                    <div style={{ textAlign: "right"}}>
                        <Button style={{ margin: "10px"}}> Cancel </Button>
                        <Button style={{ margin: "10px", background:"#ffa07a"}}> Buy </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
