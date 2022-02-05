import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import poker from "../../img/poker.png";
import AddGame from "../../Modal/AddGame";
import AddMembers from "../../Modal/AddMembers";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { setDone } from "../../features/Game/gameSlice";
function Home(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showAddmember, setShowAddmember] = useState(false);
  const game = useSelector((state) => state.game);
  const next = () => {
    setShow(false);
    setShowAddmember(true);
  };
  const finish = () => {
    setShowAddmember(false);
    navigate("/play");
    dispatch(setDone(false));
  };

  useEffect(() => {
    if (!game.done) {
      navigate("/play");
    }
  }, []);
  return (
    <div className="home">
      <div className="wrap">
        <div className="wrap-img">
          <img className="rotate-center" src={poker} alt="poker" />
        </div>
        <h1>Làm ván nào anh em</h1>
        <div style={{ width: "100%", height: 300, display: "flex" }}>
          <Button
            onClick={() => setShow(true)}
            variant="warning"
            size="lg"
            style={{ padding: "10px 20px", margin: "auto", display: "block" }}
          >
            Ván mới
          </Button>
        </div>
        <footer>
          <p style={{ textAlign: "center", color: "#555" }}>
            Make by{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.facebook.com/dongngo2k1/"
            >
              ngovandong
            </a>
          </p>
        </footer>
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
