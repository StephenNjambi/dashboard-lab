import React from 'react'

const login = () => {
  return (
    <div className="container-fluid">
        <div className="row">
        {/* Left Section - Login Form */}
         {/* Right Section - Additional Information or Imagery */}
         <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            {/* Add your additional content or imagery here */}
            <h2>Welcome to NSSF (The National Social Security Funds)</h2>
            </div>
        </div>
        
        <div className="col-lg-6 bg-primary text-white">
            <div className="d-flex justify-content-center align-items-center vh-100">
            <div>
                <h2 className="text-center mb-4">Login</h2>
                <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-light btn-block">Login</button>
                </form>
            </div>
            </div>
        </div>

       
        </div>
    </div>
  )
}

export default login
