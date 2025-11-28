// Elementos necessarios 
const botaoAdicionar = document.getElementById('adicionar');
const listaTarefas = document.getElementById('lista');

// Template tarefa
const templateTarefa = `
<input type="checkbox">
<p>Tarefa Exemplo</p>
<input type="button" value="x">
`

// Array com as tarefas listadas
let tarefas = [];

// funcao para adicionar uma nova tarefa
function addTarefa() {
    let novaTarefa = document.createElement('div');
    novaTarefa.classList.add('tarefa');
    novaTarefa.innerHTML = templateTarefa;
    tarefas.push(novaTarefa);

    listaTarefas.appendChild(novaTarefa);
}

// Evento de clique no botao adicionar
botaoAdicionar.addEventListener('click', addTarefa);