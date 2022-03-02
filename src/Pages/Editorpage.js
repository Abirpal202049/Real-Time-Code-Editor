import React, { useState, useRef, useEffect } from "react";
import Client from "../Components/Client";
import Editor from "../Components/Editor";
import "./Style/Editorpage.css";
import { initSocket } from "../socket";
import ACTIONS from "../Actions";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Editorpage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Server Part
  const socketRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state?.username,
      });
    };
    init();
  }, []);

  const handleErrors = (e) => {
    console.log("Socket Error", e);
    toast.error("Connection Failed", { theme: "dark" });
  };

  const moveToHomePage = () => {
    toast.success("Leaving the room");
    console.log(location.state?.username);
    console.log(location.state?.roomid);
    navigate("/");
  };

  const [client, setClient] = useState([
    { socketId: 1, username: "Abir Pal" },
    { socketId: 2, username: "Saikat Mukherjee" },
    { socketId: 3, username: "Pranay Gupta" },
    { socketId: 4, username: "Souvik Mandal" },
    { socketId: 5, username: "Soumya Banerjee" },
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <h2 className="display-2"> &lt; Code Real Time / &gt;</h2>
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {client.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
          <CopyToClipboard text={location.state?.roomid} >
            <button
              className="btn copy"
              onClick={() =>
                toast.success("Room Id Copyed Successfully", { theme: "dark" })
              }
            >
              Copy Room Id
            </button>
          </CopyToClipboard>
          <button className="btn leave" onClick={moveToHomePage}>
            Leave Button
          </button>
        </div>
      </div>

      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default Editorpage;
