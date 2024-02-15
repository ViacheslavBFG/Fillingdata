import React from 'react';
import { Link } from 'react-router-dom';
import {
  MainDiv,
  NameDiv,
  Span,
  EmailDiv,
  SpanE,
  BtnDiv,
  BtnStyle,
  InputStyle,
} from './mainStyle';
import { Pthird } from 'components/thirdstep/thirdstepStyle';

const main = () => {
  return (
    <MainDiv>
      <h2>Calculation Form</h2>
      <Pthird>
        Please enter your personal information for the calculation of the cost
      </Pthird>
      <hr />
      <NameDiv>
        <label>
          <Span>First Name</Span>
          <InputStyle type="text" placeholder="Bruce " />
        </label>
        <label>
          <Span>Last Name</Span>
          <InputStyle type="text" placeholder="Wayne" />
        </label>
      </NameDiv>
      <EmailDiv>
        <label>
          <SpanE>Email</SpanE>
          <InputStyle type="text" placeholder="Batman@gmail.com" />
        </label>
      </EmailDiv>
      <BtnDiv>
        <Link to={'/secondstep'}>
          <BtnStyle>NEXT</BtnStyle>
        </Link>
      </BtnDiv>
    </MainDiv>
  );
};

export default main;
