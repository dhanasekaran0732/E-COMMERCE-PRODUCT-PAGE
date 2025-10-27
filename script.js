// Image Gallery
const mainImage = document.getElementById("10.jpg");
const thumbs = document.querySelectorAll("0.jpg");

thumbs.forEach(img => {
  img.addEventListener("click", () => {
    thumbs.forEach(t => t.classList.remove("active"));
    img.classList.add("active");
    mainImage.src = img.src;
  });
});

// Quantity Control
let count = 1;
const qty = document.getElementById("qty");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.addEventListener("click", () => {
  count++;
  qty.textContent = count;
});

minus.addEventListener("click", () => {
  if (count > 1) count--;
  qty.textContent = count;
});
