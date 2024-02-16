import { BtnStyle, MainDiv } from 'components/main/mainStyle';
import { BtnDivTwo } from 'components/secondstep/secondstepStyle';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCheckboxContext } from '../CheckboxContext';

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
  return (
    <MainDiv>
      <h2>What is included in the price</h2>

      <div>
        <table border="2">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Line Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{lineTotalMessage}</td>
              <td>${maxValue}</td>
              <td>1</td>
              <td>Total</td>
            </tr>
          </tbody>
        </table>
      </div>
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
          <BtnStyle>FINISH</BtnStyle>
        </Link>
      </BtnDivTwo>
    </MainDiv>
  );
};

export default Finalstep;
