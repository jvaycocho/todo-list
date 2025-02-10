import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header.jsx'
import Todo from './components/Todo.jsx'
import Button from './components/Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="TODO - LIST" />
      <Todo one="Learn React" two="Build a To-Do List" three="Master JavaScript" four="Apply for Jobs"/>
      <Button add="Add" del="Delete"/>
    </>
  )
}

export default App
