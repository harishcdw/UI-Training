function bank(process){

    let users = [
        {
            "accountNo": "1",
            "cardNumber": "11",
            "Pin": "111",
            "accountBalance": "1000"
        },
        {
            "accountNo": "2",
            "cardNumber": "22",
            "Pin": "222",
            "accountBalance": "2000"
        },
        {
            "accountNo": "3",
            "cardNumber": "33",
            "Pin": "333",
            "accountBalance": "3000"
        },
        {
            "accountNo": "4",
            "cardNumber": "44",
            "Pin": "444",
            "accountBalance": "4000"
        }
    ]
    if(process==1){
        validateAccount(1);
    }
    else{
        validateAccount(2);
    }

    function validateCard(index,process2) {
        let card = prompt("Enter the card Number");
        if (users[index].cardNumber == card) {
            let pin = prompt("Enter the pin");
            if (users[index].Pin == pin) {
                if(process2==1){
                    let wd=prompt("Enter the amount to withdraw");
                    if(wd<=users[index].accountBalance){
                        users[index].accountBalance-=wd;
                        alert("Amount Withdrawn : "+wd+ "\nCurrent Account Balance: "+users[index].accountBalance+"\nThank you");
                    }
                    else{
                        alert("Insufficient balance");
                    }
                }
                else if(process2==2){
                    let dp=prompt("Enter the amount to deposit");
                    users[index].accountBalance=parseInt(users[index].accountBalance)+parseInt(dp);
                    
                    alert("Amount deposit : "+dp+ "\nCurrent Account Balance: "+users[index].accountBalance+"\nThank you");
                }     
            }
            else {
                alert("Incorrect Pin");
                return false;
            }
        }
        else {
            alert("Incorrect Card number");
            return false;
        }
    }


    function validateAccount(process1) {
        let acc = prompt('Enter the account no')
        
        let count = -1;
        for (userValue of users) {
            count++;
            if (userValue['accountNo'] == acc) {
                return validateCard(count,process1);  
            }
        }
        alert("Account not found!");
        return false;
    }
}

function withdraw() {
    if (bank(1)) {
         console.log("True");
    }
}


function deposit() {
    if (bank(2)) {
        console.log("True");
    }
}

function choise() {
    let val = prompt("1.withdraw 2.deposit");
    console.log(val);
    if (val == 1) {
        withdraw();
    }
    else if(val==2) {
        deposit();
    }
    else{
        alert("Invalid choice");
    }
}
choise()