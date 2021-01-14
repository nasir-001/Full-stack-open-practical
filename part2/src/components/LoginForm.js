import React from 'react'
import PropTypes from 'prop-types'

const loginForm = ({
    handleSubmit,
    handleUsernameChange,
    hanldePasswordChange,
    username,
    password
    }) => {
    
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    username
                    <input
                    type="text"
                    id="username"
                    value={username}
                    name="Username"
                    onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    password
                    <input
                    type="password"
                    id="password"
                    value={password}
                    name="Password"
                    onChange={hanldePasswordChange}
                    />
                </div>
                <button id="login-button" type="submit">login</button>
            </form>
        </div>
    )
          
}

loginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    hanldePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default loginForm