const setDataStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const getDataStorage = key => {
  const data = localStorage.getItem(`${key}`);
  const parsedData = JSON.parse(data);
  return parsedData;
};

export const apiStorage = { setDataStorage, getDataStorage };
