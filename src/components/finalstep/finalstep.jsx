import { BtnStyle, HeaderTwo, MainDiv } from 'components/main/mainStyle';
import { BtnDivTwo } from 'components/secondstep/secondstepStyle';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCheckboxContext } from '../CheckboxContext';
import { AmountP } from './finalstepStyle';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
const Finalstep = () => {
  const { t } = useTranslation();
  const { selectedCheckboxes } = useCheckboxContext();

  const maxValue =
    selectedCheckboxes.length > 0 ? Math.max(...selectedCheckboxes) : 0;
  let lineTotalMessage = '';

  switch (maxValue) {
    case 75:
      lineTotalMessage = t('taxDeclarationZeroIncome');
      break;
    case 120:
      lineTotalMessage = t('taxDeclarationIndividuals');
      break;
    case 210:
      lineTotalMessage = t('taxDeclarationSelfEmployed');
      break;
    case 100:
      lineTotalMessage = t('taxDeclarationStudents');
      break;
    default:
      lineTotalMessage = '';
  }

  const { selectedOption } = useCheckboxContext();
  const additionalCost = selectedOption === 'option2' ? 50 : 0;

  const { selectedOptionProperty } = useCheckboxContext();
  const additionalCostProperty = selectedOptionProperty === 'option12' ? 75 : 0;
  const sum = maxValue + additionalCostProperty + additionalCost;

  return (
    <MainDiv>
      <HeaderTwo>{t('header')}</HeaderTwo>

      <div>
        <Table border={3}>
          <TableHead>
            <TableRow style={{ backgroundColor: '#f2f2f2' }}>
              <TableCell align="center">
                <b>{t('item')}</b>
              </TableCell>
              <TableCell align="center">
                <b>{t('price')}</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{lineTotalMessage}</TableCell>
              <TableCell align="center">{maxValue}</TableCell>
            </TableRow>
            {additionalCostProperty === 75 && (
              <TableRow>
                <TableCell>{t('reportingForeignAssets')}</TableCell>
                <TableCell align="center">{additionalCostProperty}</TableCell>
              </TableRow>
            )}
            {additionalCost === 50 && (
              <TableRow>
                <TableCell>{t('onlineMeetingAccountant')}</TableCell>
                <TableCell align="center">{additionalCost}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <AmountP>
        {t('totalPayable')} : {sum} $
      </AmountP>
      <p>{t('priceIncludes')}</p>

      <BtnDivTwo>
        <Link to={'/thirdstep'}>
          <BtnStyle>{t('secondstep.previous')}</BtnStyle>
        </Link>
        <Link to={'/finalstep'}>
          <BtnStyle>{t('placeOrder')}</BtnStyle>
        </Link>
      </BtnDivTwo>
    </MainDiv>
  );
};

export default Finalstep;
