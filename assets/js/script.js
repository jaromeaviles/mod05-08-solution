



let daysList = ["First day", "Second day", "Third day", "Fourth day", "Fifth day", "Sixth day", "Seventh day", "Eight day",
                "Ninth day", "Tenth day", "Eleventh day", "Twelfth day"];

let giftsList = ["A Partridge in a Pear Tree", "2 Turtle Doves", "3 French Hens", "4 Calling Birds", "5 Golden Rings", 
                "6 Geese a Laying", "7 Swans a Swimming", "8 Maids a Milking", "9 Ladies Dancing", "10 Lords a Leaping",
                 "11 Pipers Piping", "12 Drummers Drumming"];


let currentDay = 0;

document.querySelector('#day'+currentDay).textContent = daysList[0];
document.querySelector('#gift'+currentDay).textContent = giftsList[0];

function showNextDay() {


	// document.querySelector('#stanza'+id)

	currentDay++;

	document.querySelector('#stanza'+currentDay).style.display = "block";

	document.querySelector('#day'+currentDay).textContent = daysList[currentDay];

    let gifts = '';

    for (let i = currentDay; i >= 0; i--) {

    	if (i === 1) {
    		
    	gifts = gifts + giftsList[i] + ' ' + ', and ';

    	} else {

    		gifts = gifts + giftsList[i] + ' ';
    	}


    }

    document.querySelector('#gift'+currentDay).textContent = gifts;

	if (currentDay === 11) {

        document.getElementById('nextButton').setAttribute('disabled', true);
        document.getElementById('nextButton').style.background = "transparent";
        document.getElementById('nextButton').style.color = "#fff";
    	document.getElementById('nextButton').style.border = "none";

    }

}