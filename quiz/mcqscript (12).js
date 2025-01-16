// Questions and Options Data
// Questions and Options Data
// Questions and Options Data
const questions = [
  {
    question: "नेपालको प्रमुख प्राकृतिक स्रोत कुन हो?",
    options: ["पानी", "वनस्पति", "खनिज", "जलविद्युत"],
    correct: 3,
  },
  {
    question: "नेपालमा सबैभन्दा ठूलो जलविद्युत परियोजना कुन हो?",
    options: ["सन्दीप जलविद्युत", "किरण जलविद्युत", "Upper Tamakoshi", "सिद्धि जलविद्युत"],
    correct: 2,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो वनक्षेत्र कुन हो?",
    options: ["सुनकोशी", "कर्णाली", "सूर्यचुली", "कन्चनजंगा"],
    correct: 1,
  },
  {
    question: "नेपालको प्रमुख खनिज स्रोत कुन हो?",
    options: ["सुन", "लोहा", "कोलतार", "जस्ता"],
    correct: 0,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो जलाशय कुन हो?",
    options: ["रारा ताल", "पोखरा ताल", "व्यास ताल", "सिन्धुली ताल"],
    correct: 0,
  },
  {
    question: "नेपालमा कति प्रतिशत वन क्षेत्र पाइन्छ?",
    options: ["२१%", "२६%", "२९%", "४४%"],
    correct: 3,
  },
  {
    question: "नेपालको प्रमुख ऊर्जा स्रोत के हो?",
    options: ["पवन ऊर्जा", "सौर्य ऊर्जा", "जल ऊर्जा", "कोयला"],
    correct: 2,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो हाइड्रोपावर परियोजना कुन हो?",
    options: ["सिद्धि जलविद्युत", "Upper Tamakoshi", "तेस्रो जलविद्युत", "काठमाडौ जलविद्युत"],
    correct: 1,
  },
  {
    question: "नेपालमा जलविद्युतको उत्पादनको मुख्य क्षेत्र कुन हो?",
    options: ["सौर्य", "हिमाली", "पहाडी", "मध्यान्ह"],
    correct: 2,
  },
  {
    question: "नेपालमा लगाइएको प्रमुख वन बचत योजना कुन हो?",
    options: ["जलवायु परिवर्तन योजना", "वृक्षारोपण अभियान", "वन्य जीव संरक्षण योजना", "मुलुक संरक्षण योजना"],
    correct: 1,
  },
  {
    question: "नेपालको प्रमुख कृषि उत्पादन कुन हो?",
    options: ["चामल", "मकै", "ज्वार", "दाल"],
    correct: 0,
  },
  {
    question: "नेपालको प्रमुख जलस्रोत के हो?",
    options: ["हिमानी", "सागर", "नदी", "ताल"],
    correct: 2,
  },
  {
    question: "नेपालमा प्रमुख रूपमा पाइने खनिज के हो?",
    options: ["सुन", "कोलतार", "जस्ता", "तामाको"],
    correct: 0,
  },
  {
    question: "नेपालको प्रमुख वनस्पति स्रोत के हो?",
    options: ["चिउरी", "घाँस", "तुलसी", "कृषि"],
    correct: 1,
  },
  {
    question: "नेपालको मुख्य बायोमास स्रोत कुन हो?",
    options: ["जलवायु", "बनस्पति", "पवन", "खनिज"],
    correct: 1,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो ताल कुन हो?",
    options: ["रारा ताल", "फेवाताल", "पोखरा ताल", "सिन्धुली ताल"],
    correct: 0,
  },
  {
    question: "नेपालमा जलविद्युतको विकास कुन वर्षदेखि सुरु भएको हो?",
    options: ["१९५०", "१९६०", "१९७०", "१९८०"],
    correct: 1,
  },
  {
    question: "नेपालको कुन क्षेत्र बडो खनिज धरोहरको रूपमा जानिन्छ?",
    options: ["सन्धु", "चम्फे", "कर्णाली", "काठमाण्डौ"],
    correct: 2,
  },
  {
    question: "नेपालको वनसम्पत्ति र प्रजाति संरक्षको लागि कुन वन योजना छ?",
    options: ["वन संकुल योजना", "वन संरक्षण योजना", "जंगल नीति", "सम्भावनशील वन नीति"],
    correct: 1,
  },
  {
    question: "नेपालको प्रमुख ऊर्जा आपूर्ति स्रोत कुन हो?",
    options: ["जलविद्युत", "पवन", "सौर्य", "कोयला"],
    correct: 0,
  },
  {
    question: "नेपालको जलवायु परिवर्तनमा योगदान गर्ने प्रमुख कारण के हो?",
    options: ["प्राकृतिक उष्णता", "विकसित ऊर्जा स्रोत", "प्राकृतिक आपूर्ति", "मानव प्रभाव"],
    correct: 3,
  },
  {
    question: "नेपालमा पाइने सबैभन्दा ठूलो खनिज कुन हो?",
    options: ["सुन", "लोहा", "तामाको", "जस्ता"],
    correct: 0,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो इन्कम स्रोत कुन हो?",
    options: ["व्यापार", "कृषि", "जलविद्युत", "खनिज"],
    correct: 1,
  },
  {
    question: "नेपालको प्रमुख कृषी उत्पादन कुन हो?",
    options: ["चामल", "सरी", "फूल", "फलफूल"],
    correct: 0,
  },
  {
    question: "नेपालका कुन क्षेत्रमा सबैभन्दा बढी कृषि योग्य भूमि पाइन्छ?",
    options: ["तराई", "पहाड़ी", "हिमाली", "सिंधुली"],
    correct: 0,
  },
  {
    question: "नेपालमा सबैभन्दा धेरै पानीको उत्पादन कहाँ हुन्छ?",
    options: ["तराई", "पहाड़ी", "हिमाली", "मैदान"],
    correct: 2,
  },
  {
    question: "नेपालमा प्रमुख वनको प्रकार के हो?",
    options: ["सागवान", "पाइन", "चिउरी", "सिंह"],
    correct: 0,
  },
  {
    question: "नेपालको प्रमुख वन सम्पत्ति कुन हो?",
    options: ["चिउरी", "चाँदी", "तुलसी", "सागवान"],
    correct: 3,
  },
  {
    question: "नेपालको प्रमुख जलस्रोत के हो?",
    options: ["सागर", "नदी", "ताल", "तालुका"],
    correct: 1,
  },
  {
    question: "नेपालमा सबैभन्दा ठूलो कृषि क्षेत्र कुन हो?",
    options: ["तराई", "सिद्धि", "कर्णाली", "मध्यान्ह"],
    correct: 0,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो खनिज स्थल कुन हो?",
    options: ["सिन्धुली", "कञ्चनजंगा", "गण्डकी", "कर्णाली"],
    correct: 3,
  },
  {
    question: "नेपालको जलस्रोत विकासका लागि कति योजनाहरू सञ्चालन भइरहेको छ?",
    options: ["१०", "२०", "३०", "४०"],
    correct: 2,
  },
  {
    question: "नेपालमा विशेष गरी पाइने धातु कुन हो?",
    options: ["सुन", "तामाको", "जस्ता", "कोलतार"],
    correct: 0,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो नदिका स्रोत कस्ता छन्?",
    options: ["बर्फ", "हिम", "माछा", "पानी"],
    correct: 1,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो जलाशय कुन हो?",
    options: ["रारा ताल", "पोखरा ताल", "गोसाईकुण्ड ताल", "नावाजुन ताल"],
    correct: 0,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो जलविद्युत आयोजना कुन हो?",
    options: ["Upper Tamakoshi", "आनन्द जलविद्युत", "कर्णाली जलविद्युत", "काठमाडौँ जलविद्युत"],
    correct: 0,
  },
  {
    question: "नेपालको प्रमुख सौर्य ऊर्जा परियोजना कुन हो?",
    options: ["सौर्य ऊर्जा केंद्र", "हिमालयन सौर्य योजना", "सोलार एनर्जी"],
    correct: 1,
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
