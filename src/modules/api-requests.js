const url = 'https://zoo-animal-api.herokuapp.com/animals/rand/';

const getAnimals = async (number) => {
  const result = await fetch(`${url}${number}`).then((response) => response.json());
  return result;
};

export default getAnimals;