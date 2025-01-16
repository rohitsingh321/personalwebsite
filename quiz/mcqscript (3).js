// Questions and Options Data
// Questions and Options Data
const questions = [
  {
    question: "क्षेत्रफलको आधारमा अफ्रिकाको सबैभन्दा ठूलो देश कुन हो?",
    options: ["अल्जेरिया", "सुडान", "लिबिया", "डेमोक्रेटिक रिपब्लिक अफ कंगो"],
    correct: 0,
  },
  {
    question: "अफ्रिकाको सबैभन्दा लामो नदी कुन हो?",
    options: ["नाइल", "कोन्गो", "नाइजर", "जम्बेजी"],
    correct: 0,
  },
  {
    question: "कुन देशलाई 'फारवोन्नको भूमि' भनेर चिनिन्छ?",
    options: ["केन्या", "इजिप्ट", "नाइजीरिया", "दक्षिण अफ्रिका"],
    correct: 1,
  },
  {
    question: "अफ्रिकाको सबैभन्दा ठूलो मरुभूमि कुन हो?",
    options: ["सहारा", "कालाहारी", "नामीब", "लिबियन"],
    correct: 0,
  },
  {
    question: "कुन अफ्रिकी देशको राजधानी काहिरा हो?",
    options: ["सुडान", "इजिप्ट", "लिबिया", "मोरक्को"],
    correct: 1,
  },
  {
    question: "अफ्रिकाको सबैभन्दा ठूलो ताल कुन हो?",
    options: ["भिक्टोरिया ताल", "टांगानिका ताल", "मालावी ताल", "चाड ताल"],
    correct: 0,
  },
  {
    question: "अफ्रिकाको सबैभन्दा ठूलो द्वीप कुन हो?",
    options: ["माडागास्कर", "सेशेल्स", "मौरिटानिया", "जांजिबार"],
    correct: 0,
  },
  {
    question: "कुन देशलाई 'सिंहको भूमि' भनेर चिनिन्छ?",
    options: ["घाना", "केन्या", "इथियोपिया", "नामीबिया"],
    correct: 2,
  },
  {
    question: "अफ्रिकाको सबैभन्दा ठूलो झरना कुन हो?",
    options: ["भिक्टोरिया झरना", "तुगेला झरना", "कालाम्बो झरना", "ब्लू नाइल झरना"],
    correct: 0,
  },
  {
    question: "कुन देशले 'गोल्ड कोस्ट' भनेर चिनिन्छ?",
    options: ["घाना", "नाइजीरिया", "आइभोरी कोस्ट", "सियरा लिओन"],
    correct: 0,
  },
  {
    question: "कुन अफ्रिकी देशमा पिरामिडहरू अवस्थित छन्?",
    options: ["इजिप्ट", "सुडान", "मोरक्को", "अल्जेरिया"],
    correct: 0,
  },
  {
    question: "कुन देशलाई 'मगेरब' भनेर चिनिन्छ?",
    options: ["मोरक्को", "ट्युनिसिया", "अल्जेरिया", "लिबिया"],
    correct: 0,
  },
  {
    question: "अफ्रिकाको सबैभन्दा जनसंख्या भएको देश कुन हो?",
    options: ["नाइजीरिया", "इजिप्ट", "इथियोपिया", "दक्षिण अफ्रिका"],
    correct: 0,
  },
  {
    question: "अफ्रिकाको सबैभन्दा अग्लो पर्वत कुन हो?",
    options: ["किलिमञ्जारो", "माउन्ट केन्या", "रुवेन्जोरी", "माउन्ट मेराब"],
    correct: 0,
  },
  {
    question: "कुन अफ्रिकी देशमा केप टाउन अवस्थित छ?",
    options: ["नामीबिया", "दक्षिण अफ्रिका", "बोत्स्वाना", "जिम्बाब्वे"],
    correct: 1,
  },
  {
    question: "कुन देशलाई 'सन्' भनेर चिनिन्छ?",
    options: ["सेशेल्स", "माडागास्कर", "मार्सेस", "मौरिटानिया"],
    correct: 0,
  },
  {
    question: "अफ्रिकाको सबैभन्दा ठूलो जनजाति कुन हो?",
    options: ["अरब", "बन्तु", "निलो", "सना"],
    correct: 1,
  },
  {
    question: "कुन देशलाई 'अफ्रिकाको कान' भनेर चिनिन्छ?",
    options: ["सोमालिया", "इथियोपिया", "केन्या", "जिबूती"],
    correct: 0,
  },
  {
    question: "कुन अफ्रिकी देशले अफ्रिकी संघको मुख्यालय होस्ट गर्दछ?",
    options: ["इथियोपिया", "नाइजीरिया", "दक्षिण अफ्रिका", "घाना"],
    correct: 0,
  },
  {
    question: "अफ्रिकाको सबैभन्दा ठूलो संरक्षित क्षेत्र कुन हो?",
    options: ["सारङ्गेटी", "क्रुगर नेशनल पार्क", "ओकाभाङ्गो डेल्टा", "एटोशा"],
    correct: 0,
  },
  {
    question: "कुन देशलाई 'हिराको देश' भनेर चिनिन्छ?",
    options: ["बोत्स्वाना", "दक्षिण अफ्रिका", "नामीबिया", "अंगोला"],
    correct: 1,
  },
  {
    question: "अफ्रिकाको सबैभन्दा ठूलो आर्थिक क्षेत्र कुन हो?",
    options: ["दक्षिण अफ्रिका", "नाइजीरिया", "इजिप्ट", "अल्जेरिया"],
    correct: 1,
  },
  {
    question: "कुन अफ्रिकी देशले आफ्नो स्वतन्त्रता सन् १९९० मा प्राप्त गर्यो?",
    options: ["नामीबिया", "बोत्स्वाना", "जिम्बाब्वे", "मोजाम्बिक"],
    correct: 0,
  },
  {
    question: "कुन देशलाई 'जोहान्सबर्गको भूमि' भनेर चिनिन्छ?",
    options: ["दक्षिण अफ्रिका", "केन्या", "नाइजीरिया", "घाना"],
    correct: 0,
  },
  {
    question: "अफ्रिकाको सबैभन्दा पुरानो सभ्यता कुन हो?",
    options: ["इजिप्ट", "कुश", "कार्थेज", "नुबिया"],
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
