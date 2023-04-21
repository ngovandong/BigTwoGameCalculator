import { Form, Button, Modal, Alert } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addGame } from "../features/Game/gameSlice";
export default function AddGame(props) {
  const [error, setError] = useState("");
  const [toggle, setToggle] = useState(false);

  const numOfMember = useRef();
  const games = useRef();
  const dispatch = useDispatch();

  const handleClose = () => {
    props.setShow(false);
    setError("");
  };
  const handleSubmit = () => {
    if (numOfMember.current.value < 2 || numOfMember.current.value > 4) {
      setError("Tối thiểu 2 người chơi và tối đa 4 người chơi");
      return;
    }
    if (props.games !== 0 && props.games < 1) {
      setError("Vui lòng nhập đúng số ván");
      return;
    }
    let game;
    if (games.current) {
      game = {
        numOfMembers: parseInt(numOfMember.current.value),
        numOfGames: games.current.value,
      };
    } else {
      game = {
        numOfMembers: parseInt(numOfMember.current.value),
        numOfGames: 0,
      };
    }
    dispatch(addGame(game));
    setError("");
    props.next();
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo ván</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group id="numbers">
              <Form.Label>Số người chơi</Form.Label>
              <Form.Control
                type="number"
                ref={numOfMember}
                required
                defaultValue={4}
                min={2}
                max={4}
              />
            </Form.Group>
            <Form.Check
              style={{ margin: "20px 5px" }}
              type="switch"
              id="custom-switch"
              label="Giới hạn số ván"
              checked={toggle}
              onChange={() => setToggle(!toggle)}
            />
            {toggle && (
              <Form.Group id="numbers">
                <Form.Label>Số ván</Form.Label>
                <Form.Control
                  type="number"
                  ref={games}
                  min={1}
                />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Tạo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
