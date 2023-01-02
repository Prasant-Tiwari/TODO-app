import React from "react";
import "./index.css"
import Header from "./Header";
import Main from "./Main";

function getLocalData(){
  const data = localStorage.getItem("mytodolist")
  if(data){
    return JSON.parse(data)
  }else{
    return []
  }
}

function App() {
  const [tasks,updateTasks] = React.useState(getLocalData())
  const [inputValue,setInputValue] = React.useState("")
  const [isEditItem,updateIsEditItem] = React.useState("")
  function inputHandler(value){
    setInputValue(value)
    
  }
  function submitHandler(){
    if(!inputValue){
      alert ("Please Enter Your Task")
    }
    else if(inputValue && isEditItem){
      updateTasks(tasks.map((task)=>{
        if(task.id === isEditItem){
          return {...task,name: inputValue}
        }
        return task
      }))
      setInputValue("")
    }
      else{
      const myNewItems = {
        id: new Date().getTime().toString(),
        name:inputValue
      }
      updateTasks((prev)=>{
        return [...prev,myNewItems]
       })
       setInputValue("")
      }
    }
  

  // Edit Function ------------------------------------------------- 
  function editHandler(id){
    const todo_edit = tasks.find((task)=>{
      return task.id === id
    })
    setInputValue(todo_edit.name)
    updateIsEditItem(id)
    
  }



  // Delete function --------------------------------------------------
  function deleteHandler(id){
   const updatedItems = tasks.filter((task)=>{
    return task.id !==id
   })
   updateTasks(updatedItems)
  }

  const main = tasks.map((task)=>{
    return <Main key={task.id} value = {task.name} edit = {()=>editHandler(task.id)} delet = {()=>deleteHandler(task.id)} />
  })

  // Adding Local storage ----------------------------- 
  React.useEffect(()=>{
    localStorage.setItem("mytodolist", JSON.stringify(tasks))
  },[tasks])
 
  return (
    <div className="container">
      <Header inputValue = {inputValue} inputHandler={(e)=>inputHandler(e.target.value)}  submitHandler = {()=>submitHandler()}/>
      {main}
    </div>
  );
}

export default App;
