// 1. returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. createFareMultiplier function
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// 5. fareDoubler using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers function
const selectDifferentDrivers = function(drivers, driverFunction) {
  return driverFunction(drivers);
};

// Exporting all functions (for tests to access them)
module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers,
  divide,
  square,
  add,
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};

