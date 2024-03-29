// Displays the surveyCreate div, and hides the others
function surveyCreate() {
    document.querySelector('.create-surveys').style.display = 'block';
    document.querySelector('.modify-surveys').style.display = 'none';
    document.querySelector('.modify-survey').style.display = 'none';
}

// Displays the opportunityCreate div, and hides the others
function opportunityCreate() {
    document.querySelector('.create-opportunities').style.display = 'block';
    document.querySelector('.modify-opportunities').style.display = 'none';
}

// Displays the supportGroupCreate div, and hides the others
function supportGroupCreate() {
    document.querySelector('.create-supportGroups').style.display = 'block';
    document.querySelector('.modify-supportGroups').style.display = 'none';
}

// Displays the studyCreate div, and hides the others
function studyCreate() {
    document.querySelector('.create-studies').style.display = 'block';
    document.querySelector('.modify-studies').style.display = 'none';
}

// Used to hide specific modules when necessary
function hideAll() {
    document.querySelector('.survey-list').style.display = 'none';
    document.querySelector('.search-survey-list').style.display = 'flex';
    document.querySelector('.survey-item').style.width = '50%';

    document.querySelector('.opportunity-list').style.display = 'none'
    document.querySelector('.search-opportunity-list').style.display = 'flex';
    document.querySelector('.opportunity-item').style.width = '50%';

    document.querySelector('.supportGroup-list').style.display = 'none'
    document.querySelector('.search-supportGroup-list').style.display = 'flex';
    document.querySelector('.supportGroup-item').style.width = '50%';

    document.querySelector('.study-list').style.display = 'none';
    document.querySelector('.search-study-list').style.display = 'flex';
    document.querySelector('.study-item').style.width = '50%';
}
function hideSupportGroup() {
    document.querySelector('.supportGroup-list').style.display = 'none'
    document.querySelector('.search-supportGroup-list').style.display = 'flex';
    document.querySelector('.supportGroup-item').style.width = '50%';
}
// Used to display the FAQ section when clicked on in the Account Page 
function faq() {
    document.querySelector('.faq-section').style.display = 'block';
    document.querySelector('.compensation-section').style.display = 'none';
    document.querySelector('.account-page-box').style.display = 'none';
    document.querySelector('.faq-list').style.display = 'flex';

}

// Used to display the Compensation section when clicked on in the Account Page 
function accountCompensation() {
    document.querySelector('.compensation-listing').style.display = 'flex';
    document.querySelector('.compensation-section').style.display = 'block';
    document.querySelector('.account-page-box').style.display = 'none';
    document.querySelector('.faq-section').style.display = 'none';
}


// Used to display the General section on the account page 
function generalAccountDisplay() {
    document.querySelector('.account-page-box').style.display = 'block';
    document.querySelector('.compensation-section').style.display = 'none';
    document.querySelector('.faq-section').style.display = 'none';
} 

// When edit is clicked on in account page, it links to this function to be called. Function is used to allow user editing
function editUserAccountInput() {
    document.getElementById('myInput3').removeAttribute('disabled');    // makes the select button dropdown editable
    document.querySelector('.save-btn').style.display = 'block';
    document.querySelector('.cancel-btn').style.display = 'block';
    var inputElements = document.querySelectorAll('.myInput');
    inputElements.forEach(function(input) {
      input.readOnly = false;
    });
  }

// Allows form updated information to stay updated when updating the user information on the account page
function updateUserAccountInfo(firstname, lastname, email, user_type) {    
    // Update the information:
    document.getElementById("myInput0").value = firstname;
    document.getElementById("myInput1").value = lastname;
    document.getElementById("myInput2").value = email;
    document.getElementById("myInput3").value = user_type;
}

//Adds a question label and form-input for the surveyEdit function.
function addQuestionHere() {

    // Retrieve questionCounter from the hidden input
    var questionCounter = document.querySelector('input[name="questionCounter"]');
    var container = document.querySelector('#questionContainer');

    // Create new label element and set to "question #:" using var questionCounter
    var label = document.createElement('label');
    label.setAttribute('for', 'question');
    label.innerHTML = '<b>Question ' + questionCounter.value + ':</b>';


    // Create form-input elements
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'question[]');
    input.setAttribute('class', 'form-input');
    input.setAttribute('required', 'required');

    // Append the new elements to the container
    container.appendChild(label);
    container.appendChild(document.createElement('br'));
    container.appendChild(input);
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));

    // Increment question counter for the next question
    questionCounter.value = parseInt(questionCounter.value) + 1;
}

function confirmDelete() {
    return confirm('Are you sure you want to delete this question?');
}