import { useState } from "react";

class Tarefa {
    constructor() {
        this.title = 'Nota tarefa'
        this.description = "..."
        this.completed = false
    }
}

function Lista() {
    // Cria o estado da lista de tarefas
    const [listaAtual, setLista] = useState([new Tarefa()])
    const [render, setRender] = useState("home") // pode ser 1,2,3...
    // Mapeamento dos itens da lista de taregas
    const map = listaAtual.map((item, index) => {
        return (
            <li key={index} class='item'>
                <div id="text">
                    <input
                    className="checkbox"
                    type="checkbox" 
                    checked={item.completed} 
                    onChange={(e) => updateItem(index, "completed", e.target.checked)} />
                    {item.title}
                </div>
                <div>
                    <button onClick={() => setRender(String(index))}>...</button>
                    <button onClick={() => removeItem(index)}>X</button>
                </div>
            </li>
        )
    })

    function addItem() {
        setLista([...listaAtual, new Tarefa()])
    }
    function removeItem(n) {
        setLista(prev => prev.filter((_, i) => i !== n))
    }
    function updateItem(index, key, value) {
        setLista(lista =>
            lista.map((item, i) =>
                i === index
                    ? { ...item, [key]: value }
                    : item
            )
        )
    }

    function pageItem(n) {
        const item = listaAtual[n]

        return (
            <>
            <h2>Editando tarefa...</h2>
            <form>
                <label htmlFor="title">Titulo</label>
                <input
                    id="title"
                    type="text"
                    value={item.title}
                    onChange={(e) => updateItem(n, "title", e.target.value)}>
                </input>
                <label htmlFor="description">Descrição</label>
                <textarea
                    id='description'
                    value={item.description}
                    onChange={(e) => updateItem(n, "description", e.target.value)}>
                </textarea>
            </form>
                
            </>
        )


    }

    if (render !== "home") {
        return (
            <>
            <div id='content-tarefa' class='content'>
                {pageItem(Number(render))}
            </div>
            <button onClick={() => setRender("home")}>Voltar</button>
            </>
        )
        
    } else {
        return (
            <>
                <div id="content-lista" class='content'>
                    <ul id="lista">{map}</ul>
                </div>
                <button onClick={addItem}>Criar Tarefa</button>
            </>
        )
    }

}

export default Lista