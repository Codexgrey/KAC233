function getCost() {
    // elem, display; getting all input fields and display field on form
    // from, to; getting date inputs from forms and adding them to an array
    const elem = document.getElementsByTagName('input');
    const display = document.getElementById("display");
    const from = document.getElementById("from"); 
    const to = document.getElementById("to");
    var arr = [from, to];
    var daysArr = [];


    // function to get number of days
    function getDays() {
        arr.forEach((i)=> {
            let input = i.value;
            var i_date = new Date(input);
            
            // converting input to days
            let day = 1000 * 60 * 60 * 24;
            var num = Math.floor(i_date / day);
            
            // pushing date days into days array
            daysArr.push(num);
        });

        // calculate number of days attending.
        var days = daysArr[1] - daysArr[0];
        return days;
    }

    // initializing costs
    let cost = 0, totalCost = 0;
    var result;

    // percent discount
    let per = .15;

    // session count
    let count = 0


    // looping through input to find radio buttons, then get their values
    /* if; price > 100; 
        user opted for all access package on a session, so no cost by days.
        else if; price <= to 100; 
        user has paid for limited access package on a session, so "cost = cost * days" 
    */
    for (i = 0; i < elem.length; i++) {
        if (elem[i].type == "radio" && elem[i].checked) {
            let price = parseInt(elem[i].value); 
            count++;

            if (price > 100)
                cost += price; // session package = All access
            else  
                cost += getDays() * price; // session package = Limited access 
        }
    };


    // Checking for and calculating discounts
    if (count > 2 && cost > 1000) {
        totalCost = cost - (cost * per);
        result = totalCost + ", \n plus 15% discount"; 

    } else {
        totalCost = cost;
        result = totalCost;
    }


    /* 
    sending confirmation message after 
    making sure user has picked workshop dates.
    */
    if (!getDays()) {
        alert("Please properly fill out form & select workshop dates before proceeding...");
        location.reload();
        
    } else { 
        var accept = confirm("Do you accept total calculated cost of; €" +result+ " for payment?");
        if (accept == true) {
            alert("Thank you.");
            display.innerHTML = "Your total cost is: €" +result+ ". Enjoy!";
        }
        else {
            alert("Application Withdrawn.");
            location.reload();
        }
    }
    
    // to preventDefault behaviour onSubmit event
    return false;    
};