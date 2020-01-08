function to() {

    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:top;type:txt;nb:10')

    .then(
        function(response) {
            return response.json()
        }
    )

    .then(

        function(data) {


            var tab = data;
            for (i = 0; i < 10; i++) {
                var span = document.createElement('span');

                span.innerHTML = tab[i].fact;
                var p = document.getElementById("a");

                p.appendChild(span);


            }
        }
    )

}

var page = 1

function suivant() {
    page++
    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:top;type:txt;nb:10;page:' + page)


    .then(
        function(response) {
            return response.json()
        }
    )

    .then(

        function(data) {


            var tab = data;
            for (i = 0; i < 10; i++) {
                var span = document.createElement('span');

                span.innerHTML = tab[i].fact;
                var p = document.getElementById("a");

                p.appendChild(span);


            }
        }
    )

}


function precedent() {
    page--
    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:top;type:txt;nb:10;page:' - page)


    .then(
        function(response) {
            return response.json()
        }
    )

    .then(

        function(data) {


            var tab = data;
            for (i = 10; i > 0; i++) {
                var span = document.createElement('span');

                span.innerHTML = tab[i].fact;
                var p = document.getElementById("a");

                p.appendChild(span);


            }
        }
    )
}