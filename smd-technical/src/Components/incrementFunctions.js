
export function incrementIcon(incrementInt){
 if (incrementInt > 0) {
    return "up";
  } else if (incrementInt < 0) {
    return "down";
}
}

export function incrementColour(incrementInt){
    if (incrementInt > 0) {
       return "hsl(163, 72%, 41%)";
     } else if (incrementInt < 0) {
       return "hsl(356, 69%, 56%)";
   }
   }