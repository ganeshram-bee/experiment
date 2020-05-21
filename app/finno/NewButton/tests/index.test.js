import React from 'react';
import renderer from 'react-test-renderer';
import HelloWorld from '..';

test('HelloWorld- custom props case:it works', () => {
  const tree = renderer.create(<HelloWorld text="HelloWorld" />).toJSON();
  expect(tree).toMatchSnapshot();
});

