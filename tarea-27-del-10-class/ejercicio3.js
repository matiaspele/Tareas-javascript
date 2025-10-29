const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const { brand } = myVehicle;
const unido = {
  brand,
  ...updateMyVehicle,
};

