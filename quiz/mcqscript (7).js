// Questions and Options Data
// Questions and Options Data
// Questions and Options Data
const questions = [
  {
    question: "सूर्यलाई के भनिन्छ?",
    options: ["तारा", "ग्रह", "उपग्रह", "धूमकेतु"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीमा कुल कति ग्रहहरू छन्?",
    options: ["आठ", "नौ", "सात", "दश"],
    correct: 0,
  },
  {
    question: "बृहस्पति ग्रहको सबैभन्दा ठूलो उपग्रह कुन हो?",
    options: ["ग्यानीमेड", "युरोपा", "कालिस्टो", "आईओ"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा सानो ग्रह कुन हो?",
    options: ["बुध", "शुक्र", "मंगल", "पृथ्वी"],
    correct: 0,
  },
  {
    question: "कुन ग्रहलाई 'लाल ग्रह' भनिन्छ?",
    options: ["मंगल", "शुक्र", "बृहस्पति", "नेप्च्यून"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठूलो ग्रह कुन हो?",
    options: ["बृहस्पति", "शनि", "युरेनस", "नेप्च्यून"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा बाहिरी ग्रह कुन हो?",
    options: ["नेप्च्यून", "युरेनस", "शनि", "बृहस्पति"],
    correct: 0,
  },
  {
    question: "सूर्यको ताप के हो?",
    options: ["परमाणु संलयन", "परमाणु विखण्डन", "रासायनिक प्रतिक्रिया", "वायुमण्डलीय दबाव"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा चम्किलो ग्रह कुन हो?",
    options: ["शुक्र", "पृथ्वी", "मंगल", "नेप्च्यून"],
    correct: 0,
  },
  {
    question: "पृथ्वीको प्राकृतिक उपग्रहलाई के भनिन्छ?",
    options: ["चन्द्रमा", "सूर्य", "तारा", "उल्का"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीमा धूमकेतुहरू कहाँबाट आउँछन्?",
    options: ["ओर्ट बादल", "कुइपर बेल्ट", "क्षुद्रग्रह पट्टी", "मंगल ग्रह"],
    correct: 0,
  },
  {
    question: "कुन ग्रहमा वलय (रिंग) हुन्छ?",
    options: ["शनि", "बृहस्पति", "युरेनस", "नेप्च्यून"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठूलो क्षुद्रग्रह कुन हो?",
    options: ["सीरिस", "भेस्टा", "पल्लास", "हाइजिया"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठूलो धूमकेतु कुन हो?",
    options: ["हेल-बोप", "हल्ली", "एनकेय", "हेयाकुटाके"],
    correct: 0,
  },
  {
    question: "मंगल ग्रहको सबैभन्दा ठूलो चन्द्रमा कुन हो?",
    options: ["फोबोस", "डिमोस", "युरोपा", "आईओ"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठूलो चट्टानी ग्रह कुन हो?",
    options: ["पृथ्वी", "मंगल", "शुक्र", "बुध"],
    correct: 0,
  },
  {
    question: "कुन ग्रहलाई 'ग्यास जायन्ट' भनिन्छ?",
    options: ["बृहस्पति", "शनि", "नेप्च्यून", "युरेनस"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीमा उल्का पिण्डहरू कहाँ पाईन्छन्?",
    options: ["क्षुद्रग्रह पट्टी", "कुइपर बेल्ट", "ओर्ट बादल", "मंगल ग्रह"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठूला ज्वालामुखी कुन ग्रहमा छन्?",
    options: ["मंगल", "शुक्र", "पृथ्वी", "बृहस्पति"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा ठूलो चन्द्रमा कुन हो?",
    options: ["ग्यानीमेड", "टाइटन", "युरोपा", "कालिस्टो"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीमा सबैभन्दा छिटो परिक्रमा गर्ने ग्रह कुन हो?",
    options: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीमा कुन ग्रहको आफ्नै प्रकाश छैन?",
    options: ["ग्रहहरू", "तारा", "धूमकेतु", "उल्का"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीमा सबैभन्दा छिटो घुम्ने ग्रह कुन हो?",
    options: ["बृहस्पति", "शनि", "नेप्च्यून", "युरेनस"],
    correct: 0,
  },
  {
    question: "सौर्य प्रणालीको सबैभन्दा पुरानो धूमकेतु कुन हो?",
    options: ["हल्ली", "हेल-बोप", "हेयाकुटाके", "एनकेय"],
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
