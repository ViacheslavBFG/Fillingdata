import { BtnStyle, MainDiv } from 'components/main/mainStyle';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useCheckboxContext } from '../CheckboxContext';
import {
  IncomeDiv,
  PropertyDiv,
  BtnDivTwo,
  StyledCheckbox,
  DivChoose,
  LabelStyle,
} from './secondstepStyle';
import { Pthird } from 'components/thirdstep/thirdstepStyle';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
const Secondstep = () => {
  //
  const [selectedOption, setSelectedOption] = useState('');

  //
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const {
    setSelectedCheckboxes,
    selectedOptionProperty,
    setSelectedOptionProperty,
  } = useCheckboxContext();
  const handleCheckboxChange = event => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCheckboxes(prev => [...prev, value]);
    } else {
      setSelectedCheckboxes(prev => prev.filter(item => item !== value));
    }
  };

  const comboChangeHandler = event => {
    handleOptionChange(event);
    handleRadioChange(event);
    handleOptionChangeProperty(event);
  };

  const handleOptionChange = event => {
    if (event.target.value === 'option1') {
      setShowAdditionalInfo(true);
    } else {
      setShowAdditionalInfo(false);
    }
  };

  const handleRadioChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChangeProperty = e => {
    setSelectedOptionProperty(e.target.value);
  };
  const { t } = useTranslation();
  return (
    <MainDiv>
      <div>
        <Pthird>{t('secondstep.question1')}</Pthird>
        <DivChoose>
          <LabelStyle htmlFor="option1">
            <StyledCheckbox
              id="option1"
              type="radio"
              name="options"
              value="option1"
              onChange={comboChangeHandler}
            />
            {t('secondstep.yes')}
          </LabelStyle>

          <LabelStyle htmlFor="option2">
            <StyledCheckbox
              id="option2"
              type="radio"
              name="options"
              value="option2"
              onChange={comboChangeHandler}
            />
            {t('secondstep.no')}
          </LabelStyle>
        </DivChoose>
      </div>

      {showAdditionalInfo && (
        <div>
          <Pthird>{t('secondstep.question2')}</Pthird>
          <TextField
            type="number"
            id="outlined-basic"
            label={t('secondstep.maxAdults')}
            variant="outlined"
            size="small"
          />
        </div>
      )}
      <IncomeDiv>
        <Pthird>{t('secondstep.question3')}</Pthird>

        <LabelStyle>
          <StyledCheckbox
            type="checkbox"
            value="75"
            onChange={handleCheckboxChange}
          />{' '}
          {t('secondstep.noIncome')}
        </LabelStyle>

        <LabelStyle>
          <StyledCheckbox
            type="checkbox"
            value="120"
            onChange={handleCheckboxChange}
          />
          {t('secondstep.employed')}
        </LabelStyle>

        <LabelStyle>
          <StyledCheckbox
            type="checkbox"
            value="210"
            onChange={handleCheckboxChange}
          />
          {t('secondstep.contractor')}
        </LabelStyle>

        <LabelStyle>
          <StyledCheckbox
            type="checkbox"
            value="210"
            onChange={handleCheckboxChange}
          />{' '}
          {t('secondstep.outsideIncome')}
        </LabelStyle>

        <LabelStyle>
          <StyledCheckbox
            type="checkbox"
            value="210"
            onChange={handleCheckboxChange}
          />{' '}
          {t('secondstep.rentalIncome')}
        </LabelStyle>

        <LabelStyle>
          <StyledCheckbox
            type="checkbox"
            value="120"
            onChange={handleCheckboxChange}
          />{' '}
          {t('secondstep.pension')}
        </LabelStyle>

        <LabelStyle>
          <StyledCheckbox
            type="checkbox"
            value="210"
            onChange={handleCheckboxChange}
          />{' '}
          {t('secondstep.investmentIncome')}
        </LabelStyle>

        <LabelStyle>
          <StyledCheckbox
            type="checkbox"
            value="120"
            onChange={handleCheckboxChange}
          />
          {t('secondstep.hobbyIncome')}
        </LabelStyle>

        <LabelStyle>
          <StyledCheckbox
            type="checkbox"
            value="210"
            onChange={handleCheckboxChange}
          />
          {t('secondstep.selfEmployed')}
        </LabelStyle>
        <LabelStyle>
          <StyledCheckbox
            type="checkbox"
            value="100"
            onChange={handleCheckboxChange}
          />
          {t('secondstep.studentScholarship')}
        </LabelStyle>
      </IncomeDiv>
      <PropertyDiv>
        <Pthird>{t('secondstep.question4')}</Pthird>
        <LabelStyle htmlFor="option0">
          <StyledCheckbox
            id="option0"
            type="radio"
            name="optionS"
            value="option10"
            checked={selectedOptionProperty === 'option10'}
            onChange={comboChangeHandler}
          />
          {t('secondstep.propertyOption1')}
        </LabelStyle>

        <LabelStyle htmlFor="option100">
          <StyledCheckbox
            id="option100"
            type="radio"
            name="optionS"
            value="option11"
            checked={selectedOptionProperty === 'option11'}
            onChange={comboChangeHandler}
          />
          {t('secondstep.propertyOption2')}
        </LabelStyle>

        <LabelStyle htmlFor="option250">
          <StyledCheckbox
            id="option250"
            type="radio"
            name="optionS"
            value="option12"
            checked={selectedOptionProperty === 'option12'}
            onChange={comboChangeHandler}
          />
          {t('secondstep.propertyOption3')}
        </LabelStyle>
      </PropertyDiv>
      <BtnDivTwo>
        <Link to={'/'}>
          <BtnStyle>{t('secondstep.previous')}</BtnStyle>
        </Link>
        <Link to={'/thirdstep'}>
          <BtnStyle disabled={!selectedOption}>
            {t('main.button.next')}
          </BtnStyle>
        </Link>
      </BtnDivTwo>
    </MainDiv>
  );
};

export default Secondstep;
