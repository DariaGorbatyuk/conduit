export const getItem = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.error("Error getting data from local storage", e);
    return null;
  }
};

export const setItem = (key, data) => {
  try {
   localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.error("Error saving data from local storage", e);
  }
};
