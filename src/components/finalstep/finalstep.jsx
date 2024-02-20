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
const Finalstep = () => {
  const { selectedCheckboxes } = useCheckboxContext();

  const maxValue =
    selectedCheckboxes.length > 0 ? Math.max(...selectedCheckboxes) : 0;
  let lineTotalMessage = '';

  switch (maxValue) {
    case 75:
      lineTotalMessage = 'Tax declaration with zero income';
      break;
    case 120:
      lineTotalMessage = 'Tax declaration for individuals';
      break;
    case 210:
      lineTotalMessage =
        'Tax declaration for self-employed individuals and those with other types of income';
      break;
    case 100:
      lineTotalMessage = 'Tax declaration for students';
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
      <HeaderTwo>What is included in the price</HeaderTwo>

      <div>
        <Table border={3}>
          <TableHead>
            <TableRow style={{ backgroundColor: '#f2f2f2' }}>
              <TableCell align="center">
                <b>Item</b>
              </TableCell>
              <TableCell align="center">
                <b> Price $</b>
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
                <TableCell>Reporting on Foreign Assets</TableCell>
                <TableCell align="center">{additionalCostProperty}</TableCell>
              </TableRow>
            )}
            {additionalCost === 50 && (
              <TableRow>
                <TableCell>Online Meeting with an Accountant</TableCell>
                <TableCell align="center">{additionalCost}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <AmountP>Total payable : {sum} $</AmountP>
      <p>
        Our price includes the submission of a tax return, an email with
        personal advice for each person (or for the family) and assistance with
        an audit from the tax office, if one is carried out on the return
        submitted by us, for 10 years. We also guarantee to submit all
        declarations by the deadline, otherwise we will pay all penalties for
        late submission of declarations caused by our fault.
      </p>

      <BtnDivTwo>
        <Link to={'/thirdstep'}>
          <BtnStyle>PREVIOUS</BtnStyle>
        </Link>
        <Link to={'/finalstep'}>
          <BtnStyle>PLACE ORDER</BtnStyle>
        </Link>
      </BtnDivTwo>
    </MainDiv>
  );
};

export default Finalstep;
