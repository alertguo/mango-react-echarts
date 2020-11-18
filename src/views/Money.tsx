import Layout from '../components/Layout';
import React from 'react';
import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';
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
      <TypeSection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </TypeSection>
      <TagsSection/>
      <NotesSection>
        <label>
          <span>备注：</span>
          <input type="text" placeholder="点击添加备注"/>
        </label>
      </NotesSection>
      <NumberPadSection>
        <div className="output">
          100
        </div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;