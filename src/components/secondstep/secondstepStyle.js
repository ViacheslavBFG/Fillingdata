import styled from '@emotion/styled';

export const IncomeDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PropertyDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BtnDivTwo = styled.div`
  margin-top: 30px;

  display: flex;
  @media only screen and (max-width: 767px) {
    gap: 60px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    gap: 500px;
  }

  @media only screen and (min-width: 1024px) {
    gap: 800px;
  }
`;

export const StyledCheckbox = styled.input`
  margin-right: 10px;
`;
export const DivChoose = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelStyle = styled.label`
  cursor: pointer;
`;
