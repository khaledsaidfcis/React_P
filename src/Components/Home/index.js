import React from 'react';
import {
  HomeBtn,
  HomeDesc,
  HomeInfo,
  HomeInformation,
  HomeSection,
  HomeTitle,
  Span,
} from './style.js';
const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Khaled Said</HomeTitle>
          <HomeInfo>.Net Developer</HomeInfo>
          <HomeDesc>
            Iam a professional <Span>.Net Developer</Span> and Front-End
            Developer creating modern and resposive websites. Let us work
            together. Thank you.
          </HomeDesc>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
};

export default Home;
