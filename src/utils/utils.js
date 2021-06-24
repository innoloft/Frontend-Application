const hasNumber = value => {
  return new RegExp(/[0-9]/).test(value); //eslint-disable-line
}
const hasMixed = value => {
  return new RegExp(/[a-z]/).test(value) && //eslint-disable-line
           new RegExp(/[A-Z]/).test(value); //eslint-disable-line
}
const hasSpecial = value => {
  return new RegExp(/[!#@$%^&*)(+=._-]/).test(value); //eslint-disable-line
}

export const strengthColor = count => {
 if (count === 0)
     return 'lightgrey'
  if (count < 2)
     return 'red';
  if (count < 3)
     return 'yellow';
  if (count < 4)
     return 'orange';
  if (count < 5)
     return 'lightgreen';
  if (count < 6)
     return 'green';
}
export const strengthIndicator = value => {
  let strengths = 0;
  if(value.length > 1)
     strengths++;
  if (value.length > 5)
     strengths++;
  if (value.length > 7)
     strengths++;
  if (hasNumber(value))
     strengths++;
  if (hasSpecial(value))
     strengths++;
  if (hasMixed(value))
     strengths++;
  return strengths;
}


export const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i //eslint-disable-line
);

export const checkHasNumber = value => {
   return new RegExp(/[0-9]/).test(value); //eslint-disable-line
 }
export const checkHasMixed = value => {
   return new RegExp(/[a-z]/).test(value) && //eslint-disable-line
            new RegExp(/[A-Z]/).test(value); //eslint-disable-line
 }
export const checkHasSpecial = value => {
   return new RegExp(/[!#@$%^&*)(+=._-]/).test(value); //eslint-disable-line
 } 

