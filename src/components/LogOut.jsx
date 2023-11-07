const LogOut = ({ name , handleLogOut }) => {
    return(
        <div>

            <p>{name}</p>
            <button onClick={() => handleLogOut()}>LogOut</button>
        </div>
    )

}


export default LogOut