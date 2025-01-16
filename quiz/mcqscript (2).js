// Questions and Options Data
// Questions and Options Data
const questions = [
  {
    question: "एशियाको सबैभन्दा ठूलो देश कुन हो?",
    options: ["चीन", "भारत", "रूस", "जापान"],
    correct: 2,
  },
  {
    question: "एशियाको सबैभन्दा ठूलो मरुभूमि कुन हो?",
    options: ["गबी मरुभूमि", "थार मरुभूमि", "अरब मरुभूमि", "कर्जिल मरुभूमि"],
    correct: 0,
  },
  {
    question: "कुन देशलाई 'प्राचीन सभ्यता' को उद्गम स्थल मानिन्छ?",
    options: ["चीन", "भारत", "इरान", "मेसोपोटामिया"],
    correct: 3,
  },
  {
    question: "एशियाको सबैभन्दा लामो नदी कुन हो?",
    options: ["गंगा", "याङ्ट्से", "मेकोंग", "सिन्धु"],
    correct: 1,
  },
  {
    question: "कुन एशियाली देशलाई 'उदयमान सूर्यको देश' भनेर चिनिन्छ?",
    options: ["चीन", "भारत", "जापान", "कोरिया"],
    correct: 2,
  },
  {
    question: "माउन्ट एभरेस्ट कुन देशमा अवस्थित छ?",
    options: ["नेपाल", "भारत", "चीन", "भुटान"],
    correct: 0,
  },
  {
    question: "एशियाको सबैभन्दा ठूलो ताल कुन हो?",
    options: ["क्यास्पियन सागर", "अरल सागर", "बैकल ताल", "टोनले साप ताल"],
    correct: 0,
  },
  {
    question: "कुन देश एशियाको सबैभन्दा ठूलो जनसंख्या भएको देश हो?",
    options: ["भारत", "चीन", "इन्डोनेशिया", "पाकिस्तान"],
    correct: 1,
  },
  {
    question: "एशियाको सबैभन्दा ठूलो द्वीप कुन हो?",
    options: ["बोर्नियो", "सुमात्रा", "होनशु", "लुजोन"],
    correct: 0,
  },
  {
    question: "कुन देशलाई 'सात पहाडहरूको देश' भनेर चिनिन्छ?",
    options: ["नेपाल", "इन्डोनेशिया", "फिलिपिन्स", "जापान"],
    correct: 0,
  },
  {
    question: "कुन एशियाली देशको राजधानी टोक्यो हो?",
    options: ["चीन", "जापान", "दक्षिण कोरिया", "भियतनाम"],
    correct: 1,
  },
  {
    question: "कुन देशले संसारको सबैभन्दा अग्लो भवन, बुर्ज खलिफा, होस्ट गर्दछ?",
    options: ["साउदी अरब", "कतार", "युएई", "कुवेत"],
    correct: 2,
  },
  {
    question: "कुन एशियाली देशमा एशिया कप फुटबल खेलको आयोजन हुन्छ?",
    options: ["भारत", "चीन", "साउदी अरब", "कतार"],
    correct: 3,
  },
  {
    question: "एशियाको सबैभन्दा ठूलो शहर कुन हो?",
    options: ["टोक्यो", "दिल्ली", "शाङ्घाई", "मुम्बई"],
    correct: 0,
  },
  {
    question: "कुन देशलाई 'ड्रागन देश' भनेर चिनिन्छ?",
    options: ["नेपाल", "भारत", "चीन", "भुटान"],
    correct: 3,
  },
  {
    question: "कुन एशियाली देशमा कोलम्बो शहर अवस्थित छ?",
    options: ["श्रीलंका", "माल्दिभ्स", "भारत", "बाङ्गलादेश"],
    correct: 0,
  },
  {
    question: "कुन देशले विश्वको सबैभन्दा ठूलो मन्दिर, अंगकोर वाट, होस्ट गर्दछ?",
    options: ["थाइल्याण्ड", "कम्बोडिया", "भियतनाम", "म्यानमार"],
    correct: 1,
  },
  {
    question: "कुन देशले एशियाको पहिलो उपग्रह, आर्यभट्ट, प्रक्षेपण गर्यो?",
    options: ["चीन", "जापान", "भारत", "पाकिस्तान"],
    correct: 2,
  },
  {
    question: "एशियाको सबैभन्दा ठूलो समुद्र तट क्षेत्र कुन हो?",
    options: ["अरब सागर", "बंगालको खाडी", "थाईल्यान्डको खाडी", "साउथ चाइना सागर"],
    correct: 1,
  },
  {
    question: "कुन एशियाली देशमा मरिना बे स्यान्ड्स होस्ट गर्दछ?",
    options: ["सिंगापुर", "मलेशिया", "थाइल्याण्ड", "इन्डोनेशिया"],
    correct: 0,
  },
  {
    question: "कुन देशमा आइसल्यान्ड र नेपालको बीचमा झण्डाको समानता छ?",
    options: ["भुटान", "ताजिकिस्तान", "श्रीलंका", "माल्दिभ्स"],
    correct: 1,
  },
  {
    question: "एशियाको सबैभन्दा ठूलो चिया उत्पादक देश कुन हो?",
    options: ["भारत", "चीन", "श्रीलंका", "इन्डोनेशिया"],
    correct: 0,
  },
  {
    question: "कुन देशले ओलम्पिक खेलहरूको उद्घाटन गरेको छ?",
    options: ["जापान", "चीन", "दक्षिण कोरिया", "भारत"],
    correct: 1,
  },
  {
    question: "एशियाको सबैभन्दा ठूलो सागर कुन हो?",
    options: ["अरब सागर", "बंगालको खाडी", "साउथ चाइना सागर", "फिलिपिन सागर"],
    correct: 2,
  },
  {
    question: "कुन देशलाई 'दुर्गम टापुहरूको देश' भनेर चिनिन्छ?",
    options: ["फिलिपिन्स", "मलेशिया", "इन्डोनेशिया", "थाइल्याण्ड"],
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
