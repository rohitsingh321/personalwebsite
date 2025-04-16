// Student data for each class
const classStudents = {
    "Playgroup": [
{ sn: 1, name: "Angaj Kapar" },
{ sn: 2, name: "Aashis Sah" },
{ sn: 3, name: "Khabiya Sah" },
{ sn: 4, name: "Sanabi Sah" },
{ sn: 5, name: "Aadarsh Kumar Kapar" },
{ sn: 6, name: "Kartik Mukhiya" },
{ sn: 7, name: "Suruti Kumari Karak" },
{ sn: 8, name: "Aaroshi Kapar" },
{ sn: 9, name: "Sakchham Ram" },
{ sn: 10, name: "Samar Sah" },
{ sn: 11, name: "Isant Kapar" },
{ sn: 12, name: "Sohani Sah" },
{ sn: 13, name: "Anurag Yadav" },
{ sn: 14, name: "Swagat Yadav" },
{ sn: 15, name: "Sidu Yadav" },
{ sn: 16, name: "Laki Sah" }

    ],
    "LKG": [
       { sn: 1, name: "Amrit Paswan" },
{ sn: 2, name: "Raja Paswan" },
{ sn: 3, name: "Nitesh Sah" },
{ sn: 4, name: "Aaurshi Yadav" },
{ sn: 5, name: "Prativa Yadav" },
{ sn: 6, name: "Alex Sah" },
{ sn: 7, name: "Aayush Sah" },
{ sn: 8, name: "Rupesh Kapar" },
{ sn: 9, name: "Divgani Pandey" },
{ sn: 10, name: "Aarchana Yadav" },
{ sn: 11, name: "Aarushi Mahara" },
{ sn: 12, name: "Manayata Adhikari" },
{ sn: 13, name: "Diksha Mandal" },
{ sn: 14, name: "Aachal Kapar" },
{ sn: 15, name: "Rajan Kumar Sah" },
{ sn: 16, name: "Sunil Sah" },
{ sn: 17, name: "Aaryan Rajak" },
{ sn: 18, name: "Suraj Yadav" },
{ sn: 19, name: "Eshika Kapar" },
{ sn: 20, name: "Santoshi Sah" },
{ sn: 21, name: "Rabindra Yadav" },
{ sn: 22, name: "Suvam Sah" },
{ sn: 23, name: "Aviraj Thakur" },
{ sn: 24, name: "Bibhash Mahato" },
{ sn: 25, name: "Sirman Mahato" },
{ sn: 26, name: "Aashika Kumar Sada" },
{ sn: 27, name: "Aarushi Kumari Mahato" },
{ sn: 28, name: "Aarush Mandal" },
{ sn: 29, name: "Sonu Yadav" },
{ sn: 30, name: "Divya Thakur" }

    ],
    "UKG": [
        { sn: 1, name: "Aayu Kapar" },
{ sn: 2, name: "Dhiraj Kapar" },
{ sn: 3, name: "Ritish Sah" },
{ sn: 4, name: "Gani Raj Mahato" },
{ sn: 5, name: "Aman Safi" },
{ sn: 6, name: "Suman Sada" },
{ sn: 7, name: "Aarushi Raj Danuwar" },
{ sn: 8, name: "Roshani Mandal" },
{ sn: 9, name: "Shuruti Sah" },
{ sn: 10, name: "Yubraj Sah" },
{ sn: 11, name: "Dipshan Shrestha" },
{ sn: 12, name: "Aaditya Sah" },
{ sn: 13, name: "Dipak Mahara" },
{ sn: 14, name: "Shivam Sah" },
{ sn: 15, name: "Opendra Mahato" },
{ sn: 16, name: "Harsh Rai" },
{ sn: 17, name: "Roshani Sah" },
{ sn: 18, name: "Prince Sah" },
{ sn: 19, name: "Aayush Mahato" },
{ sn: 20, name: "Rashika Sada" },
{ sn: 21, name: "Aarushi Sah" },
{ sn: 22, name: "Anupriya Sah" },
{ sn: 23, name: "Ritik Kumar Yadav" },
{ sn: 24, name: "Ajay Mahara" },
{ sn: 25, name: "Amit Yadav" }

    ],
    "1": [
{ sn: 1, name: "Aayush Sah(A)" },
{ sn: 2, name: "Dhiraj Yadav" },
{ sn: 3, name: "Sanskar Mahato" },
{ sn: 4, name: "Saloni Sah" },
{ sn: 5, name: "Aayush Kapar" },
{ sn: 6, name: "Chandani Sah" },
{ sn: 7, name: "Aaditya Raj Sah" },
{ sn: 8, name: "Pratik Sharma" },
{ sn: 9, name: "Anand Sharma" },
{ sn: 10, name: "Prabin Yadav" },
{ sn: 11, name: "Nandani Sah" },
{ sn: 12, name: "Aachal Sah(A)" },
{ sn: 13, name: "Abhijit Sah" },
{ sn: 14, name: "Roshan Bhandari" },
{ sn: 15, name: "Aachal Sah (B)" },
{ sn: 16, name: "Suraj Sah" },
{ sn: 17, name: "Aadarsh Jha" },
{ sn: 18, name: "Ritik Mandal" },
{ sn: 19, name: "Samikesha Sah" },
{ sn: 20, name: "Sandhya Mukhiya" },
{ sn: 21, name: "Aadarsh Mahatha" },
{ sn: 22, name: "Siddharth Sharma" },
{ sn: 23, name: "Aayush Kumar Sah(B)" },
{ sn: 24, name: "Ankit Majhi" },
{ sn: 25, name: "Jibika Kumari Yadav" },
{ sn: 26, name: "Aashiya Khatun" }

    ],
    "2": [
{ sn: 1, name: "Roshani Sah" },
{ sn: 2, name: "Sumit Kapar" },
{ sn: 3, name: "Diproshan Yadav" },
{ sn: 4, name: "Ravi Sah" },
{ sn: 5, name: "Shubhash Thakur" },
{ sn: 6, name: "Ankit Mandal" },
{ sn: 7, name: "Aayush Mahara" },
{ sn: 8, name: "Ranbir Yadav" },
{ sn: 9, name: "Rakhi Kamati" },
{ sn: 10, name: "Sawan Mahara" },
{ sn: 11, name: "Ravi Kishan Sah" },
{ sn: 12, name: "Anil Sah" },
{ sn: 13, name: "Aaryan Sah" },
{ sn: 14, name: "Ritika Paswan" },
{ sn: 15, name: "Keshar Raj Pandey" },
{ sn: 16, name: "Raja Pandey" },
{ sn: 17, name: "Krishna Mahara" },
{ sn: 18, name: "Ajeet Yadav" },
{ sn: 19, name: "Sibani Sah" },
{ sn: 20, name: "Binay Sah" },
{ sn: 21, name: "Chandan Kapar" },
{ sn: 22, name: "Rachit Sah" },
{ sn: 23, name: "Aadarsh Kamti" },
{ sn: 24, name: "Krishna Yadav" },
{ sn: 25, name: "Aayush Mandal" },
{ sn: 26, name: "Aanand Sah" }

    ],
    "3": [
{ sn: 1, name: "Anish Kumar Mahara" },
{ sn: 2, name: "Sanjan Kumar Mukhiya" },
{ sn: 3, name: "Roshan Kumar Sah" },
{ sn: 4, name: "Sumant Kumar Sah" },
{ sn: 5, name: "Abhimanyu Kumar Mandal" },
{ sn: 6, name: "Arjun Paswan" },
{ sn: 7, name: "Aayush Yadav" },
{ sn: 8, name: "Ragani Sah" },
{ sn: 9, name: "Paridhi Kumari Singh" },
{ sn: 10, name: "Aaditya Sah" },
{ sn: 11, name: "Aashika Thakur" },
{ sn: 12, name: "Kristina Kumari Sah" },
{ sn: 13, name: "Bibhash Yadav" },
{ sn: 14, name: "Sanskar Kumar Sah" },
{ sn: 15, name: "Siddharth Sah" },
{ sn: 16, name: "Purshotam Sah" },
{ sn: 17, name: "Lekha Gohiwar" },
{ sn: 18, name: "Abikesh Yadav" },
{ sn: 19, name: "Krishna Singh" },
{ sn: 20, name: "Ankrit Yadav" },
{ sn: 21, name: "Chandrashakar Yadav" },
{ sn: 22, name: "Aaryan Sah" },
{ sn: 23, name: "Rashi Kumari Sah" },
{ sn: 24, name: "Riya Sah" },
{ sn: 25, name: "Abiraj Yadav" },
{ sn: 26, name: "Rabi Kumar Safi" },
{ sn: 27, name: "Jishu Yadav" }

    ],
    "4": [
{ sn: 1, name: "Roshan Sah" },
{ sn: 2, name: "Sujit Sah" },
{ sn: 3, name: "Nandani Mahato" },
{ sn: 4, name: "Shristi Mahara" },
{ sn: 5, name: "Palav Yadav" },
{ sn: 6, name: "Ankita Mandal" },
{ sn: 7, name: "Lisha Gohiwar" },
{ sn: 8, name: "Krishna Kapar" },
{ sn: 9, name: "Sudip Yadav" },
{ sn: 10, name: "Kishan Sah" },
{ sn: 11, name: "Bikesh Yadav" },
{ sn: 12, name: "Meenal Mahara" },
{ sn: 13, name: "Rajit Thakur" },
{ sn: 14, name: "Bibek Sah" },
{ sn: 15, name: "Niraj Yadav" },
{ sn: 16, name: "Ansh Mandal" },
{ sn: 17, name: "Nitesh Yadav" },
{ sn: 18, name: "Dharmendra Mahato" },
{ sn: 19, name: "Ashodha Sah" },
{ sn: 20, name: "Saloni Sah" },
{ sn: 21, name: "Sushil Sah" },
{ sn: 22, name: "Aaryan Bhandari" },
{ sn: 23, name: "Pushpa Anjali Pandey" },
{ sn: 24, name: "Rama Singh" },
{ sn: 25, name: "Rikesh Yadav" },
{ sn: 26, name: "Chandan Sah" },
{ sn: 27, name: "Nabina Shrestha" },
{ sn: 28, name: "Sundar Yadav" },
{ sn: 29, name: "Aaryan Yadav" },
{ sn: 30, name: "Prem Bhandari" }

    ],
    "5": [
{ sn: 1, name: "Saloni Sharma" },
{ sn: 2, name: "Abhinash Yadav" },
{ sn: 3, name: "Shreejal Sah" },
{ sn: 4, name: "Prasant Sah" },
{ sn: 5, name: "Sanskar Ram" },
{ sn: 6, name: "Kaushal Baskoti" },
{ sn: 7, name: "Aayush Danuzoor" },
{ sn: 8, name: "Abhinam Sah" },
{ sn: 9, name: "Neha Kapar" },
{ sn: 10, name: "Aarti Yadav" },
{ sn: 11, name: "Raj Kumar Sah" },
{ sn: 12, name: "Isita Adhikari" },
{ sn: 13, name: "Rohit Sah" },
{ sn: 14, name: "Riya Adhikari" },
{ sn: 15, name: "Aayush Yadav" },
{ sn: 16, name: "Nikesh Yadav" },
{ sn: 17, name: "Mukesh Sah" },
{ sn: 18, name: "Bishal Paswan" },
{ sn: 19, name: "Rupesh Sah" }

    ],
    "6": [
{ sn: 1, name: "Sushant Sah" },
{ sn: 2, name: "Rabin Paswan" },
{ sn: 3, name: "Aayush Sah" },
{ sn: 4, name: "Shulav Sah" },
{ sn: 5, name: "Nabin Sah" },
{ sn: 6, name: "Priti Mahato" },
{ sn: 7, name: "Neha Mahato" },
{ sn: 8, name: "Lokesh Nayak" },
{ sn: 9, name: "Roshan Mahara" },
{ sn: 10, name: "Rakesh Kapar" },
{ sn: 11, name: "Sonu Kapar" },
{ sn: 12, name: "Milli Mahara" },
{ sn: 13, name: "Subash Yadav" },
{ sn: 14, name: "Raj Nandani Sharma" },
{ sn: 15, name: "Sujit Sah" },
{ sn: 16, name: "Aaditya Sah" },
{ sn: 17, name: "Chandani Sah" },
{ sn: 18, name: "Ritik Gohiwar" },
{ sn: 19, name: "Sarika Yadav" },
{ sn: 20, name: "Rima Yadav" },
{ sn: 21, name: "Himesh Yadav" },
{ sn: 22, name: "Suman Mandal" },
{ sn: 23, name: "Pragati Singh" },
{ sn: 24, name: "Amit Mahara" },
{ sn: 25, name: "Suman Kamti" },
{ sn: 26, name: "Punit Jha" },
{ sn: 27, name: "Subhash Sah" },
{ sn: 28, name: "Aashik Yadav" }

    ],
    "7": [
{ sn: 1, name: "Dhanajay Pandit" },
{ sn: 2, name: "Sumit Mahara" },
{ sn: 3, name: "Kishan Yadav" },
{ sn: 4, name: "Aaditya Bhandari" },
{ sn: 5, name: "Arbin Yadav" },
{ sn: 6, name: "Aashish Gohiwar" },
{ sn: 7, name: "Sonu Sah" },
{ sn: 8, name: "Jeeya Singh" },
{ sn: 9, name: "Aakriti Yadav" },
{ sn: 10, name: "Sushma Mandal" },
{ sn: 11, name: "Roshan Sah" },
{ sn: 12, name: "Rabina Singh" },
{ sn: 13, name: "Sushila Yadav" },
{ sn: 14, name: "Shiv Yadav" },
{ sn: 15, name: "Arbind Sah" },
{ sn: 16, name: "Amit Mahato" }

    ],
    "8": [
        { sn: 1, name: "Dipesh Bhandari" },
        { sn: 2, name: "Sabina Rai" }
    ],
    "9": [
{ sn: 1, name: "Aman Ram" },
{ sn: 2, name: "Aadarsh Sah" },
{ sn: 3, name: "Arbind Kumar Sah" },
{ sn: 4, name: "Aastha Masiha" },
{ sn: 5, name: "Samjhana Yadav" },
{ sn: 6, name: "Krish Sah" },
{ sn: 7, name: "Shweta Chaudhary" },
{ sn: 8, name: "Sneha Sah" },
{ sn: 9, name: "Sima Yadav" },
{ sn: 10, name: "Gudiya Mahato" },
{ sn: 11, name: "Aaryan Singh" },
{ sn: 12, name: "Samiksha Mahato" },
{ sn: 13, name: "Nabin Sah" },
{ sn: 14, name: "Nandita Kapari" },
{ sn: 15, name: "Radhika Sah" },
{ sn: 16, name: "Ragani Kumari Sah" },
{ sn: 17, name: "Chhotu Sah" },
{ sn: 18, name: "Amrita Sah" },
{ sn: 19, name: "Bharat Yadav" }

    ],
    "10": [
        { sn: 1, name: "Prakash Adhikari" },
        { sn: 2, name: "Sunita Limbu" }
    ],
    "11": [
        { sn: 1, name: "Bibek Joshi" },
        { sn: 2, name: "Sujata Ghale" }
    ],
    "12": [
        { sn: 1, name: "Rameshwor Poudel" },
        { sn: 2, name: "Manisha Dhakal" }
    ]
};

