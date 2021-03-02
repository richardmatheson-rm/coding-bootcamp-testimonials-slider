var paragraphs = [
  '" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."',
  '"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."',
];

var authors = ["Tanya Sinclair", "John Tarkpor"];

var professions = ["UX Engineer", "Junior Front-end Developer"];

var imagePaths = ["images/image-tanya.jpg", "images/image-john.jpg"];
var imageAlt = ["Tanya profile picture", "John profile picture"];

var slideLength = paragraphs.length;

console.log(slideLength);

// Initialise text (test)
// Obtain the element to input the paragraph
var elParagraph = document.getElementById("body_paragraph");
elParagraph.innerHTML = paragraphs[0];

var elCredential = document.getElementById("author");
elCredential.innerHTML = authors[0];

var elProfession = document.getElementById("profession");
elProfession.innerHTML = professions[0];

var elImage = document.getElementById("slide_image");
elImage.src = imagePaths[0];
elImage.alt = imageAlt[0];
