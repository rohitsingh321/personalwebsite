// Questions and Options Data
// Questions and Options Data
// Questions and Options Data
const questions = [
  {
    question: "नेपालको सबैभन्दा अग्लो पर्वत कुन हो?",
    options: ["माउंट एवरेस्ट", "अन्नपूर्ण", "धौलागिरी", "कंचनजंगा"],
    correct: 0,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो नदी कुन हो?",
    options: ["गण्डकी", "कोशी", "सुनकोशी", "कमला"],
    correct: 1,
  },
  {
    question: "नेपालको मुख्य भूगोल कुन प्रकारको छ?",
    options: ["पहाड़ी", "मैदान", "समुद्र", "पर्वतीय"],
    correct: 3,
  },
  {
    question: "नेपालको सबैभन्दा लामो नदी कुन हो?",
    options: ["कोशी", "गण्डकी", "सप्तकोशी", "महाकाली"],
    correct: 2,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो ताल कुन हो?",
    options: ["रारा ताल", "पोखरा ताल", "फेवाताल", "सिन्धुली ताल"],
    correct: 0,
  },
  {
    question: "नेपालको तराई क्षेत्रमा के पाइन्छ?",
    options: ["पानी", "पर्वत", "मैदान", "घाटी"],
    correct: 2,
  },
  {
    question: "नेपालमा पाइएको हिमनदी कुन हो?",
    options: ["सोलु हिमनदी", "यलु हिमनदी", "नुब्री हिमनदी", "रामचुली हिमनदी"],
    correct: 2,
  },
  {
    question: "नेपालको पचास प्रतिशत भूभाग कुन प्रकारको छ?",
    options: ["मैदान", "तराई", "पर्वतीय", "समुद्र"],
    correct: 2,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो भूकम्प कहाँ आएको थियो?",
    options: ["गोरखा", "काठमाडौँ", "पर्वत", "चितवन"],
    correct: 0,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो समतल क्षेत्र कुन हो?",
    options: ["तराई", "पर्वतीय", "हिमाली", "गंगा"],
    correct: 0,
  },
  {
    question: "नेपालको हिमालय पर्वत श्रृंखलामा कितनी प्रमुख शिखर रहेका छन्?",
    options: ["८", "१०", "१२", "१४"],
    correct: 3,
  },
  {
    question: "नेपालको मुख्य जलवायु कुन हो?",
    options: ["उष्णकटिबंधीय", "समशीतोष्ण", "ध्रुवीय", "मध्यम"],
    correct: 1,
  },
  {
    question: "नेपालको सबैभन्दा प्रसिद्ध प्राकृतिक धरोहर कुन हो?",
    options: ["सगरमाथा", "कञ्चनजंगा", "धौलागिरी", "अन्नपूर्ण"],
    correct: 0,
  },
  {
    question: "नेपालका थुप्रै जलप्रपातहरूसँग सम्बन्धित स्थान कुन हो?",
    options: ["धादिङ", "पोखरा", "तारकेश्वर", "काठमाडौ"],
    correct: 1,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो मरुभूमि कुन हो?",
    options: ["तराई", "सुनसान मैदान", "ताप्लेजुङ", "मुग्लिन"],
    correct: 0,
  },
  {
    question: "नेपालको जलवायु धेरै हदसम्म केसँग प्रभावित हुन्छ?",
    options: ["मौसम प्रणाली", "सूर्यको तापमान", "पृथ्वीको घूर्णन", "बर्फ"],
    correct: 0,
  },
  {
    question: "नेपालमा सबैभन्दा धेरै हिमपात भएको स्थान कुन हो?",
    options: ["सोलु", "धौलागिरी", "काठमाण्डौं", "पोखरा"],
    correct: 1,
  },
  {
    question: "नेपालको क्षेत्रफल कति छ?",
    options: ["१,४८,५५२ वर्ग किलोमिटर", "१,४२,५५२ वर्ग किलोमिटर", "१,४८,५४५ वर्ग किलोमिटर", "१,२८,५५२ वर्ग किलोमिटर"],
    correct: 0,
  },
  {
    question: "नेपालको सबैभन्दा ठूलो नगर पालिका कुन हो?",
    options: ["काठमाडौँ", "पोखरा", "धरान", "वीरगञ्ज"],
    correct: 0,
  },
  {
    question: "नेपालमा पाइएको सबैभन्दा ठूलो भूतपूर्व जलाशय कुन हो?",
    options: ["पाँचचुली ताल", "रारा ताल", "फेवाताल", "सिन्धुली ताल"],
    correct: 1,
  },
  {
    question: "नेपालको सबैभन्दा प्रसिद्ध नदिकरण कुन हो?",
    options: ["सप्तकोशी", "गण्डकी", "कर्णाली", "महाकाली"],
    correct: 2,
  },
  {
    question: "नेपालका कति प्रमुख हिमालहरू छन्?",
    options: ["८", "१२", "५", "१४"],
    correct: 3,
  },
  {
    question: "नेपालको उच्चतम स्थान कुन हो?",
    options: ["सगरमाथा", "कञ्चनजंगा", "धौलागिरी", "अन्नपूर्ण"],
    correct: 0,
  },
  {
    question: "नेपालमा कति प्रमुख जलप्रपातहरू छन्?",
    options: ["१०", "२०", "३०", "५०"],
    correct: 1,
  },
  {
    question: "नेपालको हिमालय पर्वत श्रृंखलामा कुनै न कुनै स्थान पाइन्छ?",
    options: ["सगरमाथा", "कञ्चनजंगा", "सिंधुली", "कपाल"],
    correct: 1,
  },
  {
    question: "नेपालमा के प्रकारको खनिज भण्डार पाइन्छ?",
    options: ["संग्रहण", "ताँबाको", "तामाको", "सुनै"],
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
