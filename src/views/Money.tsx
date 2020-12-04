import Layout from '../components/Layout';
import React, {useState} from 'react';
import {TagsSection} from './Money/TagsSection';
import {NotesSection} from './Money/NotesSection';
import TypeSection from './Money/TypeSection';
import NumberPadSection from './Money/NumberPadSection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import dayjs from 'dayjs';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Type = '-' | '+'

const defaultRecord = {
  tagIds: [] as number[],
  note: '',
  type: '-' as Type,
  amount: 0,
  createAt: new Date().toISOString()
};


function Money() {
  const [selected, setSelected] = useState(defaultRecord);
  const {addRecord} = useRecords();
  // Partial 可以只获取部分属性，不必要一一对应，全部都有
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const submit = () => {
    addRecord(selected) && setSelected(defaultRecord);
  };
  // 解决不显示默认的日期的 bug
  const x = (isoString: string) => {
    return dayjs(isoString).format('YYYY-MM-DDTHH:mm:ss')
  }
  return (
    <MyLayout scrollTop={0}>
      <TypeSection value={selected.type}
                   onChange={(type) => onChange({type})}/>
      <TagsSection value={selected.tagIds}
                   type={selected.type}
                   onChange={(tagIds) => onChange({tagIds})}/>
      <NotesSection value={x(selected.createAt)}
                    labels="日期："
                    types="datetime-local"
                    onChange={(createAt) => onChange({createAt})}/>
      <NotesSection value={selected.note}
                    labels="备注："
                    types="text"
                    onChange={(note) => onChange({note})}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChange({amount})}
                        onOk={submit}
      />
    </MyLayout>
  );
}

export default Money;