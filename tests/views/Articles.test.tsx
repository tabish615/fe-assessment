// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'
import { Articles } from './../../src/view/Articles/Articles';

describe('Articles component tests', () => {

  beforeEach(() => {
    // write someting before each test
  });

  afterEach(() => {
  });

  it('should rendor Articles title', async () => {
    render(
      <Articles />
    );
    const articleTitle = screen.getByTestId('article-title-id');
    expect(articleTitle).toBeInTheDocument();
    expect(articleTitle).toHaveTextContent('NY Times Most Popular Articles');
  });

});