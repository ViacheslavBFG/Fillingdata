import { BtnStyle, InputStyle, MainDiv } from 'components/main/mainStyle';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useCheckboxContext } from '../CheckboxContext';
import {
  IncomeDiv,
  PropertyDiv,
  BtnDivTwo,
  StyledCheckbox,
  DivChoose,
} from './secondstepStyle';
import { Pthird } from 'components/thirdstep/thirdstepStyle';
const Secondstep = () => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const { selectedCheckboxes, setSelectedCheckboxes } = useCheckboxContext();
  const handleCheckboxChange = event => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCheckboxes(prev => [...prev, value]);
    } else {
      setSelectedCheckboxes(prev => prev.filter(item => item !== value));
    }
  };

  const handleOptionChange = event => {
    if (event.target.value === 'option1') {
      setShowAdditionalInfo(true);
    } else {
      setShowAdditionalInfo(false);
    }
  };

  return (
    <MainDiv>
      <div>
        <Pthird>
          1. Do you want to submit a declaration together with other members of
          your family?
        </Pthird>
        <DivChoose>
          <label htmlFor="option1">
            <StyledCheckbox
              id="option1"
              type="radio"
              name="options"
              value="option1"
              onChange={handleOptionChange}
            />
            Yes
          </label>

          <label htmlFor="option2">
            <StyledCheckbox
              id="option2"
              type="radio"
              name="options"
              value="option2"
              onChange={handleOptionChange}
            />
            No
          </label>
        </DivChoose>
      </div>

      {showAdditionalInfo && (
        <div>
          <Pthird>
            1,1 How many adults will submit the declaration (including you)?
          </Pthird>
          <InputStyle type="number" />
        </div>
      )}
      <IncomeDiv>
        <Pthird>1,2 Select one or more types of income </Pthird>

        <label>
          <StyledCheckbox
            type="checkbox"
            value="75"
            onChange={handleCheckboxChange}
          />{' '}
          I have no income (or I only have payments from the government)
        </label>

        <label>
          <StyledCheckbox
            type="checkbox"
            value="120"
            onChange={handleCheckboxChange}
          />
          Emloyed
        </label>

        <label>
          <StyledCheckbox
            type="checkbox"
            value="210"
            onChange={handleCheckboxChange}
          />
          Contractor (the employer does not pay taxes for me)
        </label>

        <label>
          <StyledCheckbox
            type="checkbox"
            value="210"
            onChange={handleCheckboxChange}
          />{' '}
          I have income outside of Canada (for example, from Ukraine)
        </label>

        <label>
          <StyledCheckbox
            type="checkbox"
            value="210"
            onChange={handleCheckboxChange}
          />{' '}
          I have income from renting a house
        </label>

        <label>
          <StyledCheckbox
            type="checkbox"
            value="120"
            onChange={handleCheckboxChange}
          />{' '}
          I receive a pension in Canada
        </label>

        <label>
          <StyledCheckbox
            type="checkbox"
            value="210"
            onChange={handleCheckboxChange}
          />{' '}
          I have income from investments (deposit, cryptocurrencies, shares,
          dividends, etc.)
        </label>

        <label>
          <StyledCheckbox
            type="checkbox"
            value="120"
            onChange={handleCheckboxChange}
          />
          Have a hobby or have a small additional income as self-employed (it
          was not the main income and you are ready to pay tax on the entire
          amount, without deducting expenses)
        </label>

        <label>
          <StyledCheckbox
            type="checkbox"
            value="210"
            onChange={handleCheckboxChange}
          />
          Self-employed (including food delivery, taxi, etc. - it is possible to
          deduct expenses and pay tax only on net income)
        </label>
        <label>
          <StyledCheckbox
            type="checkbox"
            value="100"
            onChange={handleCheckboxChange}
          />
          I am a student and I have a scholarship
        </label>
      </IncomeDiv>
      <PropertyDiv>
        <Pthird>
          1,3 Select the total value of property that you have outside of Canada
          (bank accounts, real estate, cars, shares, securities, etc.)
        </Pthird>
        <label htmlFor="option3">
          <StyledCheckbox type="radio" id="option3" name="optionS" />
          From 0 to $100,000
        </label>

        <label htmlFor="option4">
          <StyledCheckbox type="radio" id="option4" name="optionS" />
          From $100,000 to $250,000
        </label>

        <label htmlFor="option5">
          <StyledCheckbox type="radio" id="option5" name="optionS" />
          $250,000 or more
        </label>
      </PropertyDiv>
      <BtnDivTwo>
        <Link to={'/'}>
          <BtnStyle>PREVIOUS</BtnStyle>
        </Link>
        <Link to={'/thirdstep'}>
          <BtnStyle>NEXT</BtnStyle>
        </Link>
      </BtnDivTwo>
    </MainDiv>
  );
};

export default Secondstep;
