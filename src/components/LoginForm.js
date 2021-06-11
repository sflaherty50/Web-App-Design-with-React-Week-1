import React from 'react';
export class LoginForm extends React.Component {
    static displayName = LoginForm.name;

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', errorMessage: '', successMessage: '' }
        this.reset = this.reset.bind(this);
    }

    setValue(e) {
        let id = e.target.id;
        let value = e.target.value;
        let username = this.state.username;
        if (value === undefined || value === '')
            return;
        if (id === 'username') {
            username = value.toUpperCase();
            this.setState({
                username: username
            })
        }
        else {
            this.setState({
                password: e.target.value
            })
        }
    }
    submit(e) {

        if (this.state.username === undefined || this.state.username === ''
            || this.state.password === undefined || this.state.password === '') {
            this.setState({
                errorMessage: 'Enter both the field details'
            })
        }
        else {
            this.setState({
                successMessage: 'Welcome User'
            })
        }
    }
    reset() {
        this.setState({
            username: '',
            password: '',
            successMessage: '',
            errorMessage: '',
        })
    }

    render() {
        return (
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <form>
                    <div className="form-group text-left">
                        <label htmlFor="username">User Name</label>
                        <input type="text"
                            className="form-control"
                            id="username"
                            aria-describedby="emailHelp"
                            placeholder="User Name"
                            value={this.state.username} onChange={(e) => this.setValue(e)}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={this.state.password} onChange={(e) => this.setValue(e)}
                        />
                    </div>
                    <div className="form-check">
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={(e) => this.submit(e)}
                    >Submit</button> &nbsp;
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.reset}
                    >Reset</button>
                    <div className="form-group text-left">
                        <p>{this.state.errorMessage}</p>
                        <p>{this.state.successMessage}</p>
                    </div>
                </form>

            </div>



        )
    }
}