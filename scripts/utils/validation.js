//
//

const isValidEmail = (value) => {
  if (value) {
    true;
  } else {
    false;
  }
};

const isRequired = (value) => {
  if (value) true;
  else false;
};

const minlength = (value) => {
  if (value.length > 2) true;
  else false;
};

const validation = () => {};

export default validation;
