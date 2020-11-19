import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
const TypeSection: React.FC = () => {
  const [type, setType] = useState('-');
  return (
    <Wrapper>
      <ul>
        <li className={type === '-' ? 'selected' : ''}
            onClick={() => {setType('-');}}
        >支出
        </li>
        <li className={type === '+' ? 'selected' : ''}
            onClick={() => {setType('+');}}
        >收入
        </li>
      </ul>
    </Wrapper>
  );
};

export default TypeSection;