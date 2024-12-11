// Retrieve data from localStorage
const answeredQuestions = JSON.parse(localStorage.getItem("answeredQuestions"));
const score = localStorage.getItem("score") || 0;

// Elements
const scoreChart = document.getElementById("score-chart");
const detailedQuestions = document.getElementById("detailed-questions");
const playAgainBtn = document.getElementById("play-again-btn");
const nextChapterBtn = document.getElementById("next-chapter-btn");

// Pie Chart Configuration
function renderPieChart() {
  const ctx = scoreChart.getContext("2d");
  const totalQuestions = answeredQuestions.length;
  const wrongAnswers = totalQuestions - score;

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Correct Answers", "Wrong Answers"],
      datasets: [
        {
          data: [score, wrongAnswers],
          backgroundColor: ["#4CAF50", "#FF6347"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });
}

// Render Questions and Answers
function renderQuestions() {
  detailedQuestions.innerHTML = "";

  answeredQuestions.forEach((item, index) => {
    const questionBlock = document.createElement("div");
    questionBlock.classList.add("question-block");

    // Question Text
    const questionText = document.createElement("h3");
    questionText.textContent = `${index + 1}. ${item.question}`;
    questionBlock.appendChild(questionText);

    // Options
    item.options.forEach((option, idx) => {
      const optionButton = document.createElement("div");
      optionButton.textContent = option;
      optionButton.classList.add("option-btn");

      // Correct Option
      if (idx === item.correct) {
        optionButton.classList.add("correct-option");
      }

      // Incorrectly Selected Option
      if (idx === item.selected && idx !== item.correct) {
        optionButton.classList.add("wrong-option");
      }

      questionBlock.appendChild(optionButton);
    });

    detailedQuestions.appendChild(questionBlock);
  });
}

// Event Listeners
playAgainBtn.addEventListener("click", () => {
  window.location.href = "chapterfirst.html";
});

nextChapterBtn.addEventListener("click", () => {
  window.location.href = "chapter.html";
});

// Initial Render
renderPieChart();
renderQuestions();
