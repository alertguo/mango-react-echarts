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
      .tagIcon {
        margin-right: auto;
        margin-left: 4px;
      }
    }
  }
`;

function Label() {
  const {tags} = useTags();
  const [type, setType] = useState<'-' | '+'>('-');
  const typeTags = tags.filter(t => t.type === type);
  return (
    <Layout>
      <TypeSection value={type}
                   onChange={value => setType(value)}/>
      <TagList>
        {typeTags.map(tag =>
          <li key={tag.id}>
            <Link to={'/label/' + tag.id}>
              <span className="oneLine">
                {tag.name}
              </span>
              <Icon name={tag.svg} className="tagIcon"/>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Link to={'/add'}>
          <Button>
            新增标签
          </Button>
        </Link>
      </Center>
    </Layout>
  );
}

export default Label;