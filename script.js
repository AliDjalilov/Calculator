const operator =prompt("Tell me what operation do you want to perform:"," / * + -" );

let FirstNumber =prompt( "Enter the first number");
let SecondNumber =prompt( "Enter the second number");
let decision;


if(operator === "+"){
(decision = +FirstNumber + (+SecondNumber));
} else if(operator === "-"){
(decision = +FirstNumber - (+SecondNumber));
} else if(operator === "*" ){
(decision = +FirstNumber * (+SecondNumber));
} else if(operator === "/"){
(decision = +FirstNumber / (+SecondNumber));
}else{
  console.log(`Wrong entry made`);
}

alert(`${FirstNumber} ${operator}  ${SecondNumber} = ${decision}` );