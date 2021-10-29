import React from 'react'
import styled from 'styled-components'

export const EditTodo = () => {
  return (
    <>
      <h1>EditTodo</h1>
      <h2>CurrentTodo</h2>
      <input 
        type="text"/>
      
      <button>修正</button>
      <h2>CurrentStatus</h2>
      <div>
        Complete Incomplete
      </div>
      <h2>EditStatus</h2>
      <div>
        <button>完了</button>
        <button>未完了</button>
        <button>削除</button>
      </div>
    </>
  )
}
