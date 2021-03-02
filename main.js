var paragraphs = [
  '" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."',
  ' "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."',
]; // Paragraphs
var authors = ["Tanya Sinclair", "John Tarkpor"]; // Authors
var professions = ["UX Engineer", "Junior Front-end Developer"]; // Professions
var imagePaths = ["images/image-tanya.jpg", "images/image-john.jpg"]; // Paths to images
var imageAlt = ["Tanya profile picture", "John profile picture"]; // Alt text for each corresponding image

// Initialise slide length
var slideLength = paragraphs.length;

// Initialise current index
var currentIndex = 0;

// Initialise page elements
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

// Event listeners for buttons
// Previous button
var prevButton = document.getElementById("prev_button");
prevButton.addEventListener("click", function () {
  currentIndex = Math.abs(currentIndex - 1) % slideLength;
  elParagraph.innerHTML = paragraphs[currentIndex];
  elCredential.innerHTML = authors[currentIndex];
  elProfession.innerHTML = professions[currentIndex];
  elImage.src = imagePaths[currentIndex];
  elImage.alt = imageAlt[currentIndex];
});

// Next button
var nextButton = document.getElementById("next_button");
nextButton.addEventListener("click", function () {
  currentIndex = Math.abs(currentIndex + 1) % slideLength;
  elParagraph.innerHTML = paragraphs[currentIndex];
  elCredential.innerHTML = authors[currentIndex];
  elProfession.innerHTML = professions[currentIndex];
  elImage.src = imagePaths[currentIndex];
  elImage.alt = imageAlt[currentIndex];
});
