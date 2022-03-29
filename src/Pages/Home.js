import React from "react";
import "./Style/Home.css";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [roomid, setRoomId] = React.useState("");
  const [username, setUserName] = React.useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = v4();
    console.log(id);
    setRoomId(id);
    toast.success("Room Created Successfully", { theme: "dark" });
  };

  //   console.log(roomid);
  const joinRoom = () => {
    if (!roomid || !username) {
      toast.error("All Fields Are Required", { theme: "dark" });
      return;
    }

    //   If both fields are present hten redirect
    navigate(`/editor/${roomid}`, {
      state: {
        username,
        roomid
      },
    });
  };

  //   On pressing Enter your data will be submitted
  const handelInputEnter = (e) => {
    console.log(e.code);
    if(e.code === 'Enter'){
        joinRoom()
    }
  }

  return (
    <div className="homePage">
      <div className="formWrapper">
        <h2 className="display-2"> &lt; Code Real Time / &gt;</h2>
        <code className="hacker-style">
          <h4 className="display-4">Enjoy the codeing with your Friends</h4>
        </code>
        <div className="invite-message">
          <h5>
            <code>Enter Your Room Id To Join The Code Panel</code>
          </h5>
        </div>
        <div className="input-group">
          <input
            type="text"
            value={roomid}
            onChange={(e) => setRoomId(e.target.value)}
            className="input roomno-input"
            placeholder="Enter Your Room Id"
            onKeyUp={handelInputEnter}
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="input name-input"
            placeholder="Enter Your Name"
            onKeyUp={handelInputEnter}
          />
          <button onClick={joinRoom} className="btn btn-join">
            Join
          </button>
          <span className="createInfo">
            If you don't have room Id Create{" "}
            <a onClick={createNewRoom} className="create-room" href="">
              Create New Room
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
