const getClassNameFromArray = (classNameList) =>
  classNameList.filter((className) => !!className).join(' ');

const getClassName = (classNames) => {
  if (typeof classNames === 'object' && !Array.isArray(classNames)) {
    const keys = Object.keys(classNames);
    classNames = keys.filter((key) => !!classNames[key]);
  }
  return getClassNameFromArray(classNames);
};

export default getClassName;
