import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const[tasks, setTasks] = useState([
      {
      id:1,
      text:"Gym",
      day: " Feb 14 at 3:00PM ",
      reminder: true,
      },
      {
        id:2,
        text:"Sleep",
        day: " Feb 14 at 3:30PM ",
        reminder: false,
        },
        {
          id:3,
          text:"Eat",
          day: " Feb 14 at 4:00PM",
          reminder: false,
          }
    ])
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
     <Header />
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
