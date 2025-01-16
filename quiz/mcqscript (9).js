// Questions and Options Data
// Questions and Options Data
// Questions and Options Data
const questions = [
  {
    question: "विश्वको सबैभन्दा ठूलो महाद्वीप कुन हो?",
    options: ["एशिया", "अफ्रिका", "युरोप", "अमेरिका"],
    correct: 0,
  },
  {
    question: "विश्वको सबैभन्दा ठूलो महासागर कुन हो?",
    options: ["प्रशान्त महासागर", "अटलान्टिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर"],
    correct: 0,
  },
  {
    question: "उत्तर ध्रुव कहाँ स्थित छ?",
    options: ["पृथ्वीको उत्तरी छेउमा", "पृथ्वीको दक्षिणी छेउमा", "पृथ्वीको मध्यभागमा", "पृथ्वीको पूर्वी भागमा"],
    correct: 0,
  },
  {
    question: "कुन रेखाले पृथ्वीलाई उत्तर र दक्षिण गोलार्धमा विभाजित गर्दछ?",
    options: ["अक्षांश रेखा", "रेखांश रेखा", "प्रधानमण्डल रेखा", "अन्तर्राष्ट्रिय मिति रेखा"],
    correct: 0,
  },
  {
    question: "दक्षिण ध्रुव कहाँ स्थित छ?",
    options: ["पृथ्वीको दक्षिणी छेउमा", "पृथ्वीको उत्तरी छेउमा", "पृथ्वीको पूर्वी भागमा", "पृथ्वीको पश्चिमी भागमा"],
    correct: 0,
  },
  {
    question: "पृथ्वीको अक्षांश रेखा कुन हो?",
    options: ["0° अक्षांश", "0° रेखांश", "90° अक्षांश", "90° रेखांश"],
    correct: 0,
  },
  {
    question: "पृथ्वीको रेखांश रेखा कुन हो?",
    options: ["0° रेखांश", "0° अक्षांश", "90° अक्षांश", "90° रेखांश"],
    correct: 0,
  },
  {
    question: "अन्तर्राष्ट्रिय मिति रेखा कहाँ स्थित छ?",
    options: ["0° रेखांशमा", "180° रेखांशमा", "90° रेखांशमा", "180° अक्षांशमा"],
    correct: 1,
  },
  {
    question: "विश्वको सबैभन्दा लामो पर्वत श्रृंखला कुन हो?",
    options: ["हिमालय", "आल्प्स", "अण्डीज", "रॉकिज"],
    correct: 2,
  },
  {
    question: "विश्वको सबैभन्दा ठूलो मरुभूमि कुन हो?",
    options: ["साहारा", "गोबी", "कालाहारी", "आर्कटिक मरुभूमि"],
    correct: 0,
  },
  {
    question: "विश्वको सबैभन्दा ठूलो नदी कुन हो?",
    options: ["अमेजन", "नील", "गंगा", "याङत्जे"],
    correct: 0,
  },
  {
    question: "विश्वको सबैभन्दा ठूलो जलाशय कुन हो?",
    options: ["क्यास्पियन सागर", "बैकाल ताल", "विक्टोरिया ताल", "सुपीरियर ताल"],
    correct: 0,
  },
  {
    question: "विश्वको सबैभन्दा ठूलो हिमनदी कुन हो?",
    options: ["लैम्बर्ट ग्लेशियर", "सिया चेन ग्लेशियर", "गङ्गोत्री ग्लेशियर", "अलास्का ग्लेशियर"],
    correct: 0,
  },
  {
    question: "विश्वको सबैभन्दा ठूलो ज्वालामुखी कुन हो?",
    options: ["मौना लाओ", "किलाउआ", "एटना", "वेसुवियस"],
    correct: 0,
  },
  {
    question: "विश्वको सबैभन्दा ठूलो महासागर कुन हो?",
    options: ["प्रशान्त महासागर", "अटलान्टिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर"],
    correct: 0,
  },
  {
    question: "पृथ्वीको सबैभन्दा पुरानो सभ्यता कुन हो?",
    options: ["मेसोपोटामिया", "हड़प्पा", "माया", "इजिप्ट"],
    correct: 0,
  },
  {
    question: "विश्वको सबैभन्दा ठूलो पर्वत शृंखला कुन हो?",
    options: ["अण्डीज", "हिमालय", "आल्प्स", "अल्पाइन"],
    correct: 0,
  },
  {
    question: "पृथ्वीको सबैभन्दा लामो नदी कुन हो?",
    options: ["अमेजन", "नील", "गंगा", "याङत्जे"],
    correct: 1,
  },
  {
    question: "विश्वको सबैभन्दा ठूलो नदी कुन हो?",
    options: ["अमेजन", "नील", "गंगा", "याङत्जे"],
    correct: 0,
  },
  {
    question: "कुन देशमा सबैभन्दा बढी ज्वालामुखी छन्?",
    options: ["इन्डोनेशिया", "इटली", "अमेरिका", "जापान"],
    correct: 0,
  },
  {
    question: "दक्षिण अफ्रिका में के प्रसिद्ध मरुस्थल है?",
    options: ["साहारा", "काला काली", "कलाहारी", "गोबी"],
    correct: 2,
  },
  {
    question: "पृथ्वीको सबैभन्दा ठूलो महासागर कुन हो?",
    options: ["प्रशान्त महासागर", "अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर"],
    correct: 0,
  },
  {
    question: "विश्वमा पहिलो दिनको शुरुवात कहाँ हुन्छ?",
    options: ["प्रशान्त महासागर", "अटलांटिक महासागर", "अमेरिका", "सम्भव भुत्वामा"],
    correct: 0,
  },
  {
    question: "अंतर्राष्ट्रीय दिन रेखा की स्थिति कहाँ है?",
    options: ["0° रेखांश", "180° रेखांश", "90° रेखांश", "90° अक्षांश"],
    correct: 1,
  },
  {
    question: "विश्व का सबसे बड़ा समुद्र कौन सा है?",
    options: ["प्रशांत महासागर", "अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर"],
    correct: 0,
  },
  {
    question: "पृथ्वी पर सर्वाधिक प्रचंड हलचल किससे उत्पन्न होती है?",
    options: ["टेक्टोनिक प्लेटें", "समुद्र की लहरें", "ज्वालामुखी", "आकाशीय घटनाएँ"],
    correct: 0,
  },
  {
    question: "पृथ्वी के किस ध्रुव पर अधिक बर्फ है?",
    options: ["उत्तर ध्रुव", "दक्षिण ध्रुव", "प्रत्येक ध्रुव पर समान", "मध्यवर्ती क्षेत्र"],
    correct: 0,
  },
  {
    question: "पृथ्वी का गोलाकार गति का कारण क्या है?",
    options: ["सूर्य की आकर्षक बल", "समय बदलने पर", "पृथ्वी की घूर्णन गति", "ध्रुवीय बल"],
    correct: 2,
  },
  {
    question: "विश्व के सबसे बड़े जलाशय का नाम क्या है?",
    options: ["कैस्पियन सागर", "विक्टोरिया ताल", "अरेबियन सागर", "गोल्फ़मेक्स"],
    correct: 0,
  },
  {
    question: "विश्व का सबसे विशाल पर्वत श्रृंखला कौन सा है?",
    options: ["हिमालय", "अल्प्स", "मॉन्ट सैंट पेरेंस", "सिवि"],
    correct: 0,
  },
  {
    question: "विश्व में सबसे अधिक उर्जा उत्पन्न करने वाला महादेश क्या है?",
    options: ["अफ्रिका", "एशिया", "यूरोप", "अमेरिका"],
    correct: 1,
  },
  {
    question: "पृथ्वी के कौन से वायुमंडल में भारी तापमान होती है?",
    options: ["त्रिपाल", "ब्रह्मांडीय वायुमंडल", "टेक्टोनिक वायुमंडल", "आधुनिक प्रणाली"],
    correct: 1,
  },
  {
    question: "अंतरराष्ट्रीय रेखा किसे कहते हैं?",
    options: ["समय अंतराल", "भौगोलिक स्थिति", "अंतर्राष्ट्रीय समय मानक", "जनसंख्या परिवर्तनों"],
    correct: 2,
  },
  {
    question: "कौन सा देश माउंट एवरेस्ट की स्थित है?",
    options: ["नेपाल", "चीन", "भारत", "पाकिस्तान"],
    correct: 0,
  },
  {
    question: "विश्व का सबसे लम्बा समुद्र कहाँ स्थित है?",
    options: ["प्रशान्त महासागर", "भारतीय महासागर", "अटलांटिक महासागर", "विट्सपाट"],
    correct: 0,
  },
  {
    question: "विश्व के सबसे बड़ा हिमानी का नाम क्या है?",
    options: ["लैमर्ट ग्लेशियर", "बैकाल बर्फ", "माउंट इट्ना", "मेडिटेर्रानियन"],
    correct: 0,
  },
  {
    question: "विश्व में सबसे बड़ा पर्वत शृंखला क्या है?",
    options: ["हिमालय", "अलपाइन", "एन्डीस", "पाकिस्तानी"],
    correct: 0,
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
