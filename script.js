//this is my code

console.log("Hello World")

let place ="London"
console.log(place)

let year = 2025
console.log(year)

let oranges = 10
let rotten = 3
let people = 5

oranges = oranges + 10
oranges = oranges - rotten
oranges = oranges * 4
oranges = oranges / people

console.log(oranges)

let apples = 4

function increaseapples(){
    apples = apples + 1
    console.log(apples)
}

increaseapples()
increaseapples()
increaseapples()

function sum(num1, num2){
    let result = num1 + num2
    console.log(result)
}

  sum(3, 7)
  sum(10, 25)

function summ (num1, num2, num3){
   let result = num1 + num2 + num3
   console.log(result)
}

   summ(4,5,6)

   function subtract (num1, num2){
    let result = num1 - num2
    console.log(result)
   }

   subtract(100, 40)

   function multiply (num1){
    let result = num1 * num1
    console.log(result)
   }

   multiply(7)

   function divide (num1, num2){
    let result = num1 /  num2
    console.log(result)
   }

   divide(100, 67)

   $("p").css("color", "pink")

   $(".funky").css("font-size", "35px")

   function lowerOpacity(){
     $("p").toggleClass("hide")
   }
   $("p").click(lowerOpacity)

   function showModal(){
    $(".modal").toggleClass("show")
   }
   $(".button").click(showModal)
   $(".modal").click(showModal)

   function showText(){
    $(this).css("opacity", "1")
   }
   
   function hideText(){
    $(this).css("opacity", "0")
   }

   $("p").hover(showText, hideText)


// function changeColor(){
//   let randomR = Math.random() * 255
//   let randomG = Math.random() * 255
//   let randomB = Math.random() * 255
 
 
//   $("p").css("color", "rgb("+randomR+","+randomG+", "+randomB+")")
//   // $("body").css("background", "rgb("+randomR+","+randomG+", "+randomB+")")
// }

// $(window).scroll(changeColor)

setInterval(() => {
  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);
  
  $("p").css("color", `rgb(${randomR}, ${randomG}, ${randomB})`);
}, 5000);

$(window).on("scroll", function() {
  $(".popup-image").show(); // Show the image

  setTimeout(() => {
      $(".popup-image").hide(); // Hide the image after 1 second
  }, 1000);
});