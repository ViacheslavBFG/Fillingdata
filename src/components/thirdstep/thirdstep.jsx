import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FamDiv, Pthird } from './thirdstepStyle';
import { useCheckboxContext } from '../CheckboxContext';
import { BtnDivTwo } from 'components/secondstep/secondstepStyle';
import { BtnStyle, MainDiv } from 'components/main/mainStyle';
import { useTranslation } from 'react-i18next';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { grey, red } from '@mui/material/colors';

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
        <RadioGroup>
          <FormControlLabel
            label={t('stepByStep')}
            control={
              <Radio
                size="small"
                sx={{
                  color: grey[800],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                }}
              />
            }
            type="radio"
            name="option3"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleMix}
          />

          <FormControlLabel
            label={t('accountantHelp')}
            control={
              <Radio
                size="small"
                sx={{
                  color: grey[800],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                }}
              />
            }
            type="radio"
            name="option3"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleMix}
          />
        </RadioGroup>
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
