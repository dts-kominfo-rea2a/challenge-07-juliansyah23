const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (ParamHasil) => {
  let Arr1 = await promiseTheaterIXX();
  let Arr2 = await promiseTheaterVGC();
  let combineArr = Arr1.concat(Arr1);
  let countResult = 0;
  combineArr.map((getData) => getData.hasil === ParamHasil && (countResult += 1));
  return countResult;
};

module.exports = {
  promiseOutput,
};
