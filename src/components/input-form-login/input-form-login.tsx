import { Component, Host, h, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'input-form-login',
  styleUrl: 'input-form-login.css',
  shadow: true,
})
export class InputFormLogin {
  @Prop() icon: string
  @Prop() inputTitle: string
  @Prop() type: string
  @Prop() two: boolean = false
  @State() inputFocus: boolean = false
  @State() inputValue: string = ''

  @Listen('focus')
  public handleFocus() {
    this.inputFocus = true
  }

  @Listen('blur')
  public handleBlur() {
    if(this.inputValue === '') {
      this.inputFocus = false
    }
  }

  public handleChange = (event) => {
    this.inputValue = event.target.value
  }

  render() {
    return (
      <Host>
        <div
          class={`input-div ${this.two ? 'two' : 'one'} ${this.inputFocus ? 'focus' : ''}`}
        >
          <div class="i">
            <font-awesome iconClass={this.icon}></font-awesome>
          </div>
          <div>
            <h5>{this.inputTitle}</h5>
            <input
              onChange={this.handleChange}
              type={this.type}
              class="input"
              value={this.inputValue}
            />
          </div>
        </div>
      </Host>
    );
  }
}
