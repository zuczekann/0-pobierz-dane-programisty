//AJAX: https://www.w3schools.com/jquery/ajax_ajax.asp

let aURL = 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'

function v4GetData() {
    $.ajax({
        url: aURL, 
        success: function(data){
            //$("#div1").html(data);
            console.log(data);

            var objJSON = JSON.parse(data);
            var p = document.createElement('p');
            
            p.innerHTML = `Imię: ${objJSON.imie} <br/> Nazwisko: ${objJSON.nazwisko} <br/> Zawód: ${objJSON.zawod} <br/> Firma: ${objJSON.firma}<br/>`
             document.getElementById('v4-dane-programisty').appendChild(p);            
        }
    });
};

let btn4 = document.getElementById('btt-v4-get');
btn4.addEventListener('click', v4GetData, {once: true})
