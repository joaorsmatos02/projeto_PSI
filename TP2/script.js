function load() {

    //1
    document.querySelectorAll('[role="menuitem"]').forEach((menuItem) => {
        menuItem.addEventListener("click", completaTexto);
    });
    

    //2
    document.getElementById("addRow").addEventListener("click", adicionaLinha);

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Ordenar";
    button.addEventListener("click", function() {   
        const tbody = document.querySelector("tbody");
        const tr = tbody.querySelectorAll("tr");
        var sorted = Array.from(tr);
        sorted.sort((a, b) => {
           return parseInt(a.cells[2].textContent) - parseInt(b.cells[2].textContent);
        });
        tbody.innerHTML = "";
        sorted.forEach(row => tbody.appendChild(row));
    });
    document.getElementById("form1").appendChild(button);

}

function completaTexto(event) {
    const selectedOptionElement = document.getElementById("selectedOption");
    selectedOptionElement.textContent = event.target.textContent;
}

function adicionaLinha(event) {
    const productName = document.getElementById("productName");
    const productCost = document.getElementById("productCost");
    const origin = document.querySelector('input[name="origin"]:checked');
    const body = document.querySelector("tbody");
    
    if (productName.value && productCost.value && origin) {
        var row = body.insertRow(-1); // nova linha no fim
        
        row.insertCell(0).innerHTML = productName.value;
        productName.value = "";

        row.insertCell(1).innerHTML = origin.nextElementSibling.innerHTML;
        origin.checked = false;

        row.insertCell(2).innerHTML = productCost.value;
        productCost.value = "";
    } else {
        alert("Preencha todos os campos");
    }
}
