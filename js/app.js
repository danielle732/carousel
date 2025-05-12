//Log In
let ans = "7564";
let password = " ";
while (ans != password) {
  password = prompt("Enter your 4 digit code");
  if (ans == password) {
    console.log("Welcome");
  } 

  else {
    console.log("Try again");
  }
}

//Cursor Follower
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

//Banner Animation
let n = 0;
let text = "Welcome";
let speed = 400;

window.onload = function type() {
  if (n < text.length) {
    document.getElementById("banner").innerHTML += text.charAt(n);
    n++;
    setTimeout(type, speed);
  }
};


//Change Background Colour
function changeBackground() {
  let color = document.querySelector("input[name=colour]:checked").value;

  if (color == "sage") {
    document.body.style.background = "#accaa1";
    document.body.style.color = "#000000";
  } 

  else if (color == "blue-grey") {
    document.body.style.background = "#AEBCC4";
    document.body.style.color = "#FFFFFF";
  } 

  else {
    document.body.style.background = "#F8F0E3";
    document.body.style.color = "#000000";
  }
}

//Carousel
let img = document.getElementById("img");
let opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
let id = 1;
let id2 = 1;
let vel = 0.1;
let dots = document.getElementsByClassName("dot");
let current = document.getElementsByClassName("dot active");
let caption = document.getElementById("caption");

// Loop through the buttons and add the active class to the current/clicked button
for (i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", " ");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

//Moving forward to next image
function next() {
  id = setInterval(hide, 50);
}

function hide() {
  //opacity is greater than 0 fade out
  if (opacity > 0) {
    opacity = opacity - vel;
    img.style.opacity = opacity;
  }

  //opacity is less than 0 change src and fade in
  if (opacity <= 0) {
    clearInterval(id);
    changeImg();
    id2 = setInterval(show, 50);
  }
}

function show() {
  if (opacity < 1) {
    opacity = opacity + vel;
    img.style.opacity = opacity;
  } 

  else {
    clearInterval(id2);
  }
}

let paint = "./img/Covered in Colour.JPG"; 
let waterfall ="./img/Waterfall.jpg"; 
let book = "./img/Read Between the Lines.jpg";

function changeImg() {
  if (img.src == paint) {
    //Switch from image 1 to image 2
    img.src = "./img/Waterfall.jpg";

    //Switch caption name
    caption.innerHTML = "Waterfall";

    //Switch active class from dot 1 to dot 2
    current[0].className = "dot";
    dots[1].className = "dot active";
  } 
  
  else if (img.src == waterfall) {
    //Switch from image 2 to image 3
    img.src = "./img/Read Between the Lines.jpg";

    //Switch caption name
    caption.innerHTML = "Read Between the Lines";

    //Switch active class from dot 1 to dot 3
    current[0].className = "dot";
    dots[2].className = "dot active";
  } 
  
  else {
    //Change to image 1
    img.src = "./img/Covered in Colour.JPG";

    //Switch caption name
    caption.innerHTML = "Covered in Colours";

    //Change active class back to dot 1
    current[0].className = "dot";
    dots[0].className = "dot active";
  }
}

//Moving Back an Image
function previous() {
  id = setInterval(fadeBack, 50);
}

function fadeBack() {
  if (opacity > 0) {
    opacity = opacity - vel;
    img.style.opacity = opacity;
  }

  if (opacity <= 0) {
    clearInterval(id);
    changeBack();
    id2 = setInterval(show, 50);
  }
}

function changeBack() {
  if (img.src == paint) {
    //Switching from iamge 1 to image 3
    img.src = "./img/Read Between the Lines.jpg";

    //Switch caption name
    caption.innerHTML = "Read Between the Lines";

    //Switch active class from dot 1 to dot 3
    current[0].className = "dot";
    dots[2].className = "dot active";
  } 
  
  else if (img.src == book) {
    //Switching from image 3 to image 2
    img.src = "./img/Waterfall.jpg";

    //Switch caption name
    caption.innerHTML = "Waterfall";

    //Switch active class from dot 1 to dot 2
    current[0].className = "dot";
    dots[1].className = "dot active";
  } 
  
  else {
    //Change to image 1
    img.src = "./img/Covered in Colour.JPG";

    //Switch caption name
    caption.innerHTML = "Covered in Colours";

    //Change active class back to dot 1
    current[0].className = "dot";
    dots[0].className = "dot active";
  }
}

//Switching image with onclick of dot
function img1() {
  img.src = "./img/Covered in Colour.JPG";
  caption.innerHTML = "Covered in Colours";
}

function img2() {
  img.src = "./img/Waterfall.jpg";
  caption.innerHTML = "Waterfall";
}

function img3() {
  img.src = "./img/Read Between the Lines.jpg";
  caption.innerHTML = "Read Between the Lines";
}
