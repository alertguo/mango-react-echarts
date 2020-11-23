import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from 'components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;
type Props = {
  value: string,
  onChange: (value: string) => void
}
const NotesSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e)=>{
    props.onChange(e.target.value)
  }
  // const refInput = useRef<HTMLInputElement>(null);
  // const onBlur = () => {
  //   if (refInput.current !== null) {
  //     props.onChange(refInput.current.value);
  //   }
  // };
  return (
    <Wrapper>
      <Input label="备注：" type="text" value={note} onChange={onChange} placeholder="点击添加备注"/>
      {/*<span>备注：</span>*/}
      {/*<input type="text" placeholder="点击添加备注"*/}
      {/*       ref={refInput}*/}
      {/*       defaultValue={note}*/}
      {/*       onBlur={onBlur}*/}
      {/*/>*/}
    </Wrapper>
  );
};

export {NotesSection};