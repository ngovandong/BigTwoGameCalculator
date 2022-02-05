import React, { useEffect, useState } from "react";
import { Navbar, Container, Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import poker from "../../img/poker.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import "./Play.css";
import Row from "../../components/Row";
import { useNavigate } from "react-router-dom";
import {
  changePlay,
  reset,
  setDone as DoneGame,
} from "../../features/Game/gameSlice";

function Play() {
  const [hide, setHide] = useState(true);
  const [result, setResult] = useState([]);
  const [rank, setRank] = useState([]);
  const [done, setDone] = useState(false);
  const [hideAdd, sethideAdd] = useState(false);
  const navigate = useNavigate();
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const handleChange = (row, col, value) => {
    const newTable = [];
    game.play.forEach((row, i) => (newTable[i] = [...row]));
    newTable[row][col] = value;
    dispatch(changePlay(newTable));
  };

  const handleAdd = () => {
    const array = [];
    for (let i = 0; i < game.numOfMembers; i++) {
      array.push("");
    }
    dispatch(changePlay([...game.play, array]));

    const wrap = document.getElementById("wrap");
    wrap.scrollTo(0, wrap.scrollHeight + 100);
  };
  const addGame = () => {
    handleAdd();
  };
  const hideClick = () => {
    setHide((pre) => !pre);
    const wrap = document.getElementById("wrap");
    wrap.scrollTo(0, wrap.scrollHeight + 100);
  };

  const finish = () => {
    const answer = window.confirm("Kết thúc sớm cho bớt đau khổ?");
    if (answer) {
      setHide(false);
      setDone(true);
      dispatch(DoneGame(true));
    }
  };

  const newGame = () => {
    navigate("/");
    dispatch(reset(""));
  };

  useEffect(() => {
    const array = [];
    for (let i = 0; i < game.numOfMembers; i++) {
      array.push(0);
    }
    for (let i = 0; i < game.play.length; i++) {
      for (let j = 0; j < game.play[0].length; j++) {
        array[j] += parseInt(game.play[i][j]) ? parseInt(game.play[i][j]) : 0;
      }
    }
    setResult(array);
    const r = [];
    array.forEach((ele, i) => r.push({ index: i, value: ele }));
    r.sort((a, b) => b.value - a.value);
    const newRank = [...rank];
    let i = 0;
    let val = 10000;
    for (const ele of r) {
      if (ele.value < val) {
        i++;
        val = ele.value;
      }
      newRank[ele.index] = i;
    }
    setRank(newRank);
    if (game.numOfGames && game.play.length === parseInt(game.numOfGames)) {
      sethideAdd(true);
    }
  }, [game.play]);

  useEffect(() => {
    if (!game.play[0]) {
      const array = [];
      for (let i = 0; i < game.numOfMembers; i++) {
        array.push("");
      }
      const newTable = [];
      newTable[0] = array;
      dispatch(changePlay(newTable));
    }
  }, []);

  return (
    <div>
      <Navbar style={{ width: "100%" }} bg="dark" variant="dark">
        <Container
          style={{
            maxWidth: "1200px",
            display: "flex",
            justifyContent: "space-around",
          }}
          className="container"
        >
          <div>
            <img
              src={poker}
              className="d-inline-block align-top"
              id="logo"
              alt="poker"
            />
            {game.numOfGames && (
              <Navbar.Brand
                style={{
                  lineHeight: "40px",
                  fontSize: "24px",
                  overflow: "hidden",
                  maxWidth: "200px",
                  display: "inline-block",
                }}
              >
                {"Còn " + (game.numOfGames - game.play.length) + " ván"}
              </Navbar.Brand>
            )}
          </div>
          <div className="groupBT">
            {!done && (
              <button className="circle-btn" onClick={hideClick}>
                {!hide ? (
                  <AiFillEye size={25} color="#212529" />
                ) : (
                  <AiFillEyeInvisible color="#212529" size={25} />
                )}
              </button>
            )}
            {!done && (
              <button className="circle-btn">
                <IoCheckmarkDoneCircle
                  color="#212529"
                  size={25}
                  onClick={finish}
                />
              </button>
            )}
            {!done && !hideAdd && (
              <button className="circle-btn" onClick={addGame}>
                <IoMdAddCircle color="#212529" size={25} />
              </button>
            )}
            {done && (
              <Button
                onClick={newGame}
                style={{ marginLeft: 10 }}
                variant="primary"
              >
                Ván mới
              </Button>
            )}
          </div>
        </Container>
      </Navbar>
      <div id="wrap" className="wrap">
        <Table striped bordered hover style={{ maxWidth: "100%" }}>
          <thead>
            <tr>
              <th>#</th>
              {game.members.map((ele) => (
                <th style={{ textAlign: "center" }} key={ele}>
                  {ele}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {game.play.map((row, index) => (
              <Row
                key={index}
                index={index + 1}
                row={row}
                handleChange={handleChange}
              />
            ))}
            {!hide && (
              <tr>
                <td>Điểm</td>
                {result.map((ele, i) => (
                  <td style={{ background: "#ffc107" }} key={i}>
                    <p
                      style={{
                        padding: "0",
                        margin: "0",
                        textAlign: "center",
                      }}
                    >
                      {ele}
                    </p>
                  </td>
                ))}
              </tr>
            )}
            {!hide && (
              <tr>
                <td>Hạng</td>
                {rank.map((ele, i) => (
                  <td style={{ background: "#0d6efd" }} key={i}>
                    <p
                      style={{
                        padding: "0",
                        margin: "0",
                        textAlign: "center",
                        color: "#fff",
                      }}
                    >
                      {ele}
                    </p>
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Play;
