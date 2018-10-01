import React from 'react';

class Register extends React.Component {

 
    render() {
        return (
<div>
<h4>Registration</h4>
  <div id="register-page" class="row">
    <div class="col s12 z-depth-6 card-panel">
      <form class="register-form">
        <div class="row margin">
          <div class="input-field col s12">
            <i class="mdi-social-person-outline prefix"></i>
            <input id="user_name" type="text" class="validate" />
            <label for="user_name" class="center-align">Username</label>
          </div>
        </div>
        <div class="row margin">
          <div class="input-field col s12">
            <i class="mdi-communication-email prefix"></i>
            <input id="user_email" type="email" class="validate" />
            <label for="user_email" class="center-align">Email</label>
          </div>
        </div>
        <div class="row margin">
          <div class="input-field col s12">
            <i class="mdi-action-lock-outline prefix"></i>
            <input id="user_passw" type="password" class="validate" />
            <label for="user_passw">Password</label>
          </div>
        </div>
        <div class="row margin">
          <div class="input-field col s12">
            <i class="mdi-action-lock-outline prefix"></i>
            <input id="confirm_pass" type="password" />
            <label for="confirm_pass">Re-type password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <a href="register.html" class="btn waves-effect waves-light col s12">Register Now</a>
          </div>
          <div class="input-field col s12">
            <p class="margin center medium-small sign-up">Already have an account?
              <a href="login.php">Login</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

);
      };
    }

    export default Register;