import { BtnStyle, MainDiv } from 'components/main/mainStyle';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useCheckboxContext } from '../CheckboxContext';
import {
  IncomeDiv,
  PropertyDiv,
  BtnDivTwo,
  DivChoose,
} from './secondstepStyle';
import { Pthird } from 'components/thirdstep/thirdstepStyle';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { grey, red } from '@mui/material/colors';
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
          <RadioGroup>
            <FormControlLabel
              label={t('secondstep.yes')}
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
              id="option1"
              type="radio"
              name="options"
              value="option1"
              onChange={comboChangeHandler}
            />

            <FormControlLabel
              label={t('secondstep.no')}
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
              id="option2"
              type="radio"
              name="options"
              value="option2"
              onChange={comboChangeHandler}
            />
          </RadioGroup>
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
        <FormControlLabel
          label={t('secondstep.noIncome')}
          control={
            <Checkbox
              size="small"
              sx={{
                color: grey[800],
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
            />
          }
          type="checkbox"
          value="75"
          onChange={handleCheckboxChange}
        />{' '}
        <FormControlLabel
          label={t('secondstep.employed')}
          control={
            <Checkbox
              size="small"
              sx={{
                color: grey[800],
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
            />
          }
          type="checkbox"
          value="120"
          onChange={handleCheckboxChange}
        />
        <FormControlLabel
          label={t('secondstep.contractor')}
          control={
            <Checkbox
              size="small"
              sx={{
                color: grey[800],
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
            />
          }
          type="checkbox"
          value="210"
          onChange={handleCheckboxChange}
        />
        <FormControlLabel
          label={t('secondstep.outsideIncome')}
          control={
            <Checkbox
              size="small"
              sx={{
                color: grey[800],
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
            />
          }
          type="checkbox"
          value="210"
          onChange={handleCheckboxChange}
        />{' '}
        <FormControlLabel
          label={t('secondstep.rentalIncome')}
          control={
            <Checkbox
              size="small"
              sx={{
                color: grey[800],
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
            />
          }
          type="checkbox"
          value="210"
          onChange={handleCheckboxChange}
        />{' '}
        <FormControlLabel
          label={t('secondstep.pension')}
          control={
            <Checkbox
              size="small"
              sx={{
                color: grey[800],
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
            />
          }
          type="checkbox"
          value="120"
          onChange={handleCheckboxChange}
        />{' '}
        <FormControlLabel
          label={t('secondstep.investmentIncome')}
          control={
            <Checkbox
              size="small"
              sx={{
                color: grey[800],
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
            />
          }
          type="checkbox"
          value="210"
          onChange={handleCheckboxChange}
        />{' '}
        <FormControlLabel
          label={t('secondstep.hobbyIncome')}
          control={
            <Checkbox
              size="small"
              sx={{
                color: grey[800],
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
            />
          }
          type="checkbox"
          value="120"
          onChange={handleCheckboxChange}
        />
        <FormControlLabel
          label={t('secondstep.selfEmployed')}
          control={
            <Checkbox
              size="small"
              sx={{
                color: grey[800],
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
            />
          }
          type="checkbox"
          value="210"
          onChange={handleCheckboxChange}
        />
        <FormControlLabel
          label={t('secondstep.studentScholarship')}
          control={
            <Checkbox
              size="small"
              sx={{
                color: grey[800],
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
            />
          }
          type="checkbox"
          value="100"
          onChange={handleCheckboxChange}
        />
      </IncomeDiv>

      <PropertyDiv>
        <Pthird>{t('secondstep.question4')}</Pthird>
        <RadioGroup>
          <FormControlLabel
            label={t('secondstep.propertyOption1')}
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
            id="option0"
            type="radio"
            name="optionS"
            value="option10"
            checked={selectedOptionProperty === 'option10'}
            onChange={comboChangeHandler}
          />

          <FormControlLabel
            label={t('secondstep.propertyOption2')}
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
            id="option100"
            type="radio"
            name="optionS"
            value="option11"
            checked={selectedOptionProperty === 'option11'}
            onChange={comboChangeHandler}
          />

          <FormControlLabel
            label={t('secondstep.propertyOption3')}
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
            id="option250"
            type="radio"
            name="optionS"
            value="option12"
            checked={selectedOptionProperty === 'option12'}
            onChange={comboChangeHandler}
          />
        </RadioGroup>
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
