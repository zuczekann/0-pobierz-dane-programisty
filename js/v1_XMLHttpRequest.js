/*  
    https://developer.mozilla.org/en-US/docs/Web/HTTP 
    https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started 
    https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
    ody ReadtState:   
            https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
            https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
*/



let httpReq  = new XMLHttpRequest();
//console.log(httpReq);


httpReq.open('GET', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');
httpReq.onreadystatechange = () => {
    console.log(httpReq.readyState);
    
    if(httpReq.readyState === 4) {

        if(httpReq.status === 200) {
            let data = httpReq.responseText;
            let dataJSON = JSON.parse(data);
            
            console.log(data);
            console.log(dataJSON);

            document.getElementById("imie").innerHTML = 'Imię: ' + dataJSON.imie;
            document.getElementById("nazwisko").innerHTML = 'nazwisko: ' + dataJSON.nazwisko;
            document.getElementById("zawod").innerHTML = 'zawod: ' + dataJSON.zawod;
            document.getElementById("firma").innerHTML = 'firma: ' + dataJSON.firma;
            
            //zwolnij połączenie z serwerem  
            httpReq = null; 

        } else {
            alert(`No to masz problem. Status połączenia: ${httpReq.readyState}`);
        }
    }
}

httpReq.send();