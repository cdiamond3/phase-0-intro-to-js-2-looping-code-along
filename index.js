const cards = {
 names: ["Lisa", "Kaitlin", "Jan"],
 events: "Suprise"
}

function writeCards(names, event) {
  let newArray = [];
  for (let i = 0; i < names.length; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
  }
  return newArray;
}

writeCards(cards); 

function countDown(a) {
    let countdown = 0;
    while (countdown < 11) {
        console.log(countdown++);
    }
}