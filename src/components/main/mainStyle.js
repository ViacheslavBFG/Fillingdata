import styled from '@emotion/styled';

export const MainDiv = styled.div`
  margin: 25px 100px;
`;

export const HeaderTwo = styled.h2`
  font-size: 40px;
`;

export const NameDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const Span = styled.span`
  margin-right: 10px;
`;

export const EmailDiv = styled.div`
  margin-top: 20px;
`;
export const SpanE = styled.span`
  margin-right: 49px;
`;
export const BtnDiv = styled.div`
  margin-top: 30px;
`;

export const BtnStyle = styled.button`
  color: white;
  font-weight: bold;
  background-color: #d74439;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  padding: 10px;
  width: 200px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export const InputStyle = styled.input`
  border-radius: 10px;
  padding: 7px;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
`;
