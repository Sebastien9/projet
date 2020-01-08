function recuperer() {
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                for (let i = 0; i <= 19; i++) {
                    var dp = document.createElement("div");
                    dp.setAttribute("id", "aligne" + i)
                    dp.innerHTML = " ";
                    var parent = document.getElementById("pok");
                    parent.appendChild(dp);
                    var pokemonf = document.createElement("p");
                    pokemonf.innerHTML = data.results[i].name;
                    dp.appendChild(pokemonf);
                    var inf = document.createElement("p");
                    inf.innerHTML = "voir les stats";
                    inf.addEventListener("click", function() { pokeinf(data.results[i].name) })
                    dp.appendChild(inf);
                }
            }
        )
}

function pokeinf(name) {
    var visible = document.getElementById("i");
    visible.className = "vue"
    fetch('https://pokeapi.co/api/v2/pokemon/' + name)
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                var parent = document.getElementById("i");
                parent.innerHTML = " ";

                var idt = document.createElement("h3");
                idt.innerHTML = "Id";



                var parent = document.getElementById("i");
                parent.appendChild(idt);

                var id = document.createElement("p");
                id.innerHTML = data.id;



                var parent = document.getElementById("i");
                parent.appendChild(id);

                var nomt = document.createElement("h3");
                nomt.innerHTML = "Nom";

                var parent = document.getElementById("i");
                parent.appendChild(nomt);

                var nom = document.createElement("p");
                nom.innerHTML = data.name;



                var parent = document.getElementById("i");
                parent.appendChild(nom);

                var hauteurt = document.createElement("h3");
                hauteurt.innerHTML = "Hauteur";

                var parent = document.getElementById("i");
                parent.appendChild(hauteurt);



                var hauteur = document.createElement("p");
                hauteur.innerHTML = data.height;

                var parent = document.getElementById("i");
                parent.appendChild(hauteur);

                var imaget = document.createElement("h3");
                imaget.innerHTML = "Image";

                var parent = document.getElementById("i");
                parent.appendChild(imaget);



                var image = document.createElement("img");
                image.setAttribute("src", data.sprites.front_default);
                var parent = document.getElementById("i");
                parent.appendChild(image);

            }
        )
}