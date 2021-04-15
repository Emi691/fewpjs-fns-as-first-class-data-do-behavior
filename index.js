/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  const parseTime = parseInt(timeString.split(':')[0])
  if (parseTime < 12){
  return "Good Morning"
  } else if (parseTime > 17){
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(message){
  const greeting = document.querySelector('#greeting')
  greeting.innerText = message
}
