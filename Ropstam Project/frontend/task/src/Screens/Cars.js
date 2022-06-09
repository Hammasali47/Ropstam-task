import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Mainscreen from "../Components/MainScreen";
import CustomModal from "../Components/Modal";
import EnhancedTable from "../Components/Table";
import { listCars } from "../Logic/CarLogic";
// import notes from '../../data/Notes'

const Cars = () => {
  const [carData, setCarData] = useState();
  let navigate = useNavigate();
  useEffect(() => {
    listCars()
      .then((result1) => {
        console.log("result1", result1);
        setCarData(result1);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  //   const deleteHandler = (id) => {};

  const updateData = () => {
    listCars()
      .then((result1) => {
        console.log("result1", result1);
        setCarData(result1);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const Logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/signin");
  };

  return (
    <>
      <Button onClick={Logout} style={{ marginLeft: "1100px" }}>
        Logout
      </Button>
      <Mainscreen title="welcome back asif raza">
        {/* <Link to="createnote">
        <Button>Create New Note</Button>
        </Link> */}
        <CustomModal updateData={updateData} />
        <h1>my notes</h1>
        {carData ? (
          <EnhancedTable carData={carData} updateData={updateData} />
        ) : null}
      </Mainscreen>
    </>
  );
};

export default Cars;
