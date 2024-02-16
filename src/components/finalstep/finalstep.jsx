import { BtnStyle, MainDiv } from 'components/main/mainStyle';
import { BtnDivTwo } from 'components/secondstep/secondstepStyle';
import React from 'react';
import { Link } from 'react-router-dom';

const finalstep = () => {
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
              <td>Tax declaration</td>
              <td>Row 1, Column 2</td>
              <td>Row 1, Column 3</td>
              <td>Row 1, Column 4</td>
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

export default finalstep;
