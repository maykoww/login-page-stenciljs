import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <Host>
        <div class="app-home">
          <img class="wave" src="/assets/img/wave.png" alt="" />
          <div class="container">
            <div class="img">
              <img src="/assets/img/bg.svg" alt="" />
            </div>
            <div class="login-container">
              <form>
                <img class="avatar" src="/assets/img/avatar.svg" alt="" />
                <h2>Welcome</h2>
                <input-form-login
                  icon="fas fa-user"
                  inputTitle="Username"
                  type="text"
                ></input-form-login>

                <input-form-login
                  icon="fas fa-lock"
                  inputTitle="Password"
                  type="password"
                  two={true}></input-form-login>

                <a href="#">Forgot Password ?</a>
                <input type="submit" class="btn" value="Login" />
              </form>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
