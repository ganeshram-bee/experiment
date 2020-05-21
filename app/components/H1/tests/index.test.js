import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import { generateImage } from 'jsdom-screenshot';

import H1 from '../index';

describe('<H1 />', () => {
  it('has no visual regressions', async () => {
    render(<H1 />);

    const screenshot = await generateImage();
    expect(screenshot).toMatchImageSnapshot();
  });

  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(<H1 />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<H1 id={id} />);
    expect(container.querySelector('h1').id).toEqual(id);
  });

  // it('should render its text', () => {
  //   const children = 'Text';
  //   const { container, queryByText } = render(<H1> {children} </H1>);
  //   const { childNodes } = container.querySelector('h1');
  //   expect(childNodes).toHaveLength(1);
  //   expect(queryByText(children)).not.toBeNull();
  // });
});
