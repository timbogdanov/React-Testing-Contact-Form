import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

test('test if firstname placeholder is Edd', () => {
  const { getByPlaceholderText } = render(<ContactForm />);
  expect(getByPlaceholderText('Edd'));
});

test('test if lastname placeholder is Burke', () => {
  const { getByPlaceholderText } = render(<ContactForm />);
  expect(getByPlaceholderText('Burke'));
});

test('test if email placeholder is bluebill1049@hotmail.com', () => {
  const { getByPlaceholderText } = render(<ContactForm />);
  expect(getByPlaceholderText().toggleAttribute('bluebill1049@hotmail.com'));
});

test('test if firstname label is firstName', () => {
  const { getByLabelText } = render(<ContactForm />);
  expect(getByLabelText('firstName'));
});

test('test if lastname label is lastName', () => {
  const { getByLabelText } = render(<ContactForm />);
  expect(getByLabelText('lastName'));
});

test('test if email label is email', () => {
  const { getByLabelText } = render(<ContactForm />);
  expect(getByLabelText('email'));
});

test('test submit', () => {
  const { findByTestId } = render(<ContactForm />);
  expect(findByTestId('submit'));
});
