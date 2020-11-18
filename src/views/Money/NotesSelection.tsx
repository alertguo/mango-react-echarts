import styled from 'styled-components';

const NotesSelection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 4px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 40px;
      background: none;
      border: none;
    }
  }
`;
export default NotesSelection;