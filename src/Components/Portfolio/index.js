import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Span,
  Image,
  ImageWrapper,
  Overlay,
  OverlaySpan,
  PortfolioItem,
  PortfolioList,
  PortfolioSection,
  PortfolioTitle,
} from './style.js';
const Portfolio = () => {
  const [Images, SetImages] = useState([]);

  useEffect(() => {
    axios.get('js/data.json').then((res) => SetImages(res.data.portfolio));
  }, []);
  const portfolioImages = Images.map((item) => {
    return (
      <ImageWrapper key={item.id}>
        <Image src={item.image} alt="" />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </ImageWrapper>
    );
  });
  return (
    <PortfolioSection>
      <PortfolioTitle>
        <Span>My</Span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div className="box">{portfolioImages}</div>
    </PortfolioSection>
  );
};

export default Portfolio;
