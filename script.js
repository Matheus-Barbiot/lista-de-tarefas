// Elementos necessarios 
const botaoAdicionar = document.getElementById('adicionar');
const listaTarefas = document.getElementById('lista');

// Template tarefa
const templateTarefa = `<input type="checkbox">
<p contenteditable="true">Clique para editar</p>
<input type="button" value="X">`;


// funcao para adicionar uma nova tarefa
function addTarefa() {
    let novaTarefa = document.createElement('div');
    novaTarefa.classList.add('tarefa');
    novaTarefa.innerHTML = templateTarefa;
    botaoRemover = novaTarefa.children[2];
    listaTarefas.appendChild(novaTarefa);
    botaoRemover.addEventListener('click',(event) => removerTarefa(event));
}

// Funcao para remover uma tarefa
function removerTarefa(event) {
    const botaoClicado = event.target;
    botaoClicado.parentElement.remove();

}
// Evento de clique no botao adicionar
botaoAdicionar.addEventListener('click', addTarefa);
