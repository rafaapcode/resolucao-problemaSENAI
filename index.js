let dataAtual = new Date(2022, 05, 28).getTime();
let dataEvento = new Date(2022, 10, 07).getTime();

let palestrante = {
    evento1: ["Ronaldo", "Hamilton", "César"],
    evento2: ["Fabiano", "Felipe"],
    evento3: ["Saulo", "Fabrício", "João"],
    evento4: ["Henrique", "Vinicius", 'Guilherme']
}

let evento1 = ["Ronaldo", "Hamilton", "César", "Fabiano", "Felipe", "Saulo", "Fabrício", "João"];
let evento2 = ["Fabiano", "Felipe", "Ronaldo", "Hamilton", "César"];
let evento3 = ["Saulo", "Fabrício", "João", "Henrique", "Vinicius", "Guilherme"];
let evento4 = ["Henrique", "Vinicius", "Guilherme", "Saulo", "Fabrício", "João"];



if (dataEvento > dataAtual) {
    cadastro("Rafael", 18, evento1);
    listatudo();
} else {
    console.log("Cadastro não será permitido por data inválida.")
}


function cadastro(nome, idade, event) {

    if (event.length < 100) {
        if (idade >= 18) {
            event.push(nome);
        } else {
            console.log("Cadastro não é permitido pela idade.")
        }
    } else {
        console.log("Cadastro não será permitido por ter excedido o limite.");
    }

}

function listatudo() {
    console.log("Palestrantes evento 1: ", palestrante.evento1);
    console.log("Palestrantes evento 2: ", palestrante.evento2);
    console.log("Palestrantes evento 3: ", palestrante.evento3);
    console.log("Palestrantes evento 4: ", palestrante.evento4);

    console.log("\nParticipantes evento 1: ", evento1)
    console.log("\nParticipantes evento 2: ", evento2)
    console.log("\nParticipantes evento 3: ", evento3)
    console.log("\nParticipantes evento 4: ", evento4)
}
