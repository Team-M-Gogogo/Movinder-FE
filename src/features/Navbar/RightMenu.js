import React from "react";
import { Menu, Badge, Space, Popover, Button } from "antd";
import logouts from "./image/Logout.png";
import User from "./image/user.png";
import { useState } from "react";
import { Modal, Input } from "antd";
import { postLogin } from "../../api/movies";
import { useNavigate, useLocation } from "react-router-dom";
import getUser from "../../utils/getUser";
import { useDispatch, useSelector } from "react-redux";
import { changeShowLogin } from "../movieSlice";
import {
  getCustomerBookings,
  getMovieById,
  getSessionById,
  getCinemasById,
} from "../../api/movies";
import { useEffect } from "react";
import moment from "moment";

const RightMenu = () => {
  const navigate = useNavigate();
  const user = getUser();

  const dispatch = useDispatch();
  const customerId = getUser().customerId;

  const [userBookings, setUserBookings] = useState([]);

  const TOMORROW = "Tomorrow";
  const TODAY = "Today";
  const bookingTodayTmr = (booking) =>
    moment(moment(booking.session.datetime).add(8, "hours"))
      .subtract(0, "days")
      .calendar()
      .includes(TOMORROW) ||
    moment(moment(booking.session.datetime).add(8, "hours"))
      .subtract(0, "days")
      .calendar()
      .includes(TODAY);

  const filteredBooksTodayTmr = userBookings.filter(bookingTodayTmr);

  useEffect(() => {
    if (customerId) {
      getCustomerBookings(customerId).then((response) => {
        const bookingTicketsPromise = response.data.map((booking) => {
          return getSessionById(booking.movieSessionId).then(
            async (sessionResponse) => {
              const session = sessionResponse.data;

              const cinema = await getCinemaObj(session.cinemaId);
              const movie = await getMovieObj(session.movieId);

              return {
                session: session,
                cinema: cinema,
                movie: movie,
                bookingObj: booking,
              };
            }
          );
        });

        Promise.all(bookingTicketsPromise).then((responses) => {
          console.log(responses);
          setUserBookings(responses);
        });
      });
    }
  }, [customerId]);

  const getMovieObj = (movieId) => {
    return getMovieById(movieId).then((response) => {
      return response.data;
    });
  };

  const getCinemaObj = (cinemaId) => {
    return getCinemasById(cinemaId).then((response) => {
      return response.data;
    });
  };

  const popoverContent = (
    <div>
      {filteredBooksTodayTmr.map((booking, index) => (
        <li key={index}>
          {
            <p>
              {booking.movie.movieName} start at{" "}
              {moment(moment(booking.session.datetime).add(8, "hours"))
                .subtract(0, "days")
                .calendar()}{" "}
            </p>
          }
        </li>
      ))}
    </div>
  );

  const isModalOpen = useSelector((state) => {
    return state.movie.showLogin;
  });

  const showModal = () => {
    dispatch(changeShowLogin(true));
  };

  const handleOk = () => {
    user === "" ? login() : logout();
    dispatch(changeShowLogin(false));
  };
  const handleCancel = () => {
    if (user === "") {
      setUserName("");
      setPassword("");
    }
    dispatch(changeShowLogin(false));
  };

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const onUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const success = () => {
    Modal.success({
      content: "Successfully Login.",
    });
  };
  const success_logout = () => {
    Modal.success({
      content: "Successfully Logout.",
    });
  };

  const warning = () => {
    Modal.warning({
      title: "Fail to login",
      content: "Invalid username or password.",
    });
  };

  const logout = () => {
    localStorage.setItem("User", "");
    navigate("/");
    success_logout();
  };
  const location = useLocation();

  const login = () => {
    const loginInfo = { username: username, password: password };
    postLogin(loginInfo)
      .then((response) => {
        localStorage.setItem("User", JSON.stringify(response.data));
        console.log(localStorage.getItem("User"));
        success();
        navigate(location.pathname);
      })
      .catch((error) => {
        console.error(error);
        warning();
      });

    setUserName("");
    setPassword("");
  };

  const loginNav = (
    <>
      <span onClick={showModal}>
        <img
          src={user === "" ? User : logouts}
          style={{ width: "30%" }}
          alt="Logo"
        />
        {user === "" ? "Login" : "Logout"}
      </span>

      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="600px"
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            className="movinderBtn"
            key="submit"
            type="primary"
            onClick={handleOk}
          >
            {user === "" ? "Login" : "Yes"}
          </Button>,
        ]}
      >
        {user === "" ? (
          <div className="login-wrapper">
            <h1>Log In</h1>
            <label>
              <p>Username</p>
              <Input
                type="text"
                value={username || ""}
                onChange={onUsernameChange}
              />
            </label>
            <br />
            <label>
              <p>Password</p>
              <Input
                type="password"
                value={password || ""}
                onChange={onPasswordChange}
              />
            </label>
          </div>
        ) : (
          <h1>
            Hi {user === "" ? "" : user.customerName}, Are you sure to logout?{" "}
          </h1>
        )}
      </Modal>
    </>
  );

  var items = [];
  if (user) {
    items.push({
      label: user && (
        <Space size="large">
          <Popover
            content={popoverContent}
            title="Upcoming bookings for 2 days:"
          >
            <Badge count={filteredBooksTodayTmr.length}>
              <a href="/userprofile">
                <img src={User} style={{ width: "30%" }} alt="Logo" />
                {user === "" ? "" : user.customerName}
              </a>
            </Badge>
          </Popover>
        </Space>
      ),
      key: "User",
    });
  }
  items.push({
    label: loginNav,
    key: "login",
  });

  return <Menu mode="horizontal" items={items} />;
};

export default RightMenu;
