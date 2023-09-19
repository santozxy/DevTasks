/* eslint-disable react/prop-types */
import { useState } from 'react'
import { toast } from 'react-toastify';

export const TaskForm = ({ addTasks }) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !category) return;
        toast.success("Tarefa adicionada com sucesso", {
            theme: "dark"
          })
        addTasks(title, category, description)
        setTitle("")
        setCategory("")
        setDescription("")
    }

    return (
        <div className="task-form">
            <form onSubmit={handleSubmit}>
                <h1>Criar tarefa</h1>
                <label htmlFor="title">Título<span>*</span></label>
                <input type="text" placeholder='Ex: Estudar para prova' value={title} onChange={(e) => { setTitle(e.target.value) }} required id='title' autoComplete='true' />
                <label htmlFor="title">Categoria<span>*</span></label>
                <select value={category} onChange={(e) => { setCategory(e.target.value) }} required id='select'>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Filmes">Filmes</option>
                    <option value="Séries">Séries</option>
                </select>
                <label htmlFor="description">Descrição</label>
                <textarea value={description} onChange={(e) => { setDescription(e.target.value) }}
                    cols="20" rows="10" placeholder='Ex: Fazer até dia X' id='description' maxLength={65}>
                </textarea>
                <button type="submit">Criar tarefa</button>
            </form>

        </div>
    )
}
