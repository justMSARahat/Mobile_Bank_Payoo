// Amount
// account-number
// account-password
// cashout
// Balance


document.getElementById("cashout").addEventListener('click', function(event){
    event.preventDefault();

    const AccountNumber = document.getElementById("cashout_account-number").value;

    const pass = document.getElementById("cashout_account-password").value;
    const password = parseInt(pass);

    const amount_string = document.getElementById("cashout_amount").value;
    const Amount = parseFloat(amount_string);

    const Cashout_Default_Amount = document.getElementById("Balance").innerText;
    const Value = parseFloat(Cashout_Default_Amount);



    if( AccountNumber.length >= 11 ){

        // Password Validation
        if( password === 1234 ){

            if( Amount >= 0 ){

                if( Value >= Amount ){


                    const cashout_NewBalance = Value - Amount;

                    document.getElementById("Balance").innerText = cashout_NewBalance;



                    alert(cashout_NewBalance);
                }
                else{
                    alert("Dada!!! Account e taka kom.");

                }


            }else{
                alert("Dada!!! Amount Thik Koren.");
            }

        }
        else{
            alert("Dada!!! Account Password Bhul! Thik Koren.");

        }

    }
    else{
        alert("Dada!!! Account Number Bhul! Thik Koren.");
    }

})