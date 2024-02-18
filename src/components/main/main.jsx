import React from 'react';
import { Link } from 'react-router-dom';
import { MainDiv, NameDiv, EmailDiv, BtnDiv, BtnStyle } from './mainStyle';
import { Pthird } from 'components/thirdstep/thirdstepStyle';
import { TextField } from '@mui/material';

const main = () => {
  return (
    <MainDiv>
      <h2>Calculation Form</h2>
      <Pthird>
        Please enter your personal information for the calculation of the cost
      </Pthird>
      <hr />
      <NameDiv>
        <TextField
          id="outlined-basic"
          label="First name"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Last name"
          variant="outlined"
          size="small"
        />
      </NameDiv>
      <EmailDiv>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
        />
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
