console.log("✅ JS file connected!");
// --- Select all project boxes ---
const projects = document.querySelectorAll(".project-box");

// --- Modal elements ---
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// --- Handle click on each project box ---
projects.forEach(box => {
  box.addEventListener("click", () => {
    // Get the background image URL from CSS
    const bgImage = getComputedStyle(box).backgroundImage;
    // Extract actual image path: url("Projects/project1.png") → Projects/project1.png
    const imageURL = bgImage.slice(5, -2);

    // Show modal and insert image
    modal.style.display = "flex";
    modalImg.src = imageURL;
  });
});

// --- Close modal on X click ---
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// --- Close modal when clicking outside the image ---
modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

