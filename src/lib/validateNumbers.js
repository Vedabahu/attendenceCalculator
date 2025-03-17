const NOT_A_NUMBER_ERROR = 1;
const PERCENTAGE_OUT_OF_BOUNDS = 2;
const MISSED_MORE_THAN_CLASS_ERROR = 3;
const NEGETIVE_VALUES = 4;

const validateNumbers = (percentage, missedClass, totalHours) => {
  if (
    Number.isNaN(percentage) ||
    Number.isNaN(missedClass) ||
    Number.isNaN(percentage)
  ) {
    return { code: NOT_A_NUMBER_ERROR, message: "Please fill all the fields." };
  }
  if (percentage > 100 || percentage < 0) {
    return {
      code: PERCENTAGE_OUT_OF_BOUNDS,
      message: "Percentage must be between 0 and 100.",
    };
  }
  if (missedClass < 0 || totalHours < 0) {
    return {
      code: NEGETIVE_VALUES,
      message:
        "Looks like time went backwards. How can any of the above values be negetive?",
    };
  }
  if (missedClass > totalHours) {
    return {
      code: MISSED_MORE_THAN_CLASS_ERROR,
      message: "How did you miss more that what the professor has taken!?",
    };
  }
  return { code: 0, message: "" };
};

export default validateNumbers;
