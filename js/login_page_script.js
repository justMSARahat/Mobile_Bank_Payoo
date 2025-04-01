document.getElementById("login-btn").addEventListener('click', function(event){
    event.preventDefault();
    const AccountNumber = document.getElementById("account-number").value;

    const AccountPass = document.getElementById("account-password").value;
    const ConvertedPass = parseInt(AccountPass);

    if( AccountNumber.length >= 11 ){

        // Password Validation
        if( ConvertedPass === 1234 ){
            window.location.href="./home.html";
        }
        else{
            alert("Dada!!! Account Password Bhul! Thik Koren.");

        }

    }
    else{
        alert("Dada!!! Account Number Bhul! Thik Koren.");
    }

})