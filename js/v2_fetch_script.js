
let btnGetData = document.getElementById('btt-v2-get');

const getData = () => {

    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(res => res.json())
        .then(data => {

            let pImie = document.createElement('p');
            let pNazwisko = document.createElement('p');
            let pZawod = document.createElement('p');
            let pFirma = document.createElement('p');
            let hr = document.createElement('hr');

            pImie.innerText = `Imię: ${data.imie}`;
            pNazwisko.innerText = `Nazwisko: ${data.nazwisko}`;
            pZawod.innerText = `Zawód: ${data.zawod}`;
            pFirma.innerText = `Firma: ${data.firma}`;

            let div = document.getElementById("version2");
            div.appendChild(pImie);
            div.appendChild(pNazwisko);
            div.appendChild(pZawod);
            div.appendChild(pFirma); 
        })
        .catch(error => {
            console.error(error);
        })
};

btnGetData.addEventListener('click', getData, {once: true});    //jednokrotne wywołanie 

