// Using selectors inside the element.
// Traversing the DOM.

const btns = document.querySelectorAll(".question-btn"); // Get all the buttons from HTML. Then loop forEach().

btns.forEach(function (buttons) {
  buttons.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
