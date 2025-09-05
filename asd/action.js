document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const header = document.querySelector(".site-header");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }

  const quizForm = document.getElementById("quizForm");
  if (quizForm) {
    quizForm.addEventListener("submit", (e) => {
      e.preventDefault();
      checkQuiz();
    });
  }
});

function checkQuiz() {
  let score = 0;
  let total = 10;

  const answers = {
    q1: "2",
    q2: "2",
    q3: "1",
    q4: "1",
    q5: "2",
    q6: "2",
    q7: "2",
    q8: "3",
    q9: "2",
    q10: "2"
  };

  for (let i = 1; i <= total; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === answers[`q${i}`]) {
      score++;
    }
  }

  const result = document.getElementById("result");
  if (result) {
    result.innerText = `คุณได้คะแนน ${score} จาก ${total} คะแนน`;
  }
}
