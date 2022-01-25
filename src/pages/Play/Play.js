import React, { useEffect, useState } from "react";
import { Navbar, Container, Table } from "react-bootstrap";
import poker from "../../img/poker.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

import "./Play.css";
import Row from "../../components/Row";
function Play(props) {
  const [hide, setHide] = useState(true);
  const [table, setTable] = useState([]);
  const handleChange = (row, col, value) => {
    const newTable = [...table];
    newTable[row][col] = value;
    console.log(newTable);
    setTable(newTable);
  };
  const addGame = () => {
    if (props.game.numOfGame) {
      if (table.length < parseInt(props.game.numOfGame)) {
        const array = [];
        for (let i = 0; i < props.game.numOfMember; i++) {
          array.push(0);
        }
        setTable((pre) => [...pre, array]);
      }
      return;
    }
    const array = [];
    for (let i = 0; i < props.game.numOfMember; i++) {
      array.push(0);
    }
    setTable((pre) => [...pre, array]);
  };
  useEffect(() => {
    const array = [];
    for (let i = 0; i < props.game.numOfMember; i++) {
      array.push(0);
    }
    const newTable = [];
    newTable[0] = array;
    setTable(newTable);
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
            <Navbar.Brand style={{ lineHeight: "40px", fontSize: "26px" }}>
              asdfh asdfh
            </Navbar.Brand>
          </div>
          <div className="groupBT">
            <button className="circle-btn" onClick={() => setHide(!hide)}>
              {hide ? (
                <AiFillEye size={25} />
              ) : (
                <AiFillEyeInvisible size={25} />
              )}
            </button>
            <button className="circle-btn">
              <IoCheckmarkDoneCircle size={25} />
            </button>
            <button className="circle-btn" onClick={addGame}>
              <IoMdAddCircle size={25} />
            </button>
          </div>
        </Container>
      </Navbar>
      <div className="wrap">
        <Table striped bordered hover style={{ maxWidth: "100%" }}>
          <thead>
            <tr>
              <th>#</th>
              {props.game.members.map((ele) => (
                <th style={{ textAlign: "center" }} key={ele}>
                  {ele}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.map((row, index) => (
              <Row
                key={index}
                index={index + 1}
                row={row}
                handleChange={handleChange}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Play;
