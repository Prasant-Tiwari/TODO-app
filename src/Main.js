import React from 'react'
import "./index.css"

const Main = ({value,edit,delet}) => {
  return (
    <div className='row'>
        <div className='col-md-5 mine main-div'>
          <h6>{value}</h6>
          <div className='icons'>
          <i className="fa fa-pen-to-square icon1" onClick={edit}></i>
          <i className="fa fa-trash icon2 " onClick={delet}></i>
          </div>
        </div>
    </div>
  )
}

export default Main