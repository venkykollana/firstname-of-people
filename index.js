const peopleNames = require("../country/state/city/index.js");

const peopleFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleNames) => {
  return peopleFirstNames(peopleNames);
};

module.exports = getPeopleInCity;
