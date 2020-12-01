import React, {useState} from 'react';
import Layout from '../components/Layout';
import TypeSection from './Money/TypeSection';
// import {Tag} from '../hooks/useTags';
import styled from 'styled-components';
import {Input} from '../components/Input';
import Icon from '../components/Icon';
import {commonTagList} from '../lib/commonTagList';
import {Button} from '../components/Button';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

// const defaultTag = {
//   id: 0,
//   name: '',
//   type: '-',
//   svg: 'commonTag-0'
// } as Tag;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 32px;
  font-size: 16px;
  > .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background: #ffda4488;
    margin-right: 4px;
    >.icon {
      width: 24px;
      height: 24px;
    }
  }
`;
const Tags = styled.div`
  > h3 {
    padding-bottom: 16px;
    padding-left: 16px;
  }
  > ol {
    display: flex;
    flex-wrap: wrap;
    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20%;
      padding-bottom: 16px;
      &.selected {
        .icon-wrapper {
          background: #ffda4488;
        }
      }
      .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #d9d9d988;
        height: 36px;
        width: 36px;
        border-radius: 50%;

        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

export function AddTag() {
  const [type, setType] = useState<'-' | '+'>('-');
  // const [tag, setTag] = useState(defaultTag);
  // 默认的 selectedTag
  const [selectedTag, setSelectedTag] = useState<string[]>(['commonTag-0']);
  // 点击切换 selectedTag
  const onSelectedTag = (tagName: string) => {
    setSelectedTag([tagName]);
  };
  // 添加选中的tag 的 class 为 'selected'
  const getClass = (tagName: string) => {
    return selectedTag.indexOf(tagName) >= 0 ? 'selected' : '';
  };
  const add = () => {
    console.log("x");
  }
  return (
    <Layout>
      <TypeSection value={type}
                   onChange={value => setType(value)}/>
      <InputWrapper>
        <div className="wrapper">
          <Icon name={selectedTag[0]}/>
        </div>
        <Input label="" type="text" placeholder="输入标签名(不超过5个字)"/>
      </InputWrapper>
      <Tags>
        <h3>
          选择图标
        </h3>
        <ol>
          {commonTagList.map(tag =>
            <li key={tag.index}
                onClick={() => onSelectedTag(tag.name)}
                className={getClass(tag.name)}>
              <div className='icon-wrapper'>
                <Icon name={tag.name}/>
              </div>
            </li>)}
        </ol>
      </Tags>
      <Center>
        <Space/>
        <Button onClick={()=>{add()}}>
          新增标签
        </Button>
      </Center>
    </Layout>
  );
}