// Google Apps Script Web App URL - REPLACE WITH YOUR OWN
const scriptUrl = 'https://script.google.com/macros/s/AKfycbxwTifRxVm3vmcCHGR0domFpTitrF1Nv0wX-UgXtT3ddMIUktRuPJzWypyvwkI7AobKbg/exec';

// Current state
let currentSubject = "";
let currentTeacherName = "";
let currentTeacherEmail = "";
let currentClass = "";
let currentSection = "";
let currentStudents = [];

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    document.getElementById('loadSubjectBtn').addEventListener('click', loadSubject);
    document.getElementById('submitMarksBtn').addEventListener('click', submitMarks);
    document.getElementById('newEntryBtn').addEventListener('click', resetForm);
    
    // Validate teacher email as they type
    document.getElementById('teacherEmail').addEventListener('blur', validateEmail);
});

// Validate email format
function validateEmail() {
    const email = document.getElementById('teacherEmail').value.trim();
    const emailError = document.getElementById('teacherEmailError');
    
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        document.getElementById('teacherEmail').classList.add('error');
        return false;
    } else {
        emailError.textContent = '';
        document.getElementById('teacherEmail').classList.remove('error');
        return true;
    }
}

// Load subject and show mark entry form
function loadSubject() {
    // Clear previous errors
    document.getElementById('teacherNameError').textContent = '';
    document.getElementById('teacherEmailError').textContent = '';
    document.getElementById('classError').textContent = '';
    document.getElementById('sectionError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    
    // Get input values
    currentTeacherName = document.getElementById('teacherName').value.trim();
    currentTeacherEmail = document.getElementById('teacherEmail').value.trim();
    currentClass = document.getElementById('classSelect').value;
    currentSection = document.getElementById('sectionSelect').value;
    currentSubject = document.getElementById('subjectSelect').value;
    
    // Validate inputs
    let isValid = true;
    
    if (!currentTeacherName) {
        document.getElementById('teacherName').classList.add('error');
        document.getElementById('teacherNameError').textContent = 'Please enter your name';
        isValid = false;
    } else {
        document.getElementById('teacherName').classList.remove('error');
    }
    
    if (!currentTeacherEmail) {
        document.getElementById('teacherEmail').classList.add('error');
        document.getElementById('teacherEmailError').textContent = 'Please enter your email';
        isValid = false;
    } else if (!validateEmail()) {
        isValid = false;
    }
    
    if (!currentClass) {
        document.getElementById('classSelect').classList.add('error');
        document.getElementById('classError').textContent = 'Please select class';
        isValid = false;
    } else {
        document.getElementById('classSelect').classList.remove('error');
    }
    
    if (!currentSection) {
        document.getElementById('sectionSelect').classList.add('error');
        document.getElementById('sectionError').textContent = 'Please select section';
        isValid = false;
    } else {
        document.getElementById('sectionSelect').classList.remove('error');
    }
    
    if (!currentSubject) {
        document.getElementById('subjectSelect').classList.add('error');
        document.getElementById('subjectError').textContent = 'Please select a subject';
        isValid = false;
    } else {
        document.getElementById('subjectSelect').classList.remove('error');
    }
    
    if (!isValid) {
        return;
    }
    
    // Get students for selected class
    currentStudents = classStudents[currentClass] || [];
    
    // Set titles
    document.getElementById('subjectTitle').textContent = currentSubject;
    document.getElementById('classSectionTitle').textContent = `Class ${currentClass} - Section ${currentSection}`;
    
    // Populate student table
    const tableBody = document.getElementById('marksTableBody');
    tableBody.innerHTML = '';
    
    currentStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.sn}</td>
            <td>${student.name}</td>
            <td><input type="number" min="0" max="100" class="theory-mark" data-sn="${student.sn}" placeholder="0"></td>
            <td><input type="number" min="0" max="100" class="practical-mark" data-sn="${student.sn}" placeholder="0"></td>
        `;
        tableBody.appendChild(row);
    });
    
    // Show mark entry section
    document.getElementById('markEntrySection').classList.remove('hidden');
}

// Submit marks to Google Sheets
function submitMarks() {
    // Show loading spinner
    document.getElementById('submitText').textContent = 'Submitting...';
    document.getElementById('submitSpinner').classList.remove('hidden');
    document.getElementById('submitMarksBtn').disabled = true;
    
    // Collect marks data
    const marksData = [];
    const theoryInputs = document.querySelectorAll('.theory-mark');
    const practicalInputs = document.querySelectorAll('.practical-mark');
    
    let allValid = true;
    
    theoryInputs.forEach((input, index) => {
        const theoryMark = input.value.trim();
        const practicalMark = practicalInputs[index].value.trim();
        const sn = input.getAttribute('data-sn');
        
        // Validate marks (0-100 or empty)
        if (theoryMark && (isNaN(theoryMark) || theoryMark < 0 || theoryMark > 100)) {
            allValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
        
        if (practicalMark && (isNaN(practicalMark) || practicalMark < 0 || practicalMark > 100)) {
            allValid = false;
            practicalInputs[index].classList.add('error');
        } else {
            practicalInputs[index].classList.remove('error');
        }
        
        // Find student by serial number
        const student = currentStudents.find(s => s.sn == sn);
        
        marksData.push({
            sn: sn,
            name: student ? student.name : 'Unknown',
            theory: theoryMark || '0',
            practical: practicalMark || '0'
        });
    });
    
    if (!allValid) {
        alert("Please enter valid marks (numbers between 0-100) for all fields");
        document.getElementById('submitText').textContent = 'Submit Marks';
        document.getElementById('submitSpinner').classList.add('hidden');
        document.getElementById('submitMarksBtn').disabled = false;
        return;
    }
    
    // Prepare submission data
    const submissionData = {
        teacherName: currentTeacherName,
        teacherEmail: currentTeacherEmail,
        class: currentClass,
        section: currentSection,
        subject: currentSubject,
        marks: marksData,
        timestamp: new Date().toISOString()
    };
    
    // Send data to Google Sheets
    fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(submissionData)
    })
    .then(() => {
        // Show success message
        document.getElementById('markEntrySection').classList.add('hidden');
        document.getElementById('confirmationEmail').textContent = currentTeacherEmail;
        document.getElementById('successMessage').classList.remove('hidden');
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error submitting marks. Please check your connection and try again.");
    })
    .finally(() => {
        document.getElementById('submitText').textContent = 'Submit Marks';
        document.getElementById('submitSpinner').classList.add('hidden');
        document.getElementById('submitMarksBtn').disabled = false;
    });
}

// Reset form for new entry
function resetForm() {
    document.getElementById('teacherName').value = '';
    document.getElementById('teacherEmail').value = '';
    document.getElementById('classSelect').value = '';
    document.getElementById('sectionSelect').value = '';
    document.getElementById('subjectSelect').value = '';
    document.getElementById('marksTableBody').innerHTML = '';
    document.getElementById('successMessage').classList.add('hidden');
    
    // Clear any errors
    document.querySelectorAll('.error').forEach(el => {
        el.classList.remove('error');
    });
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
}