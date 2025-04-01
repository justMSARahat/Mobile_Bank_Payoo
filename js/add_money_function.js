
document.getElementById("Add_Money").addEventListener("click", function(event){
    event.preventDefault();

    const Data = document.getElementById("Amount").value;
    const Amount = parseFloat(Data);

    const Account = document.getElementById("account-number").value;
    const Password = document.getElementById("account-password").value;
    const ConvertedPass = parseInt(Password);

    if(Account.length >= 11 ){

        if(ConvertedPass === 1234){

            if(Amount >= 0){

                const Default_Amount = document.getElementById("Balance").innerText;
                const Value = parseFloat(Default_Amount);
                const NewBalance = Value + Amount;

                document.getElementById("Balance").innerText = NewBalance;



                alert(NewBalance)

            }else{
                alert("Invalid Amount");
            }

        }else{
            alert("Dada!!! Account Password Bhul! Thik Koren.");
        }

    }else{
        alert("Dada!!! Account Number Bhul! Thik Koren.");
    }


})