import axios from "axios";

export const listCars = async () => {
  let token = localStorage.getItem("userInfo");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get("http://localhost:5000/api/cars", config);
  console.log(data);
  return data;
};

export const createCarRecord = async (
  model,
  color,
  category,
  registeration_no
) => {
  // const { model, color, category, registeration_no } = req.body;
  // /create
  let token = localStorage.getItem("userInfo");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(
    "http://localhost:5000/api/cars/create",
    { model, color, category, registeration_no },
    config
  );
  console.log(data);
  return data;
};

export const updateCarRecord = async (
  id,
  model,
  color,
  category,
  registeration_no
) => {
  // const { model, color, category, registeration_no } = req.body;
  // /create
  let token = localStorage.getItem("userInfo");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log("id", id);
  const { data } = await axios.put(
    `http://localhost:5000/api/cars/${id}`,
    { model, color, category, registeration_no },
    config
  );
  console.log(data);
  return data;
};

export const deleteCarRecord = async (id) => {
  // const { model, color, category, registeration_no } = req.body;
  // /create
  let token = localStorage.getItem("userInfo");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log("id", id);
  const { data } = await axios.delete(
    `http://localhost:5000/api/cars/${id}`,
    config
  );
  console.log(data);
  return data;
};
