function getCharge() {
    event.preventDefault();
    const elem = document.getElementsByTagName('input');
    const display = document.getElementById("display");
    var result;
    let charge = 0, totalCharge = 0;

    // percent discount
    let per1 = .30, per2 = .15;

    // session count
    let count = 0;

    for (i = 0; i < elem.length; i++) {
        if (elem[i].type == "radio" && elem[i].checked) {
            count++;
            charge += parseInt(elem[i].value);
        }
    };

    if (count == 3) {
        totalCharge = charge - (charge * per1);
        result="Your total Charge is: €" + totalCharge + ", \n plus 30% discount. Thank you.";

    } else if (count == 2) {
        totalCharge = charge - (charge * per2);
        result="Your total Charge is: €" + totalCharge + ", \n plus 15% discount. Thank you.";

    } else {
        totalCharge = charge;
        result="Your total Charge is: €" + totalCharge + ", \n Thank you.";
    } 

    display.innerHTML= result;
    console.log(result);
};