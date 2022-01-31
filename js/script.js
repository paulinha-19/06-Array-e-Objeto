// Crie um objeto que receba ao menos três propriedades sobre você.
let aboutMe = {
    name: 'Paula',
    stature: 1.60,
    favoriteColor: "black"
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
aboutMe.student = true;

// Remova uma propriedade desse objeto.
delete aboutMe.stature;

//Mostre no console todas as propriedades desse objeto.
console.log("Propriedades do objeto:",aboutMe);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
let cadastro = [
    {
        nome: 'Fulano',
        idade: 1,
        telefone: '98 90000-0000',
        amigos:['Ana','Bernardo','Carlos','Carla']
    },
    {
        nome: 'Beltrano',
        idade: 2,
        telefone: '99 90000-0000',
        amigos:['José','Maria','Mateus','João']
    },
    {
        nome: 'Carla',
        idade: 3,
        telefone: '21 90000-0000',
        amigos:['Ricardo','Beatriz','Kaio','Julia']
    },
    {
        nome: 'Ana',
        idade: 4,
        telefone: '98 90000-0000',
        amigos:['Tiago','Pedro','Paulo','Samuel']
    }
]
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.
console.log("Nome de um amigo de cada lista:");
for (let i = 0; i < cadastro.length; i++) {
    console.log(`Amigo da lista ${i}: ${cadastro[i].amigos[2]}`);
 }
 