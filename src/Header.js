import React from 'react'
import "./index.css"


const Header = ({inputValue,inputHandler,submitHandler}) => {

  return (
    <div className='row'>
      <h1 className='heading'>What's the Plan for Today?</h1>
      <img src="logo.svg" className="rounded mx-auto d-block logo" alt="todo-img"></img>
      <div className='row mx-auto mb-3 mt-3'>
        <input className='new-todo col-md-5' placeholder='✍️  Add your TODO Task' value={inputValue} onChange = {inputHandler}></input> 
        <button type='submit' className='col-md-1 btn-submit' onClick={submitHandler}>ADD TODO</button>
      </div>
    </div>
  )
}

export default Header