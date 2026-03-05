export default function decorate(block) {
  const rows = [...block.children];

  const prevText = rows[0].textContent;
  const nextText = rows[rows.length - 1].textContent;

  const slides = rows.slice(1, rows.length - 1);

  const track = document.createElement("div");
  track.className = "carousel-track";

  slides.forEach((slide) => {
    track.appendChild(slide);
  });

  block.innerHTML = "";
  block.appendChild(track);

  const prevBtn = document.createElement("button");
  prevBtn.className = "carousel-nav carousel-prev";
  prevBtn.textContent = prevText;

  const nextBtn = document.createElement("button");
  nextBtn.className = "carousel-nav carousel-next";
  nextBtn.textContent = nextText;

  block.appendChild(prevBtn);
  block.appendChild(nextBtn);

  let index = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = slides.length - 1;
    updateSlide();
  });

  nextBtn.addEventListener("click", () => {
    index++;
    if (index >= slides.length) index = 0;
    updateSlide();
  });
}