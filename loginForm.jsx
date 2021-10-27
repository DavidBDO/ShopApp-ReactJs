import React, { Component } from 'react';
class LoginForm extends Component {
    // state = {  }
    handleSubmit = e =>
    {
        e.preventDefault();
    }
    render() { 
        return ( 
            <div>
            <h1>login Form</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">User Name</label>
                    <input type="text" className="form-control" id='username'/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="text" className="form-control" id='password'/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
            </div>
            );
    }
}
 
export default LoginForm;