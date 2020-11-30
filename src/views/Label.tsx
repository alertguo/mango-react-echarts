import Layout from 'components/Layout';
import React, {useState} from 'react';
import {useTags} from 'hooks/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';
import {Button} from 'components/Button';
import {Center} from 'components/Center';
import {Space} from 'components/Space';
import TypeSection from './Money/TypeSection';

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  >li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

function Label() {
  const {tags, addTag} = useTags();
  // 注释为添加 type 切换，后面修改 type 切换显示不同的标签
  const [type, setType] = useState<'-' | '+'>('-');
  return (
    <Layout>
      <TypeSection value={type}
                   onChange={value => setType(value)}/>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/label/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Button onClick={addTag}>
          新增标签
        </Button>
      </Center>
    </Layout>
  );
}

export default Label;