import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'font-awesome',
  styleUrl: 'font-awesome.css',
  shadow: true,
})
export class FontAwesome {
  @Prop() iconClass: string

  render() {
    return (
      <Host>
        <i class={this.iconClass}></i>
      </Host>
    );
  }

}
