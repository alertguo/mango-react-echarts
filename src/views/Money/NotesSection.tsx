import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from 'components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;
type Props = {
  value: string
  labels: string
  types: string
  onChange: (value: string) => void
}
const NotesSection: React.FC<Props> = (props) => {
  const note = props.value;
  const labels = props.labels;
  const types = props.types;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input label={labels} type={types} value={note} onChange={onChange} placeholder="点击添加备注"/>
    </Wrapper>
  );
};

export {NotesSection};