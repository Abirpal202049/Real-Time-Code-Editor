import React from "react";
import "./Style/Home.css";
import { v4 } from "uuid";

const Home = () => {
  const [roomid, setRoomId] = React.useState("");
  const [username, setUserName] = React.useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = v4();
    console.log(id);
    setRoomId(id);
  };

  console.log(roomid);

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
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="input name-input"
            placeholder="Enter Your Name"
          />
          <button className="btn btn-join">Join</button>
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