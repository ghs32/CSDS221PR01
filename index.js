function getDays(){
    let start_date= new Date(document.getElementById('check-in').value);
    let end_date = new Date(document.getElementById('check-out').value);
    let adultNum = document.getElementById('adult-number').value;

    let a = moment(start_date)
    let b = moment(end_date)
    let time_difference = a.diff(b,'days');
    if(start_date.getTime() > end_date.getTime()){
        time_difference = time_difference * -1;
    } else {
        time_difference = time_difference * -1;
    } 
    $("#days-amount").val(time_difference);
    $("#cost").prop('value','$'+ 150*time_difference*adultNum);
}


function reset(){
    document.getElementById('user_info').reset();
    toastr.success("Fields Succesfully Cleared");
}


function submit(){
    let userName = document.getElementById('user-name').value;
    let userNameHighlight = document.getElementById('user-name-container');
    let firstName = document.getElementById('first-name').value;
    let firstNameHighlight = document.getElementById('first-name-container');
    let lastName = document.getElementById('last-name').value;
    let lastNameHighlight = document.getElementById('last-name-container');
    let phoneNumber = document.getElementById('phone-number').value;
    let phoneNumberHighlight = document.getElementById('phone-number-container');
    let faxNumber = document.getElementById('fax-number').value;
    let faxNumberHighlight = document.getElementById('fax-number-container');
    let emailAddress = document.getElementById('email-address').value;
    let emailAddresshighlight = document.getElementById('email-address-container');
    let emailRegex = /^([a-zA-Z0-9._\-]+|[a-zA-Z0-9]+(?:[._\-][a-zA-Z0-9]+)*)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let costValue = document.getElementById('cost').value;
    costValue = costValue.replace("$","");
    
    let errorForm = false;
    let errorCost = false; 
    let negativeCost = false;
    if(userName == null || userName =="" || userName.trim().length === 0){
        errorForm = true;
        userNameHighlight.classList.add("has-error");
    } else {
        userNameHighlight.classList.remove("has-error");
    }
    if(firstName == null || firstName =="" || firstName.trim().length === 0){
        errorForm = true;
        firstNameHighlight.classList.add("has-error");
    } else {
        firstNameHighlight.classList.remove("has-error");
    }
    if(lastName == null || lastName =="" || lastName.trim().length === 0){
        errorForm = true;
        lastNameHighlight.classList.add("has-error");
    } else {
        lastNameHighlight.classList.remove("has-error");
    }
    if(phoneNumber == null || phoneNumber =="" || phoneNumber.trim().length === 0){
        errorForm = true;
        phoneNumberHighlight.classList.add("has-error");
    } else {
        phoneNumberHighlight.classList.remove("has-error");
    }
    if(faxNumber == null || faxNumber =="" || faxNumber.trim().length === 0){
        errorForm = true;
        faxNumberHighlight.classList.add("has-error");
    } else {
        faxNumberHighlight.classList.remove("has-error");
    }
    if(emailAddress == null || emailAddress =="" || emailAddress.trim().length === 0 || !emailRegex.test(String(emailAddress).toLowerCase())){
        errorForm = true;
        emailAddresshighlight.classList.add("has-error");
    } else {
        emailAddresshighlight.classList.remove("has-error");
    }
    if(errorForm == true){
        toastr.error("Field is missing!");
    }
    
    if(costValue == "NaN" || costValue == ""){    
        errorCost = true; 
        toastr.error("No cost was calculated!");
    }
    if(Number(costValue) < 0){
        negativeCost = true;
        toastr.error("Cost is negative!");
    }

    if(errorCost == false && negativeCost == false && errorForm == false){
        toastr.success("Form was successfully submitted!")
    }
}
