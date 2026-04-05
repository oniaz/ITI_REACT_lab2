import React from 'react'
import TodoItem from './TodoItem'
// import { useState } from 'react'
function TodoList({ todos }) {

    // const [todos, setTodos] = useState([])

    // const itemsList = [{
    //     id: 1,
    //     title: 'Test Todo Item',
    //     description: "item 1 for testing purposes. this is the description for item 1.",
    //     completed: false
    // }, {
    //     id: 2,
    //     title: 'Test Todo Item 2',
    //     description: "item 2 for testing purposes. this is the description for item 2.",
    //     completed: true
    // }
    // ]
    return (
        todos.map((item) => (
            <TodoItem key={item.id} item={item} />
        ))
    )
}

export default TodoList