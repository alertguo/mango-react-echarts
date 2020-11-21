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
    tags: [] as string[],
    note: '',
    type: '-' as Type,
    amount: 0
  });
  return (
    <MyLayout>
      <TypeSection value={selected.type}
                   onChange={(type) => setSelected({
                     ...selected,
                     type: type
                   })}/>
      {selected.tags.join(',')}
      <hr/>
      {selected.note}
      <hr/>
      {selected.type}
      <hr/>
      {selected.amount}
      <TagsSection value={selected.tags}
                   onChange={(tags) => {
                     setSelected({
                       ...selected,
                       tags: tags
                     });
                   }}/>
      <NotesSection value={selected.note}
                    onChange={(note) => {
                      setSelected({
                        ...selected,
                        note: note
                      });
                    }}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => {
                          setSelected({
                            ...selected,
                            amount: amount
                          });
                        }}
                        onOk={() => {}}
      />
    </MyLayout>
  );
}

export default Money;