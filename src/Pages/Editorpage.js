import React, { useState } from "react";
import Client from "../Components/Client";
import Editor from "../Components/Editor";
import './Style/Editorpage.css'

const Editorpage = () => {
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
          {
              client.map(client => (<Client key={client.socketId} username={client.username}/>))
          }
          </div>
          <button className="btn copy">Copy Room Id</button>
          <button className="btn leave">Leave Button</button>
        </div>
      </div>

      <div className="editorWrap">
          <Editor />
      </div>
    </div>
  );
};

export default Editorpage;
