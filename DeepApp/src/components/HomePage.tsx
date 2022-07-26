import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState("");

  const handleUsername = (e : any) => {
    setUsername(e.target.value)
  }

  const login = () => {
    if (username !== ""){
        nav("/login")
    }
  }

  return (
    <div>
      <div>DeepApp HomePage</div>
      <div>
        <label>Username: </label>
        <input aria-label="Username" id="username" onChange={ (e) => handleUsername(e)}/>
      </div>
      <button onClick={() =>login()}>Enter the chat</button>
    </div>
  );
};

export default HomePage;
