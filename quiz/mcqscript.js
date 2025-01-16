// Questions and Options Data
// Questions and Options Data
const questions = [
  {
    question: "क्षेत्रफलको आधारमा युरोपको सबैभन्दा ठूलो देश कुन हो?",
    options: ["फ्रान्स", "युक्रेन", "रूस", "स्पेन"],
    correct: 2,
  },
  {
    question: "युरोपको सबैभन्दा लामो नदी कुन हो?",
    options: ["राइन", "डानुब", "भोल्गा", "थेम्स"],
    correct: 2,
  },
  {
    question: "जर्मनीको राजधानी शहर कुन हो?",
    options: ["बर्लिन", "म्युनिक", "ह्याम्बर्ग", "फ्रान्कफर्ट"],
    correct: 0,
  },
  {
    question: "कुन पर्वत शृङ्खलाले युरोपलाई एशियाबाट अलग गर्छ?",
    options: ["आल्प्स", "पाइरेनीज", "युराल पर्वत", "कार्पेथियन्स"],
    correct: 2,
  },
  {
    question: "कुन युरोपेली देशलाई 'हजारौं तालहरूको देश' भनेर चिनिन्छ?",
    options: ["नर्वे", "स्वीडेन", "फिनल्यान्ड", "आइसल्यान्ड"],
    correct: 2,
  },
  {
    question: "आइफल टावर कुन युरोपेली शहरमा अवस्थित छ?",
    options: ["लन्डन", "रोम", "पेरिस", "म्याड्रिड"],
    correct: 2,
  },
  {
    question: "युरोपको उत्तरमा कुन समुद्र सिमाना छ?",
    options: ["भूमध्यसागर", "बाल्टिक सागर", "कालो सागर", "उत्तर सागर"],
    correct: 1,
  },
  {
    question: "कुन युरोपेली देशमा सबैभन्दा धेरै टापुहरू छन्?",
    options: ["नर्वे", "स्वीडेन", "ग्रीस", "इटाली"],
    correct: 1,
  },
  {
    question: "युरोपेली संघको आधिकारिक मुद्रा के हो?",
    options: ["पाउन्ड", "यूरो", "डॉलर", "फ्रांक"],
    correct: 1,
  },
  {
    question: "क्षेत्रफलको हिसाबले युरोपको सबैभन्दा सानो देश कुन हो?",
    options: ["स्यान मारिनो", "मोनाको", "भेटिकन सिटी", "लिक्टेनस्टाइन"],
    correct: 2,
  },
  {
    question: "कुन युरोपेली शहर आफ्नो नहरहरू र गोंडोलाहरूको लागि प्रसिद्ध छ?",
    options: ["भेनिस", "एम्स्टर्डम", "कोपेनहेगन", "ब्रुग्स"],
    correct: 0,
  },
  {
    question: "कुन देश आफ्नो ट्यूलिप र पवनचक्कीहरूको लागि प्रसिद्ध छ?",
    options: ["डेनमार्क", "नेदरल्याण्ड", "बेल्जियम", "स्विजरल्यान्ड"],
    correct: 1,
  },
  {
    question: "एक्रोपोलिस कुन शहरमा अवस्थित छ?",
    options: ["रोम", "एथेन्स", "इस्तानबुल", "बार्सिलोना"],
    correct: 1,
  },
  {
    question: "कुन युरोपेली देशको आकार बुट जस्तो छ?",
    options: ["फ्रान्स", "स्पेन", "इटाली", "पुर्तगाल"],
    correct: 2,
  },
  {
    question: "स्पेनको राजधानी शहर कुन हो?",
    options: ["बार्सिलोना", "म्याड्रिड", "सेभिल", "भ्यालेन्सिया"],
    correct: 1,
  },
  {
    question: "स्टोनहेंज कुन देशमा अवस्थित छ?",
    options: ["आयरल्याण्ड", "वेल्स", "इङ्गल्याण्ड", "स्कटल्यान्ड"],
    correct: 2,
  },
  {
    question: "कुन युरोपेली देश आफ्नो घडी र चकलेटहरूको लागि प्रसिद्ध छ?",
    options: ["जर्मनी", "स्विजरल्यान्ड", "अष्ट्रिया", "बेल्जियम"],
    correct: 1,
  },
  {
    question: "कुन स्क्यान्डिनेभियाली देश आफ्नो फजर्डहरूको लागि प्रसिद्ध छ?",
    options: ["डेनमार्क", "स्वीडेन", "नर्वे", "फिनल्यान्ड"],
    correct: 2,
  },
  {
    question: "अष्ट्रियाको राजधानी शहर कुन हो?",
    options: ["भियना", "साल्जबर्ग", "ग्राज", "इनसब्रुक"],
    correct: 0,
  },
  {
    question: "कुन युरोपेली देश क्यान्टनहरूमा विभाजित छ?",
    options: ["बेल्जियम", "स्विजरल्यान्ड", "अष्ट्रिया", "लक्जमबर्ग"],
    correct: 1,
  },
  {
    question: "कुन देश आफ्नो प्राचीन कोलोसियमको लागि प्रसिद्ध छ?",
    options: ["फ्रान्स", "इटाली", "ग्रीस", "पुर्तगाल"],
    correct: 1,
  },
  {
    question: "कुन युरोपेली देशले भूमध्यसागर र एटलान्टिक तटलाइन दुबै छ?",
    options: ["फ्रान्स", "स्पेन", "पुर्तगाल", "इटाली"],
    correct: 0,
  },
  {
    question: "प्रसिद्ध 'रेड स्क्वायर' कुन युरोपेली शहरमा अवस्थित छ?",
    options: ["मस्को", "वार्सा", "बर्लिन", "प्राग"],
    correct: 0,
  },
  {
    question: "नर्वेको राजधानी शहर कुन हो?",
    options: ["स्टकहोम", "हेलेसिंकी", "ओस्लो", "कोपेनहेगन"],
    correct: 2,
  },
  {
    question: "कुन देश ट्रान्सल्भानियाको ऐतिहासिक क्षेत्रको घर हो?",
    options: ["हंगेरी", "रोमानिया", "बुल्गेरिया", "युक्रेन"],
    correct: 1,
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
