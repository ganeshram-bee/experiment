import React from 'react';
import renderer from 'react-test-renderer';
import Button from '..';
const KBTheme = {
  primaryColour: '#fdd535',
  buttonTextColour: '#191919',
  secondaryBtnColour: '#191919',
};

const KZTheme = {
  primaryColour: '#4747b4',
  buttonTextColour: '#ffffff',
  secondaryBtnColour: '#000000',
};
test('Button- default props case:it works', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for secondary button and KB Theme :it works', () => {
  const tree = renderer
    .create(<Button themeData={KBTheme} secondaryBtn />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for secondary button and KZ Theme:it works', () => {
  const tree = renderer
    .create(<Button themeData={KZTheme} secondaryBtn />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for secondary button , BtnText and KB Theme :it works', () => {
  const tree = renderer
    .create(<Button themeData={KBTheme} BtnText="OK" secondaryBtn />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for secondary button and, BtnText KZ Theme:it works', () => {
  const tree = renderer
    .create(<Button themeData={KZTheme} BtnText="OK" secondaryBtn />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for disabled button , BtnText and KB Theme :it works', () => {
  const tree = renderer
    .create(<Button themeData={KBTheme} BtnText="OK" secondaryBtn disabled />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for disabled button and, BtnText KZ Theme:it works', () => {
  const tree = renderer
    .create(<Button themeData={KZTheme} BtnText="OK" secondaryBtn disabled />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for disabled button , BtnText and KB Theme :it works', () => {
  const tree = renderer
    .create(<Button themeData={KBTheme} BtnText="OK" disabled />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for disabled button and, BtnText KZ Theme:it works', () => {
  const tree = renderer
    .create(<Button themeData={KZTheme} BtnText="OK" disabled />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for noBorderRadius , BtnText and KB Theme :it works', () => {
  const tree = renderer
    .create(<Button themeData={KBTheme} BtnText="OK" noBorderRadius />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for noBorderRadius and, BtnText KZ Theme:it works', () => {
  const tree = renderer
    .create(<Button themeData={KZTheme} BtnText="OK" noBorderRadius />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for fontSize , BtnText and KB Theme :it works', () => {
  const tree = renderer
    .create(<Button themeData={KBTheme} BtnText="OK" fontSize="1.5em" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for fontSize and, BtnText KZ Theme:it works', () => {
  const tree = renderer
    .create(<Button themeData={KZTheme} BtnText="OK" fontSize="1.5em" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for marginBottom , BtnText and KB Theme :it works', () => {
  const tree = renderer
    .create(<Button themeData={KBTheme} BtnText="OK" marginBottom="10px" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for marginBottom and, BtnText KZ Theme:it works', () => {
  const tree = renderer
    .create(<Button themeData={KZTheme} BtnText="OK" marginBottom="10px" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for loading , BtnText and KB Theme :it works', () => {
  const tree = renderer
    .create(<Button themeData={KBTheme} BtnText="OK" loading />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for loading and, BtnText KZ Theme:it works', () => {
  const tree = renderer
    .create(<Button themeData={KZTheme} BtnText="OK" loading />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for isUPI , BtnText and KB Theme :it works', () => {
  const tree = renderer
    .create(<Button themeData={KBTheme} BtnText="OK" isUPI />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button- for isUPI and, BtnText KZ Theme:it works', () => {
  const tree = renderer
    .create(<Button themeData={KZTheme} BtnText="OK" isUPI />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
