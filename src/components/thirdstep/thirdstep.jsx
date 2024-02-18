import React from 'react';
import { Link } from 'react-router-dom';
import { FamDiv, Pthird } from './thirdstepStyle';
import { useCheckboxContext } from '../CheckboxContext';
import {
  BtnDivTwo,
  StyledCheckbox,
} from 'components/secondstep/secondstepStyle';
import { BtnStyle, MainDiv } from 'components/main/mainStyle';

const ThirdStep = () => {
  const { selectedOption, setSelectedOption } = useCheckboxContext();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <MainDiv>
      <FamDiv>
        <Pthird>
          2. In order for us to fill out your tax return, we need to receive
          information from you, including: forms from the place of employment,
          photocopies of payment receipts, a list of all sources of income,
          family information, etc.
        </Pthird>
        <label>
          <StyledCheckbox
            type="radio"
            name="option3"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
   
          />
          2,1 I will fill out the step-by-step form myself (it will be sent to
          your e-mail after payment, the approximate filling time is 1 hour per
          person if you have all the necessary documents)
        </label>
        <label>
          <StyledCheckbox
            type="radio"
            name="option3"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
   
          />
          2,2 I need help from an accountant in filling out (this option adds
          $50 to the cost of one declaration)
        </label>
      </FamDiv>

     
      <BtnDivTwo>
        <Link to={'/secondstep'}>
          <BtnStyle>PREVIOUS</BtnStyle>
        </Link>
        <Link to={'/finalstep'}>
          <BtnStyle>NEXT</BtnStyle>
        </Link>
      </BtnDivTwo>
    </MainDiv>
  );
};

export default ThirdStep;
