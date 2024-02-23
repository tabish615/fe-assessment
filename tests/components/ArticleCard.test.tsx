// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'
import { ArticleCard } from '../../src/components/ArticleCard/index';


const data = {
  title: "AT&T Says Service Is Restored After Widespread Cellular Outage",
  abstract: "White House officials said the incident was under investigation, but it did not appear to be a cyberattack. Verizon and T-Mobile said their networks were operating normally.",
  media: [{
    ['media-metadata']: [{
      format: "Standard Thumbnail",
      height: 75,
      url: "https://static01.nyt.com/images/2024/02/22/multimedia/22xp-att-02/22xp-att-02-thumbStandard.jpg",
      width: 75,
    }]
  }
  ],
  published_date: "2024-02-22",
}
describe('Articles card component tests', () => {

  beforeEach(() => {
  });

  afterEach(() => {
  });

  it('should render correct info for article card', async () => {
    render(
      <ArticleCard article={data} />
    );
    const articleImg = screen.getByTestId('article-img');
    expect(articleImg).toBeInTheDocument();
    const articleTitle = screen.getByTestId('article-title');
    expect(articleTitle).toBeInTheDocument();
    expect(articleTitle).toHaveTextContent(data.title);
    const articleAbstract = screen.getByTestId('article-abstract');
    expect(articleAbstract).toBeInTheDocument();
    expect(articleAbstract).toHaveTextContent(data.abstract);
    const articlepublishDate = screen.getByTestId('article-publish-date');
    expect(articlepublishDate).toBeInTheDocument();
    expect(articlepublishDate).toHaveTextContent(data.published_date);
  });

});