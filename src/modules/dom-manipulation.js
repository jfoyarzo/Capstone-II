import getAnimals from "./api-requests.js";

const displayAnimals = async () => {
  const animals = await getAnimals(10);
  const fragment = new DocumentFragment();
};

export default displayAnimals;