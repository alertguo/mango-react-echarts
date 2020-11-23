import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
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
`;
// 设置类型的时候 & React.InputHTMLAttributes<HTMLInputElement> 使其不用将每个使用到的方法的类型都写一遍
type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {
  // ...rest 就是 HTML 的 input 除了 label、children 之外的所有方法
  const {label, children, ...rest} = props;
  return (
    <Label>
      <span>{props.label}</span>
      <input {...rest}/>
    </Label>
  );
};

export {Input};