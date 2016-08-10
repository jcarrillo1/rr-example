import React, { Component } from 'react';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
	render() {
		return(
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<div className="box">
						<SignUpForm />
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp;