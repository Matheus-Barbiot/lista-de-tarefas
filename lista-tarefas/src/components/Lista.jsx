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
            <li key={index}>

                <div>
                    <div>
                        <input type="checkbox" checked={item.completed} onChange={(e) => updateItem(index, "completed", e.target.checked)}></input>{item.title}
                    </div>
                    <div>
                        <button onClick={() => setRender(String(index))}>editar</button>
                        <button onClick={() => removeItem(index)}>apagar</button>
                    </div>
                    
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
                <button onClick={() => setRender("home")}>back</button>

                <input
                    type="text"
                    value={item.title}
                    onChange={(e) => updateItem(n, "title", e.target.value)}>
                </input>

                <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateItem(n, "description", e.target.value)}>
                </input>

                <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={(e) => updateItem(n, "completed", e.target.checked)}>
                </input>
            </>
        )


    }

    if (render !== "home") {
        return (
            <>
            <div id='tarefa'>
                {pageItem(Number(render))}
            </div>
            </>
        )
        
    } else {
        return (
            <>
                <div id="lista">
                    <ul>{map}</ul>
                </div>
                <button onClick={addItem}>adicionar</button>
            </>
        )
    }

}

export default Lista