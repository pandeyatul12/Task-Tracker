import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
    const[showAddTask, setShowAddTask] = useState(false)
    const[tasks, setTasks] = useState([
      {
         id:1,
         text:"Gym",
         day: " Feb 20 at 5:00PM ",
         reminder: true,
      },
      {
         id:2,
         text:"Football",
         day: " Feb 20 at 6:00PM ",
         reminder: false,
        },
      {
          id:3,
          text:"Sleep",
          day: " Feb 20 at 10:00PM",
          reminder: false,
      }
    ])
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000)+ 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }  

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ?
      {...task, reminder: !task.reminder}:
      task
    ))
  }

  return (
    <div className='container'>
     <Header onAdd= {() => 
      setShowAddTask(!showAddTask)}
      showAdd = {showAddTask}
      />
     {showAddTask && <AddTask onAdd = {addTask}/>}
     {tasks.length> 0 ? 
     (< Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder}
      />) :
     ('No Task To Show')
      }
    </div>
  )
}

export default App;
