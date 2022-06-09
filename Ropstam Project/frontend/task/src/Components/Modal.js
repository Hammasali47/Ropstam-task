import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import { createCarRecord } from "../Logic/CarLogic";

const CustomModal = (props) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChanges = async () => {
    let color = document.getElementById("color").value;
    let model = document.getElementById("model").value;
    let register = document.getElementById("register").value;
    let car = document.getElementById("cars").value;

    console.log("data", color === "");
    if (color === "" || model === "" || register === "" || car === "") {
      setError(true);
    } else {
      handleClose();
      setError(false);
      await createCarRecord(model, color, car, register);
      props.updateData();
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Enter Car datas
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Car Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              placeholder="Enter Color"
              id="color"
              style={{ width: "400px" }}
              required
            ></input>
            <input
              placeholder="Enter Modal"
              id="model"
              style={{ width: "400px" }}
              required
            ></input>
            <input
              placeholder="Enter Registration No"
              id="register"
              style={{ width: "400px" }}
              required
            ></input>
            <label for="cars">Choose a car : </label>
            <select id="cars" name="carlist" form="carform" required>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </form>
          {error ? (
            <span style={{ color: "red" }}>Please Enter Correct Data</span>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
