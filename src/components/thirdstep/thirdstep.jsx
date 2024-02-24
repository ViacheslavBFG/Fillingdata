import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FamDiv, Pthird } from './thirdstepStyle';
import { useCheckboxContext } from '../CheckboxContext';
import {
  BtnDivTwo,
  LabelStyle,
  StyledCheckbox,
} from 'components/secondstep/secondstepStyle';
import { BtnStyle, MainDiv } from 'components/main/mainStyle';
import { useTranslation } from 'react-i18next';

const ThirdStep = () => {
  const { selectedOption, setSelectedOption } = useCheckboxContext();
  const [selectedOptionRadio, setSelectedOptionRadio] = useState('');

  const handleMix = event => {
    handleRadio(event);
    handleOptionChange(event);
  };
  const handleRadio = e => {
    setSelectedOptionRadio(e.target.value);
  };

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  };

  const { t } = useTranslation();

  return (
    <MainDiv>
      <FamDiv>
        <Pthird>{t('information')}</Pthird>
        <LabelStyle>
          <StyledCheckbox
            type="radio"
            name="option3"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleMix}
          />
          {t('stepByStep')}
        </LabelStyle>
        <LabelStyle>
          <StyledCheckbox
            type="radio"
            name="option3"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleMix}
          />
          {t('accountantHelp')}
        </LabelStyle>
      </FamDiv>

      <BtnDivTwo>
        <Link to={'/secondstep'}>
          <BtnStyle>{t('secondstep.previous')}</BtnStyle>
        </Link>
        <Link to={'/finalstep'}>
          <BtnStyle disabled={!selectedOptionRadio}>
            {t('main.button.next')}
          </BtnStyle>
        </Link>
      </BtnDivTwo>
    </MainDiv>
  );
};

export default ThirdStep;
