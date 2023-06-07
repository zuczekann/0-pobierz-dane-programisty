
//jQuery.get( url [, data ] [, success ] [, dataType ] )


    $(document).ready(function() {
        
        $('#btt-v5-get').click(function() {

            $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
                
                .done(function(data) {

                    console.log(data);          //pobrane jako string  
                    let dataJSON = JSON.parse(data);

                    let pImie = $('<p></p>').text(`Post ID: ${dataJSON.imie}`);
                    let pNazwisko = $('<p></p>').text(`User ID: ${dataJSON.nazwisko}`);
                    let pZawod = $('<p></p>').text(`Title: ${dataJSON.zawod}`);
                    let pFirma = $('<p></p>').text(`Body: ${dataJSON.firma}`);
                    let hr = $('<hr />');
          
                    let jqBody = $('body');
                    jqBody.append(pImie);
                    jqBody.append(pNazwisko);
                    jqBody.append(pZawod);
                    jqBody.append(pFirma);
                    jqBody.append(hr); 
                })

                .fail(function(error) {
                    console.error(error);
                });
        });
        
    });

