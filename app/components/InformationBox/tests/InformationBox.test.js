import React from 'react';
import { render } from 'react-testing-library';
import { generateImage } from 'jsdom-screenshot';

import InformationBox from '../InformationBox';

describe('<InformationBox />', () => {
  
  // it('has no visual regressions', async () => {
  //   render(<InformationBox />);

  //   const screenshot = await generateImage();
  //   expect(screenshot).toMatchImageSnapshot();
  // });

  it('should match the snapshot', () => {
  	const { container } = render(<InformationBox />);
    expect(container.firstChild).toMatchSnapshot();
  });

  // it('should match the snapshot', () => {
  //   const renderedComponent = renderer.create(<CautionInfo />).toJSON();
  //   expect(renderedComponent).toMatchSnapshot();
  // });

});
