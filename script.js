var contenido = document.querySelector("#contenido");

function cargar(){
    fetch("https://randomuser.me/api")
        .then(res => res.json())
        .then(res => {
            console.log(res.results[0])
            var contador = 4;
            contenido.innerHTML = "";
            for(i=0; i<contador ;i++){
                for(let datos of res.results){
                    contenido.innerHTML =
                    `<tr>
                    <td> ${res.results[0].id.value}</td>
                    <td> ${res.results[0].name.first}</td>
                    <td> ${res.results[0].name.last}</td>
                    <td> ${res.results[0].email}</td>
                    </tr>`
                }
            }
        })
}