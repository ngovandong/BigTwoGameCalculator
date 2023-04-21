import { Form, Button, Modal } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMembers } from "../features/Game/gameSlice";

const fix_members = ["Tiền", "Thọ", "Bình", "Vĩ"];

export default function AddMembers(props) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const handleClose = () => {
    props.setShow(false);
  };
  const handleSubmit = () => {
    const listplayer = document.querySelectorAll(".player>input");
    const members = [];
    listplayer.forEach((ele) => members.push(ele.value));
    dispatch(addMembers(members));
    props.finish();
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo ván</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {[...Array(game.numOfMembers).keys()].map((id) => (
              <Form.Group className="player" id={id} key={id}>
                <Form.Label>Player {id + 1}</Form.Label>
                <Form.Control
                  defaultValue={fix_members[id]}
                  type="text"
                  required
                />
              </Form.Group>
            ))}
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
