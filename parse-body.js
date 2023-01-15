function firstStep(input) {
  // Your code here
  return input.split("&");
}

function secondStep(input) {
  // Your code here
  let arr = input.map(pair =>{
    return pair.split("=");
  })

  return arr;
}

function thirdStep(input) {
  // Your code here
  let arr = input.map(pair =>{
    return pair.map(ele =>{
      ele = ele.replace(/\+/g, " ");
      return ele;
    })
  });

  return arr;


}

function fourthStep(input) {
  // Your code here
  let arr = input.map(pair =>{
    return pair.map(ele =>{
      ele = decodeURIComponent(ele)
      return ele;
    })
  })

  return arr;
}

function fifthStep(input) {
  // Your code here
  let object = {};
  input.forEach(pair =>{
    object[pair[0]] = pair[1];
  })

  return object;
}

function parseBody(str) {
  // Your code here
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))))
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
