const Toggle = (props) => {
  return (
    <div>
       {props.toggle ? 
       <div> 
       <div> {props.children}</div>
       <button onClick={() => handleToggle()}>cancel</button> 
       </div>
        :
        <div> 
            <button onClick={() => props.handleToggle()}>MakeBlog</button>
        </div>
    
    
    }
    </div>
  )
}

export default Toggle
