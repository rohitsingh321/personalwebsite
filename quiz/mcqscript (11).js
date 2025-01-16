// Questions and Options Data
// Questions and Options Data
// Questions and Options Data
const questions = [
  {
    question: "नेपालको सबैभन्दा लामो नदी कुन हो?",
    options: ["कोशी", "गण्डकी", "महाकाली", "कमला"],
    correct: 0,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो हिमनदी कुन हो?",
    options: ["सोलु हिमनदी", "क्याँग्रा हिमनदी", "यलु हिमनदी", "रामचुली हिमनदी"],
    correct: 1,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो ताल कुन हो?",
    options: ["फेवाताल", "रारा ताल", "पोखरा ताल", "सिन्धुली ताल"],
    correct: 1,
  },
  {
    question: "नेपालको सबैभन्दा गहिरो ताल कुन हो?",
    options: ["पाँचचुली ताल", "सिन्धुली ताल", "रारा ताल", "फेवाताल"],
    correct: 2,
  },
  {
    question: "नेपालको सबैभन्दा प्रख्यात नदी कुन हो?",
    options: ["कोशी", "गण्डकी", "सप्तकोशी", "महाकाली"],
    correct: 0,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो जलप्रपात कुन हो?",
    options: ["हर्सि प्रपात", "सोर्तेनी प्रपात", "झरना प्रपात", "बिस्कोट"],
    correct: 0,
  },
  {
    question: "नेपालको उत्तरी सीमा कस्तो छ?",
    options: ["नेपालले चीनसँग सीमा साझा गर्छ", "नेपालले भारतसँग सीमा साझा गर्छ", "नेपालको सीमा समुद्रसँग छ", "नेपालको सीमासम्म पानी पुग्दैन"],
    correct: 0,
  },
  {
    question: "नेपालको पहाडी भूगोल कुन विन्दुमा पाइन्छ?",
    options: ["हिमालय", "तराई", "गण्डकी", "पहाडी क्षेत्र"],
    correct: 3,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो पर्वत कुन हो?",
    options: ["सगरमाथा", "धौलागिरी", "कञ्चनजंगा", "अन्नपूर्ण"],
    correct: 0,
  },
  {
    question: "नेपालमा कुनै ठूलो ज्वालामुखी छ?",
    options: ["छैन", "अन्नपूर्ण", "कन्चनजंगा", "धौलागिरी"],
    correct: 0,
  },
  {
    question: "नेपालमा कुन नदी जलग्रहण क्षेत्र सबैभन्दा ठूलो छ?",
    options: ["गण्डकी नदी", "कोशी नदी", "महाकाली नदी", "कर्णाली नदी"],
    correct: 1,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो गुफा कुन हो?",
    options: ["पाटन गुफा", "गोर्खा गुफा", "पालुङ टार गुफा", "सिद्ध गुफा"],
    correct: 3,
  },
  {
    question: "नेपालमा कति प्रमुख नदी प्रणालीहरू छन्?",
    options: ["१०", "१५", "२०", "२५"],
    correct: 2,
  },
  {
    question: "नेपालको सबैभन्दा प्रसिद्ध पर्वत र कस्को नाम हो?",
    options: ["सगरमाथा", "धौलागिरी", "कञ्चनजंगा", "अन्नपूर्ण"],
    correct: 0,
  },
  {
    question: "नेपालमा पाइने सबैभन्दा ठूलो जंगल कुन हो?",
    options: ["सुक्लाफाटा जंगल", "बर्दिया जंगल", "कञ्चनजंगा जंगल", "सागार जंगल"],
    correct: 1,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो मैदानी क्षेत्र कुन हो?",
    options: ["तराई", "गण्डकी", "पुर्बी नेपाल", "हिमालय"],
    correct: 0,
  },
  {
    question: "नेपालको दक्षिणी सीमा कहाँ पाइन्छ?",
    options: ["भारतसँग", "चीनसँग", "बंगलादेशसँग", "पाकिस्तानसँग"],
    correct: 0,
  },
  {
    question: "नेपालका कुन प्रमुख प्रजाति हराएका छन्?",
    options: ["मगर", "रेगार", "मुसल", "गोरखा"],
    correct: 0,
  },
  {
    question: "नेपालको सबैभन्दा लामो भूगोल कस्तो छ?",
    options: ["अल्सवांछ", "पहाड़ी भूगोल", "प्राकृतिक भूगोल", "पथल्ली"],
    correct: 1,
  },
  {
    question: "नेपालको सबैभन्दा उच्च पर्वत र शिखर कुन हो?",
    options: ["सगरमाथा", "धौलागिरी", "कञ्चनजंगा", "अन्नपूर्ण"],
    correct: 0,
  },
  {
    question: "नेपालको जलवायु कस्तो छ?",
    options: ["उष्णकटिबंधीय", "मध्यम", "समशीतोष्ण", "हिमाली"],
    correct: 2,
  },
  {
    question: "नेपालमा सबैभन्दा ठूलो चट्टान कुन हो?",
    options: ["पृथ्वीको सफा चट्टान", "माघा चट्टान", "तराई चट्टान", "छुटेको"],
    correct: 1,
  },
  {
    question: "नेपालका विभिन्न भूगोलहरू के नाममा पाइन्छ?",
    options: ["पर्वत", "समुद्र", "मध्य हिमालय", "समृद्ध पोखरा"],
    correct: 3,
  }
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
