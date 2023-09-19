
/* eslint-disable react/prop-types */
import { useState } from 'react';

import { toast } from 'react-toastify';
import ModalDelete from './ModalDelete';

const Task = ({ task, removeTasks, completeTask }) => {
  const [showModal, setShowModal] = useState(false)
  const taskStyle = {
    textDecoration: task.isCompleted ? "line-through" : "",
    color: task.isCompleted ? "green" : "",
    background: task.isCompleted ? "#f2f2f2" : "",
  };

  //Verificação de ícones
  const iconsCategory = task.category === "Trabalho" ? "fa-solid fa-briefcase" : task.category === "Estudos" ? "fa-solid fa-book" : task.category === "Pessoal" ? "fa-solid fa-image-portrait" : task.category === "Filmes" ? "fa-solid fa-film" : "fa-solid fa-film"

  const removeTask = () => {
    setShowModal(!showModal)
  }

  const complete = () => {
    completeTask(task.id);
    task.isCompleted ? null : toast.success("Tarefa concluída", {
      theme: "dark"
    })

  }

  return (
    <div className="task" style={taskStyle}>
      <div className="task-header">
        <h1>{task.category}</h1>
        <div className="task-category" ><i className={iconsCategory}></i></div>
      </div>
      <div className="task-title"><h1>{task.title}</h1></div>
      <div className="task-description" >{task.description}</div>
      <div className="task-actions">
        <button className="complete" onClick={complete}><i className="fa-solid fa-circle-check"></i></button>
        <button className="remove" onClick={removeTask}><i className="fa-solid fa-trash"></i></button>
      </div>
      {showModal ? <ModalDelete removeTasks={removeTasks} id={task.id} setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default Task