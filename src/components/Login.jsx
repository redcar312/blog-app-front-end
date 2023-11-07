const Login = ({ username, setUsername, password, setPassword, handleLogin }) => {
    return(
        <form onSubmit={handleLogin}>
            <div>
                <label for="username">Username</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}></input>
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
            </div>

            <button type="submit">login</button>
        </form>
    )

}

export default Login