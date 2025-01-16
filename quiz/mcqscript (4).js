// Questions and Options Data
// Questions and Options Data
const questions = [
  {
    question: "क्षेत्रफलको आधारमा दक्षिण अमेरिकाको सबैभन्दा ठूलो देश कुन हो?",
    options: ["अर्जेन्टिना", "ब्राजिल", "पेरु", "कोलम्बिया"],
    correct: 1,
  },
  {
    question: "दक्षिण अमेरिकाको सबैभन्दा लामो नदी कुन हो?",
    options: ["अमेजन", "पाराग्वे", "ओरिनोको", "माडेइरा"],
    correct: 0,
  },
  {
    question: "कुन देशलाई 'इंकाको देश' भनेर चिनिन्छ?",
    options: ["चिली", "पेरु", "बोलिभिया", "इक्वेडर"],
    correct: 1,
  },
  {
    question: "दक्षिण अमेरिकाको सबैभन्दा ठूलो मरुभूमि कुन हो?",
    options: ["आटाकामा", "प्याटागोनिया", "सेचुरा", "ग्रान चाको"],
    correct: 0,
  },
  {
    question: "दक्षिण अमेरिकाको सबैभन्दा ठूलो झरना कुन हो?",
    options: ["एन्जल झरना", "इग्वाजु झरना", "कैट्राक झरना", "कोकोडल झरना"],
    correct: 0,
  },
  {
    question: "कुन देशको राजधानी ब्रासिलिया हो?",
    options: ["चिली", "अर्जेन्टिना", "ब्राजिल", "उरुग्वे"],
    correct: 2,
  },
  {
    question: "दक्षिण अमेरिकाको सबैभन्दा ठूलो ताल कुन हो?",
    options: ["टिटिकाका ताल", "पोयोपो ताल", "माराकाइबो ताल", "पाटोस ताल"],
    correct: 0,
  },
  {
    question: "कुन देशलाई 'जंगलको फोक्सो' भनेर चिनिन्छ?",
    options: ["ब्राजिल", "पेरु", "भेनेजुएला", "कोलम्बिया"],
    correct: 0,
  },
  {
    question: "दक्षिण अमेरिकाको सबैभन्दा अग्लो पर्वत कुन हो?",
    options: ["आकनकागुआ", "साल्टो", "हुवास्कारान", "लियुलिया"],
    correct: 0,
  },
  {
    question: "कुन देशलाई 'सातौं महादेशको क्यानरी' भनेर चिनिन्छ?",
    options: ["उरुग्वे", "पाराग्वे", "गुएना", "सुरिनाम"],
    correct: 3,
  },
  {
    question: "कुन देशले 'कापुएरा' नामक सांस्कृतिक नृत्यको उद्गम स्थल मानिन्छ?",
    options: ["ब्राजिल", "अर्जेन्टिना", "चिली", "पेरु"],
    correct: 0,
  },
  {
    question: "दक्षिण अमेरिकाको सबैभन्दा ठूलो आर्थिक शक्ति कुन देश हो?",
    options: ["अर्जेन्टिना", "ब्राजिल", "चिली", "कोलम्बिया"],
    correct: 1,
  },
  {
    question: "कुन देशलाई 'अन्डेसको क्षेत्र' भनिन्छ?",
    options: ["पेरु", "चिली", "बोलिभिया", "इक्वेडर"],
    correct: 2,
  },
  {
    question: "दक्षिण अमेरिकाको सबैभन्दा ठूलो वर्षा वन कुन हो?",
    options: ["अमेजन वर्षा वन", "आटाकामा वन", "ग्रान चाको वन", "लोस ल्य्यानोस"],
    correct: 0,
  },
  {
    question: "कुन देशको राजधानी सान्तियागो हो?",
    options: ["चिली", "अर्जेन्टिना", "ब्राजिल", "उरुग्वे"],
    correct: 0,
  },
  {
    question: "दक्षिण अमेरिकाको सबैभन्दा जनसंख्या भएको देश कुन हो?",
    options: ["अर्जेन्टिना", "ब्राजिल", "पेरु", "कोलम्बिया"],
    correct: 1,
  },
  {
    question: "कुन देशलाई 'तांबाको देश' भनिन्छ?",
    options: ["पेरु", "चिली", "ब्राजिल", "बोलिभिया"],
    correct: 1,
  },
  {
    question: "कुन देशले 'फुटबलको मक्का' भनेर चिनिन्छ?",
    options: ["अर्जेन्टिना", "ब्राजिल", "उरुग्वे", "कोलम्बिया"],
    correct: 1,
  },
  {
    question: "दक्षिण अमेरिकाको सबैभन्दा पुरानो सभ्यता कुन हो?",
    options: ["इन्का", "माया", "आज्टेक", "चिमु"],
    correct: 0,
  },
  {
    question: "कुन देशले 'साल्सा नृत्य'को उद्गम स्थल मानिन्छ?",
    options: ["क्युबा", "पेरु", "भेनेजुएला", "कोलम्बिया"],
    correct: 3,
  },
  {
    question: "दक्षिण अमेरिकाको सबैभन्दा ठूलो राष्ट्रिय पार्क कुन हो?",
    options: ["मानु राष्ट्रिय पार्क", "तोरेस डेल पाइन", "गालापागोस पार्क", "ल्यानोस डेल चाको"],
    correct: 0,
  },
  {
    question: "कुन देशलाई 'सूर्यको छोरा' भनेर चिनिन्छ?",
    options: ["पेरु", "चिली", "इक्वेडर", "बोलिभिया"],
    correct: 0,
  },
  {
    question: "दक्षिण अमेरिकाको सबैभन्दा ठूलो महासागर कुन हो?",
    options: ["अटलान्टिक महासागर", "प्रशान्त महासागर", "आर्कटिक महासागर", "इन्डियन महासागर"],
    correct: 1,
  },
  {
    question: "कुन देशले 'टंगो नृत्य'को उद्गम स्थल मानिन्छ?",
    options: ["अर्जेन्टिना", "ब्राजिल", "चिली", "पेरु"],
    correct: 0,
  },
  {
    question: "दक्षिण अमेरिकाको सबैभन्दा ठूलो तटीय रेगिस्तान कुन हो?",
    options: ["आटाकामा रेगिस्तान", "सेचुरा रेगिस्तान", "प्याटागोनिया रेगिस्तान", "ग्रान चाको"],
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
