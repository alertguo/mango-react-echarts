import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags';
import Icon from '../../components/Icon';
import {Link} from 'react-router-dom';

const Wrapper = styled.section`
  background: #ffffff;
  font-size: 14px;
  padding: 12px 16px;
  flex-grow: 1;
  > ol {
    display: flex;
    flex-wrap: wrap;
    margin: 8px -12px;
    > li {
      display: flex;
      flex-direction: column;
      width: 25%;
      align-items: center;
      font-size: 14px;
      padding-bottom: 16px;
      .icon-wrapper, .addTag {
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
      &.selected {
        .icon-wrapper{
          background: #ffda44;
        }
      }
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
type Props = {
  type: '-' | '+',
  value: number[],
  onChange: (selected: number[]) => void
}
// 表示除了默认的 children 之外，还可以拥有 Props 类型的
const TagsSection: React.FC<Props> = (props) => {
  // 析构赋值
  const {tags} = useTags();
  const selectedTagIds = props.value;
  const typeTags = tags.filter(t => t.type === props.type);

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      // 如果 tag 已被选中，就复制所有没有被选中的 tag，作为新的 selectedTags
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {typeTags.map(tag =>
          <li key={tag.id} onClick={() => onToggleTag(tag.id)}
              className={getClass(tag.id)}
          >
            <div className="icon-wrapper">
              <Icon name={tag.svg}/>
            </div>
            {tag.name}
          </li>)}
        <li>
          <Link to={'/add'}>
            <div className="addTag">
              <Icon name="addTag"/>
            </div>
          </Link>
          创建
        </li>
      </ol>
    </Wrapper>
  );
};
export {TagsSection};