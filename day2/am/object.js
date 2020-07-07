// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  let check = false
  for( let key in obj){
    if(obj[key] == true){
      check = true;
    }
  }
  return check;
};
