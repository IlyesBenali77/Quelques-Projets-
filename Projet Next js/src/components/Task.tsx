import React, { useState } from 'react'

interface TaskProps {
  name: string
  isCheck: boolean
  onTaskCheck: (isChecked: boolean) => void
}

const Task: React.FC<TaskProps> = ({ name, isCheck, onTaskCheck }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    onTaskCheck(isChecked)
  }

  return (
    <div>
      <input type="checkbox" checked={isCheck} onChange={handleCheckboxChange} />
      <label>{name}</label>
    </div>
  )
}

const MySexyTodoPage: React.FC = () => {
  const [isAllChecked, setIsAllChecked] = useState(false)

  const handleAllTasksCheck = (isChecked: boolean) => {
    setIsAllChecked(isChecked)
  }

  return (
    <div>
      <h1>Ma liste de tâches</h1>
      <Task name="Commencer les décorations de Noël" isCheck={isAllChecked} onTaskCheck={handleAllTasksCheck} />
      <Task name="Ranger le bureau" isCheck={isAllChecked} onTaskCheck={handleAllTasksCheck} />
      <Task name="Acheter du café" isCheck={isAllChecked} onTaskCheck={handleAllTasksCheck} />
    </div>
  )
}

export default MySexyTodoPage
