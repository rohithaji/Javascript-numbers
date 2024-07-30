
let num = parseInt(prompt("Enter the number between 0 and 1 million"));
let sum = 0;

if (num > 0 && num <= 1000000) {
  for (let i = 1; i <= num; i++) 
  {
    sum = sum + i;
  }
}
 else {
  alert("Refresh the page and re-enter the number between 0 and 1 million");
}

document.write(`Sum of numbers up to ${num} is ${sum}`);