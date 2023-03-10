// Get the modal
const modal = document.querySelector(".modal");

// Get the button that opens the modal
const btn = document.querySelector("#contact-btn");

// Get the close button
const closeBtn = document.querySelector(".close-btn");

const modalForm = document.querySelector(".modal-form");

// When the user clicks the button, open the modal
btn.addEventListener("click", () => {
  modal.classList.add("active");
//   modalForm.classList.add("active");

});

// When the user clicks on the close button, close it
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// When the user clicks outside the modal, close it
document.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.classList.remove("active");
  }
});

//When the user press ESC button on keyboard, close it
document.addEventListener("keyup", (e) => {
    if(e.keyCode === 27) {
        modal.classList.remove("active");
    }
});