import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(title)
    setTitle('')
  }

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  console.log(title)

  return (
    <div style={styles.container}>
      <form
        onSubmit={(event) => {
          handleSubmit(event)
        }}
      >
        <input
          type="text" 
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={(event) => {
            handleChangeTitle(event)
          }}
          value={title}
        />
        
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    marginBotton: '32px'
  },
  
  formInput: {
    height: '66px',
    width: '40%',
    fontSize: '16px',
    padding: '0 16px',
    marginBottom: '25px',
    borderRadius: '8px',
    marginRight: '11px',
    border: '1px solid #BDBDBD'
  },
  button: {
    color: 'white',
    height: '69px',
    fontSize: '16px',
    backgroundColor: '#0d6efd',
    border: '1px solid #0d6efd',
    borderRadius: '8px',
  },
}

export default TodoForm