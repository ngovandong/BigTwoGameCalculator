import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import poker from "../../img/poker.png";
import AddGame from "../../Modal/AddGame";
import AddMembers from "../../Modal/AddMembers";
import "./Home.css";
function Home(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showAddmember, setShowAddmember] = useState(false);
  const next = () => {
    setShow(false);
    setShowAddmember(true);
  };
  const finish=()=>{
    setShowAddmember(false);
    console.log(props.game);
    navigate("/play");
  }
  return (
    <div className="home">
      <div className="wrap">
        <div className="wrap-img">
          <img className="rotate-center" src={poker} alt="poker" />
        </div>
        <h1>Làm ván nào anh em</h1>
        <button onClick={() => setShow(true)}>Ván mới</button>
      </div>
      <AddGame
        setGame={props.setGame}
        show={show}
        setShow={setShow}
        next={next}
      />
      <AddMembers
        game={props.game}
        setGame={props.setGame}
        show={showAddmember}
        setShow={setShowAddmember}
        finish={finish}
      />
    </div>
  );
}

export default Home;
