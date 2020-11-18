import Layout from '../components/Layout';
import React from 'react';
import TagsSelection from './Money/TagsSelection';
import NotesSelection from './Money/NotesSelection';
import TypeSelection from './Money/TypeSelection';
import NumberPadSelection from './Money/NumberPadSelection';

function Money() {
  return (
    <Layout>
      <TypeSelection>
        <ul>
          <li className="selected">支出</li>
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
          <span>备注：</span>
          <input type="text" placeholder="点击添加备注"/>
        </label>
      </NotesSelection>
      <NumberPadSelection>
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
          <button className="dot">.</button>
        </div>
      </NumberPadSelection>
    </Layout>
  );
}

export default Money;