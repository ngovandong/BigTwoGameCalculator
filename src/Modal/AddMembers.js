import { Form, Button, Modal } from "react-bootstrap";
import React from "react";

export default function AddMembers(props) {
  const handleClose = () => {
    props.setShow(false);
  };
  const handleSubmit = () => {
    const listplayer = document.querySelectorAll(".player>input");
    const members = [];
    listplayer.forEach((ele) => members.push(ele.value));
    props.setGame({ ...props.game, members: members });
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
            {[...Array(props.game.numOfMember).keys()].map((id) => (
              <Form.Group className="player" id={id} key={id}>
                <Form.Label>Player {id + 1}</Form.Label>
                <Form.Control type="text" required />
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
