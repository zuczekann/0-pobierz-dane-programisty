// $(selector).getJSON(url,data,success(data,status,xhr))

let pURL = "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php"

const insData = () => {

    $.getJSON(pURL, function(data){

        //$("<div id='version3'>").appendTo('body');  //gdyby nie było 

        $('<p>').text(`Imię: ${data.imie}`).appendTo('#version3');
        $('<p>').text(`Nazwisko: ${data.nazwisko}`).appendTo('#version3');
        $('<p>').text(`Zawód: ${data.zawod}`).appendTo('#version3');
        $('<p>').text(`Firma: ${data.firma}`).appendTo('#version3');
    });
}

let btn3 = document.getElementById('btt-v3-getJSON');
btn3.addEventListener('click', insData, {once: true});

