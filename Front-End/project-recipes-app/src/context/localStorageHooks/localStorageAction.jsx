const localStorageAction = async (newItem, action, actualArray, helper) => {
  const findItem = actualArray.find((item) => item.id === newItem.id);
  const DECIMAL_RADIX = 10;

  switch (action) {
  case 'addOnce':
    if (findItem) {
      return actualArray;
    }
    return [...actualArray, newItem];
  case 'addToggle':
    console.log(findItem);
    if (findItem) {
      const filteredArray = actualArray.filter(
        (item) => Number.parseInt(item.id, DECIMAL_RADIX)
          !== Number.parseInt(newItem.id, DECIMAL_RADIX),
      );

      return filteredArray;
    }
    return [...actualArray, newItem];

  case 'addToggleStep':
    if (actualArray.includes(newItem)) {
      const updatedArray = actualArray.filter(
        (arrayId) => Number.parseInt(arrayId, DECIMAL_RADIX)
          !== Number.parseInt(newItem, DECIMAL_RADIX),
      );

      return {
        ...helper.array,
        [helper.type]: { ...helper.array[helper.type],
          [helper.id]: [...updatedArray,
          ] } };
    }
    return {
      ...helper.array,
      [helper.type]: { ...helper.array[helper.type],
        [helper.id]: [...helper.array[helper.type][helper.id],
          newItem] } };

  default:
    return actualArray;
  }
};
export default localStorageAction;
