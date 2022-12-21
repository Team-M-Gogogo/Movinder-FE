import React from "react";
import { Breadcrumb, Button, Divider, Input } from "antd";
import FoodInfo from "./food/FoodInfo";
import SeatingPlan from "./seating/SeatingPlan";

export default function BookingForm(props) {
  const { movie, cinema, session } = props;

  // console.log(movie);

  const date = new Date(session.datetime);
  return (
    <>
      <div>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: "#ffffff",
            textAlign: "center",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{movie.movieName}</Breadcrumb.Item>
            <Breadcrumb.Item>Booking</Breadcrumb.Item>
          </Breadcrumb>
          <h1>Buy Ticket</h1>
          <Divider></Divider>
          <div style={{ textAlign: "left" }}>
            <h2>Ticket Details</h2>
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <h3>Movie Title: </h3>
                  </td>
                  <td>
                    <h4>{movie.movieName}</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Cinema: </h3>
                  </td>
                  <td>
                    <h4>{cinema.cinemaName}</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Selected Date & Time: </h3>
                  </td>
                  <td>
                    <h4>
                      {date.getMonth()}/{date.getDate()}-{date.getHours()}:
                      {date.getMinutes()}
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Status: </h3>
                  </td>
                  <td>
                    {" "}
                    <Input></Input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Divider></Divider>
          <div style={{ textAlign: "left" }}>
            <h2>Ticket Price</h2>
            {/* <Dropdown menu={{
                            pricing,
                            selectable: true,

                        }}></Dropdown> */}
          </div>
          <Divider></Divider>
          <div style={{ textAlign: "left", margin: "10px" }}>
            <SeatingPlan floorPlan={cinema.floorPlan} />
          </div>
          <div style={{ textAlign: "left", margin: "10px" }}>
            <FoodInfo />
          </div>
          <div style={{ textAlign: "right", margin: "10px" }}>
            <h3>Net Total: 100,000,000,000</h3>
          </div>
          <div style={{ textAlign: "right" }}>
            <Button style={{ margin: "10px" }}> Cancel </Button>
            <Button style={{ margin: "10px", background: "#ffa07a" }}>
              {" "}
              Buy{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
