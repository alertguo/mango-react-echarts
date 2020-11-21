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
type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void
}
const TypeSection: React.FC<Props> = (props) => {
  const typeMap = {'-': '支出', '+': '收入'};
  const [typeList] = useState<('-' | '+')[]>(['-', '+']);
  const type = props.value;
  return (
    <Wrapper>
      <ul>
        {typeList.map(c =>
          <li className={type === c ? 'selected' : ''}
              key={c}
              onClick={() => {props.onChange(c);}}
          >{typeMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

export default TypeSection;