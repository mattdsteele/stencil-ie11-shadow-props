import { TestWindow } from '@stencil/core/testing';
import { Ie11SplitStyles } from './ie11-split-styles';

describe('ie11-split-styles', () => {
  it('should build', () => {
    expect(new Ie11SplitStyles()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLIe11SplitStylesElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Ie11SplitStyles],
        html: '<ie11-split-styles></ie11-split-styles>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
