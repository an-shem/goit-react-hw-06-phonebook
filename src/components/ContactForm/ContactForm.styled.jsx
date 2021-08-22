import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.167;
  letter-spacing: 0.01em;
  color: #757575;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding-left: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 40px;

  border: 2px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border: 2px solid #2196f3;
  }
`;

export const LabelName = styled.span`
  margin-bottom: 8px;
`;

export const AddButton = styled.button`
  width: 160px;
  height: 40px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.167;
  letter-spacing: 0.01em;
  color: #757575;
  background: #e5e3e9;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #188ce8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: #fff;
  }
`;
