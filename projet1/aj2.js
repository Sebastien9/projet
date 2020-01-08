function dernier() {

    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:last;type:txt;nb:10')

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