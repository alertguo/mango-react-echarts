import styled from 'styled-components';

const TypeSelection = styled.section`
  font-size: 24px;
  > ul {
    display: flex; 
    background: #ffda44;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

export default TypeSelection;