import React, { useState } from "react";
import { Navbar, Container, Table } from "react-bootstrap";
import poker from "../../img/poker.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

import "./Play.css";
function Play(props) {
  const [hide, setHide] = useState(true);
  const [table, setTable] = useState({});
  return (
    <div>
      <Navbar style={{ width: "100%" }} bg="dark" variant="dark">
        <Container
          style={{
            maxWidth: "1200px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <img
              style={{ height: 50, width: 50, marginRight: 20 }}
              src={poker}
              className="d-inline-block align-top"
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
            <button className="circle-btn">
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
                <th>{ele}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Play;
