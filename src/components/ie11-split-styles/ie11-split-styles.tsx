import { Component } from '@stencil/core';

@Component({
  tag: 'ie-styles',
  styleUrls: {
    foo: 'foo.css',
    bar: 'bar.css'
  }
})
export class Ie11SplitStyles {
  render() {
    return (
      <div>
        <p>Hello Ie11SplitStyles!</p>
      </div>
    );
  }
}
