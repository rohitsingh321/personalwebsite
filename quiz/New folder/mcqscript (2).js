// Questions and Options Data
const questions = [
  {
    question: "Who is considered the 'Father of Computers'?",
    options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Ada Lovelace"],
    correct: 0,
  },
  {
    question: "What was the name of the first mechanical computer?",
    options: ["ENIAC", "Analytical Engine", "UNIVAC", "Difference Engine"],
    correct: 3,
  },
  {
    question: "The first programmable computer, Z3, was developed by:",
    options: ["Konrad Zuse", "Steve Jobs", "Alan Turing", "Charles Babbage"],
    correct: 0,
  },
  {
    question: "In what year was the first electronic computer, ENIAC, completed?",
    options: ["1939", "1943", "1946", "1951"],
    correct: 2,
  },
  {
    question: "The first generation of computers used:",
    options: ["Transistors", "Vacuum tubes", "Integrated Circuits", "Microprocessors"],
    correct: 1,
  },
  {
    question: "Who is known for breaking the German Enigma code during World War II?",
    options: ["John von Neumann", "Alan Turing", "Charles Babbage", "Grace Hopper"],
    correct: 1,
  },
  {
    question: "COBOL, one of the earliest programming languages, was developed by:",
    options: ["Grace Hopper", "Dennis Ritchie", "John Backus", "Ada Lovelace"],
    correct: 0,
  },
  {
    question: "Which company introduced the first commercially successful personal computer, the Altair 8800?",
    options: ["IBM", "Microsoft", "Apple", "MITS"],
    correct: 3,
  },
  {
    question: "What does the acronym UNIVAC stand for?",
    options: ["Universal Automatic Computer", "United Vacuum Analyzer Control", "Universal Advanced Calculator", "Unitary Automatic Computer"],
    correct: 0,
  },
  {
    question: "The first computer virus, 'Creeper,' was created in:",
    options: ["1960s", "1970s", "1980s", "1990s"],
    correct: 1,
  },
  {
    question: "The first high-level programming language was:",
    options: ["FORTRAN", "COBOL", "BASIC", "Pascal"],
    correct: 0,
  },
  {
    question: "Which company created the first floppy disk?",
    options: ["Apple", "IBM", "Microsoft", "Xerox"],
    correct: 1,
  },
  {
    question: "The mouse was invented by:",
    options: ["Steve Jobs", "Bill Gates", "Douglas Engelbart", "Alan Kay"],
    correct: 2,
  },
  {
    question: "The World Wide Web was invented by:",
    options: ["Vinton Cerf", "Tim Berners-Lee", "Marc Andreessen", "Larry Page"],
    correct: 1,
  },
  {
    question: "The first widely used operating system for personal computers was:",
    options: ["Windows", "UNIX", "MS-DOS", "Linux"],
    correct: 2,
  },
  {
    question: "What was the primary storage medium for early computers?",
    options: ["Magnetic tape", "Hard disks", "SSDs", "CDs"],
    correct: 0,
  },
  {
    question: "Which device marked the beginning of the third generation of computers?",
    options: ["Vacuum tubes", "Transistors", "Integrated Circuits", "Microprocessors"],
    correct: 2,
  },
  {
    question: "The concept of a stored-program computer was proposed by:",
    options: ["Alan Turing", "John von Neumann", "Charles Babbage", "Konrad Zuse"],
    correct: 1,
  },
  {
    question: "What year was the first iPhone released?",
    options: ["2005", "2007", "2009", "2010"],
    correct: 1,
  },
  {
    question: "The PDP-1, an early minicomputer, was developed by:",
    options: ["IBM", "DEC", "HP", "Intel"],
    correct: 1,
  },
  {
    question: "ARPANET, the precursor to the internet, was established in:",
    options: ["1959", "1963", "1969", "1972"],
    correct: 2,
  },
  {
    question: "The first laptop computer, Osborne 1, was introduced in:",
    options: ["1981", "1983", "1985", "1987"],
    correct: 0,
  },
  {
    question: "The term 'Artificial Intelligence' was first coined by:",
    options: ["Alan Turing", "John McCarthy", "Marvin Minsky", "Herbert Simon"],
    correct: 1,
  },
  {
    question: "The first graphical user interface (GUI) was developed by:",
    options: ["Apple", "Xerox", "Microsoft", "IBM"],
    correct: 1,
  },
  {
    question: "Who co-founded Microsoft?",
    options: ["Steve Jobs and Steve Wozniak", "Larry Page and Sergey Brin", "Bill Gates and Paul Allen", "Jeff Bezos and Elon Musk"],
    correct: 2,
  },
];


let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let timer;
let timeLeft = 20;
let answeredQuestions = [];

// HTML Elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const quitBtn = document.getElementById("quit-btn");
const timerElement = document.getElementById("timer");

// Load Question
function loadQuestion() {
  if (currentQuestionIndex >= questions.length) {
    goToResultPage();
    return;
  }

  // Reset previous selection and timer
  clearInterval(timer);
  timeLeft = 20;
  updateTimer();

  // Display question and options
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.onclick = () => selectOption(index, button);
    optionsElement.appendChild(button);
  });

  // Start timer
  timer = setInterval(handleTimer, 1000);
}

// Handle Option Selection
function selectOption(index, button) {
  if (selectedOption !== null) return; // Prevent re-selection
  selectedOption = index;

  // Highlight selected option
  const buttons = optionsElement.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    btn.style.backgroundColor = i === index ? "lightblue" : "blue";
  });

  // Check correctness
  if (index === questions[currentQuestionIndex].correct) {
    score++;
    button.classList.add("correct-option");
  } else {
    button.classList.add("wrong-option");
  }
}

// Handle Timer
function handleTimer() {
  timeLeft--;
  updateTimer();
  if (timeLeft <= 0) {
    clearInterval(timer);
    goToNextQuestion();
  }
}

// Update Timer Display
function updateTimer() {
  timerElement.textContent = `Time Left: ${timeLeft}s`;
}

// Go to Next Question
function goToNextQuestion() {
  answeredQuestions.push({
    question: questions[currentQuestionIndex].question,
    options: questions[currentQuestionIndex].options,
    correct: questions[currentQuestionIndex].correct,
    selected: selectedOption,
  });
  selectedOption = null;
  currentQuestionIndex++;
  loadQuestion();
}

// Go to Result Page
function goToResultPage() {
  clearInterval(timer);
  localStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
  localStorage.setItem("score", score);
  window.location.href = "result.html";
}

// Event Listeners
nextBtn.addEventListener("click", goToNextQuestion);
quitBtn.addEventListener("click", goToResultPage);

// Start Quiz
loadQuestion();
