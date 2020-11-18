import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSelection = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;
const NotesSelection = styled.section`
  border: 1px solid green;
`;
const TypeSelection = styled.section`
  
`;
const NumberPadSelection = styled.section`
  
`;

function Money() {
  return (
    <Layout>
      <TypeSelection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </TypeSelection>
      <TagsSelection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>
          新增标签
        </button>
      </TagsSelection>
      <NotesSelection>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </NotesSelection>
      <NumberPadSelection>
        <div>
          100
        </div>
        <div>
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
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSelection>
    </Layout>
  );
}

export default Money;