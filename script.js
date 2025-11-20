//interactive elements
$(document).ready(function(){

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

  
    function validatePhone(phone) {
   
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(String(phone));
    }

   
    $('#enquiryForm').on('submit', function(e) {
        const email = $('#email').val();
        const phone = $('#phone').val();
        const messageDiv = $('#validationMessage');
        messageDiv.text(''); 

        let isValid = true;
        let errorMessage = '';

        if (!validateEmail(email)) {
            errorMessage += '❌ Please enter a valid email address.\n';
            isValid = false;
        }

        if (!validatePhone(phone)) {
            errorMessage += '❌ Please enter a valid phone number (e.g., +27746216649).\n';
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault(); 
            messageDiv.html(errorMessage.replace(/\n/g, '<br>')); 
        }
        
    });
});