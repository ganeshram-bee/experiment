import React from 'react';
import { render } from 'react-testing-library';
import { generateImage } from 'jsdom-screenshot';

import CautionInfo from '../CautionInfo';

describe('<CautionInfo />', () => {
  
  // it('has no visual regressions', async () => {
  //   render(<CautionInfo />);

  //   const screenshot = await generateImage();
  //   expect(screenshot).toMatchImageSnapshot();
  // });

  it('should match the snapshot', () => {
    const { container } = render(<CautionInfo />);
    expect(container.firstChild).toMatchSnapshot();
  });

  // it('should match the snapshot', () => {
  //   const renderedComponent = renderer.create(<CautionInfo />).toJSON();
  //   expect(renderedComponent).toMatchSnapshot();
  // });

});
