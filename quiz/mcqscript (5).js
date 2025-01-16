// Questions and Options Data
// Questions and Options Data
const questions = [
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठूलो ग्रह कुन हो?",
    options: ["पृथ्वी", "शनि", "बृहस्पति", "मंगल"],
    correct: 2,
  },
  {
    question: "सूर्यलाई घेरिएको मुख्य वस्तु के हो?",
    options: ["ग्रह", "उपग्रह", "उल्का", "धूमकेतु"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा सानो ग्रह कुन हो?",
    options: ["बुध", "पृथ्वी", "शुक्र", "मंगल"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीमा कति ग्रहहरू छन्?",
    options: ["सात", "आठ", "नौ", "दश"],
    correct: 1,
  },
  {
    question: "सूर्यको तापमानको प्रमुख स्रोत के हो?",
    options: ["परमाणु विखण्डन", "परमाणु संलयन", "रासायनिक प्रतिक्रिया", "वायुमण्डलीय दबाव"],
    correct: 1,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा बाहिरी ग्रह कुन हो?",
    options: ["नेप्च्यून", "शनि", "युरेनस", "बृहस्पति"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा चम्किलो ग्रह कुन हो?",
    options: ["शुक्र", "पृथ्वी", "मंगल", "नेप्च्यून"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा छिटो परिक्रमा गर्ने ग्रह कुन हो?",
    options: ["बुध", "पृथ्वी", "शुक्र", "मंगल"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीमा, पृथ्वीको प्राकृतिक उपग्रहलाई के भनिन्छ?",
    options: ["चन्द्रमा", "सूर्य", "तारा", "धूमकेतु"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठूलो उपग्रह कुन हो?",
    options: ["ग्यानीमेड", "टाइटन", "युरोपा", "कैलिस्टो"],
    correct: 0,
  },
  {
    question: "कुन ग्रहको दिन सौर्य प्रणालीमा सबैभन्दा लामो छ?",
    options: ["शुक्र", "पृथ्वी", "बृहस्पति", "मंगल"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठूलो धूमकेतु कुन हो?",
    options: ["हल्लीको धूमकेतु", "एनकेय", "हेल-बोप", "हेयाकुटाके"],
    correct: 2,
  },
  {
    question: "कुन ग्रहलाई 'लाल ग्रह' भनेर चिनिन्छ?",
    options: ["मंगल", "शुक्र", "पृथ्वी", "नेप्च्यून"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा घना ग्रह कुन हो?",
    options: ["पृथ्वी", "बृहस्पति", "शनि", "मंगल"],
    correct: 0,
  },
  {
    question: "कुन ग्रहको सबैभन्दा धेरै चन्द्रमा छन्?",
    options: ["शनि", "बृहस्पति", "युरेनस", "नेप्च्यून"],
    correct: 1,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठंडा ग्रह कुन हो?",
    options: ["नेप्च्यून", "शनि", "युरेनस", "मंगल"],
    correct: 2,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा छिटो घुम्ने ग्रह कुन हो?",
    options: ["बृहस्पति", "शनि", "पृथ्वी", "मंगल"],
    correct: 0,
  },
  {
    question: "कुन ग्रहलाई 'ग्यास जायन्ट' भनेर चिनिन्छ?",
    options: ["बृहस्पति", "शनि", "नेप्च्यून", "मंगल"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठूलो पथ्थरीलो ग्रह कुन हो?",
    options: ["पृथ्वी", "शुक्र", "मंगल", "बृहस्पति"],
    correct: 0,
  },
  {
    question: "कुन ग्रहलाई 'सूर्यको सन्तान' भनेर चिनिन्छ?",
    options: ["शुक्र", "बृहस्पति", "मंगल", "पृथ्वी"],
    correct: 1,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा सानो चन्द्रमा कुन हो?",
    options: ["डिमोस", "फोबस", "एन्केलाडस", "मिमस"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठूलो खगोलिय घटना के हो?",
    options: ["सौर्य ग्रहण", "चन्द्र ग्रहण", "धूमकेतु पास", "ग्रहको परिक्रमा"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठूलो वायुमण्डलीय चाप कुन ग्रहमा छ?",
    options: ["शनि", "बृहस्पति", "नेप्च्यून", "पृथ्वी"],
    correct: 1,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठूलो ज्वालामुखी कुन ग्रहमा छ?",
    options: ["मंगल", "शुक्र", "पृथ्वी", "बृहस्पति"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा छिटो घुम्ने उपग्रह कुन हो?",
    options: ["आईओ", "युरोपा", "ग्यानीमेड", "टाइटन"],
    correct: 0,
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
