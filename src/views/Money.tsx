import Layout from '../components/Layout';
import React, {useState} from 'react';
import {TagsSection} from './Money/TagsSection';
import {NotesSection} from './Money/NotesSection';
import TypeSection from './Money/TypeSection';
import NumberPadSection from './Money/NumberPadSection';
import styled from 'styled-components';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Type = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    type: '-' as Type,
    amount: 0
  });
  // Partial 可以只获取部分属性，不必要一一对应，全部都有
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  return (
    <MyLayout>
      <TypeSection value={selected.type}
                   onChange={(type) => onChange({type})}/>
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChange({tagIds})}/>
      <NotesSection value={selected.note}
                    onChange={(note) => onChange({note})}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChange({amount})}
                        onOk={() => {}}
      />
    </MyLayout>
  );
}

export default Money;