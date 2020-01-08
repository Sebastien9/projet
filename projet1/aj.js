function recupere() {

    var fact = new XMLHttpRequest();


    fact.onload = function() {



        // document.getElementById("sec").innerHTML = JSON.parse(fact.responseText);
        // document.getElementById("sec").innerHTML = tab[0].fact;

        var span = document.createElement('span');
        var tab = JSON.parse(fact.responseText);
        span.innerHTML = tab[0].fact;
        var p = document.getElementById("a");
        p.innerHTML = " ";
        p.appendChild(span);






    }
    fact.open("GET", 'http://jihane.fr/ajax/chucknorris.php/get?data=tri:alea;type:txt;nb:1')
    fact.send()

}

// function top() {

//     fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:top;type:txt;nb:10')

//     .then(
//         function(response) {
//             return response.json()
//         }
//     )

//     .then(

//         function(data) {


//             var tab = data;
//             for (i = 0; i < 10; i++) {
//                 var span = document.createElement('span');

//                 span.innerHTML = tab[i].fact;
//                 var p = document.getElementById("a");
//                 p.appendChild(span);

//             }
//         }
//     )

// }