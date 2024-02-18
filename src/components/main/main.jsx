import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MainDiv,
  NameDiv,
  EmailDiv,
  BtnDiv,
  BtnStyle,
  HeaderTwo,
} from './mainStyle';
import { Pthird } from 'components/thirdstep/thirdstepStyle';
import { TextField } from '@mui/material';

const Main = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [formValid, setFormValid] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const validateForm = () => {
    return (
      firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== ''
    );
  };

  const handleFormValidation = () => {
    setFormValid(validateForm());
  };

  const handleInputBlur = () => {
    handleFormValidation();
  };

  return (
    <MainDiv>
      <HeaderTwo>Calculation Form</HeaderTwo>
      <Pthird>
        Please enter your personal information for the calculation of the cost
      </Pthird>
      <hr />
      <NameDiv>
        <TextField
          id="outlined-basic"
          name="firstName"
          label="First name"
          variant="outlined"
          size="small"
          value={firstName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          name="lastName"
          label="Last name"
          variant="outlined"
          size="small"
          value={lastName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          fullWidth
        />
      </NameDiv>
      <EmailDiv>
        <TextField
          id="outlined-basic"
          name="email"
          label="Email"
          variant="outlined"
          size="small"
          value={email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          fullWidth
        />
      </EmailDiv>
      <BtnDiv>
        <Link to={formValid ? '/secondstep' : '#'}>
          <BtnStyle disabled={!formValid}>NEXT</BtnStyle>
        </Link>
      </BtnDiv>
    </MainDiv>
  );
};

export default Main;
