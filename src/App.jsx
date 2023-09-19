
import { useState, useEffect } from "react";
import './App.scss'

import Task from "./components/Task";
import { TaskForm } from "./components/TaksForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

import { MdOutlineLibraryBooks } from "react-icons/md";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [category, setCategory] = useState("All");
  const [tasks, setTasks] = useState([]);

  // Carregar tarefas do Local Storage quando o componente for montado
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Atualizar o Local Storage sempre que as tarefas forem modificadas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTasks = (title, category, description) => {
    const newTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 1000),
        title,
        category,
        description,
        isCompleted: false,
      },
    ];

    setTasks(newTasks);
  }

  const removeTasks = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  const completeTask = (id) => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <header>
        <h1 className="logo">Dev <span>Tasks </span><MdOutlineLibraryBooks /></h1>
        <Search search={search} setSearch={setSearch} />
      </header>
      <div className="container">
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} category={category} setCategory={setCategory} />
        <div className="tasks">
          {tasks.length === 0 ? <h3>Você não possui nenhuma tarefa.</h3> : tasks
            .filter((task) => category === "All" ? true : task.category === category)
            .filter((task) => filter === "All" ? true : filter === "Completed" ? task.isCompleted : !task.isCompleted)
            .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) =>
              sort === "Asc"
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title)
            )
            .map((task) => (
              <Task key={task.id} task={task} removeTasks={removeTasks} completeTask={completeTask} />
            ))}
        </div>
      </div>
      <div className="add-tasks">
        <TaskForm addTasks={addTasks} />
      </div>
    </div>
  );
}

export default App;





