/* eslint-disable jsx-a11y/label-has-associated-control */
'use client'
import React, { useState } from 'react'

interface Task {
  name: string
  isChecked: boolean
  id: number // Ajout d'une propriété id pour identifier chaque tâche
}

const MySexyTodoPage: React.FC = () => {
  const [checkAllBox, setCheckAllBox] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([
    { name: 'Commencer les décorations de Noël', isChecked: false, id: 1 },
    { name: 'Ranger le bureau', isChecked: false, id: 2 },
    { name: 'Acheter du café', isChecked: false, id: 3 }
  ])

  const handleCheckAll = () => {
    const newValue = !checkAllBox
    setCheckAllBox(newValue)
    const updatedTasks = tasks.map((task) => ({
      ...task,
      isChecked: newValue
    }))
    setTasks(updatedTasks)
  }

  const isAllChecked = tasks.every((task) => task.isChecked)

  // Séparation des tâches en cours et terminées
  const inProgressTasks = tasks.filter((task) => !task.isChecked)
  const completedTasks = tasks.filter((task) => task.isChecked)

  // Fonction pour supprimer une tâche
  const handleDeleteTask = (id: number) => {
    const deletedTask = tasks.find((task) => task.id === id)
    if (deletedTask) {
      console.log('Tâche supprimée :', deletedTask)
      const updatedTasks = tasks.filter((task) => task.id !== id)
      setTasks(updatedTasks)
    }
  }

  const Task: React.FC<Task> = ({ name, isChecked, id }) => {
    return (
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, isChecked: !t.isChecked } : t))
            setTasks(updatedTasks)
          }}
        />
        <label>{name}</label>
        <button onClick={() => handleDeleteTask(id)}>Supprimer</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Ma liste de tâches</h1>
      <div>
        <input type="checkbox" checked={checkAllBox} onChange={handleCheckAll} />
        <label>Cocher toutes les cases</label>
      </div>
      <div>
        {isAllChecked ? <p>Toutes les cases sont cochées</p> : <p>Veuillez cocher toutes les cases selon l'état</p>}
      </div>
      {/* Affichage des tâches en cours */}
      <h2>Tâches en cours :</h2>
      {inProgressTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
      {/* Affichage des tâches terminées */}
      <h2>Tâches terminées :</h2>
      {completedTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  )
}

export default MySexyTodoPage
