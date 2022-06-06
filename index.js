function scuberGreetingForFeet(ride){
  // Write your code here!

  if (ride<= 400) {
    return 'This one is on me!'
  }
  else if (2000<ride && ride<2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else  {
    return 'No can do.'
  }
  scuberGreetingForFeet(199)
  scuberGreetingForFeet(2001)
  scuberGreetingForFeet(2501)
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'? "Ok, sounds good." : 'No go.'
}
const tip= "Thank you so much"
function switchOnCharmFromTip(tip){
  // Write your code here!
 switch (tip) {
   case 'generous':
    return "Thank you so much.";
  case 'not as generous':
    return 'Thank you.';
    break;
  default:
    return "Bye."
}
}