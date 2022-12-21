export default function getUser(){
    const localUser = localStorage.getItem("User");
    const user =
      localUser === null || localUser === ""
        ? ""
        : JSON.parse(localStorage.getItem("User"));
      return user;
  }