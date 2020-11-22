const getSortValue = (obj, key) =>
  obj[key] instanceof Date ? obj[key].getTime() : obj[key];

export default getSortValue;
