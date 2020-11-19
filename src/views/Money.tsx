import Layout from '../components/Layout';
import React from 'react';
import {TagsSection} from './Money/TagsSection';
import {NotesSection} from './Money/NotesSection';
import TypeSection from './Money/TypeSection';
import NumberPadSection from './Money/NumberPadSection';
import styled from 'styled-components';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  return (
    <MyLayout>
      <TypeSection/>
      <TagsSection/>
      <NotesSection/>
      <NumberPadSection/>
    </MyLayout>
  );
}

export default Money;