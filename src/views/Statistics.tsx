import Layout from 'components/Layout';
import React, {useState} from 'react';
import TypeSection from './Money/TypeSection';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
// import dayjs from 'dayjs';
import styled from 'styled-components';

const Item = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

function Statistics() {
  const [type, setType] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  return (
    <Layout>
      <TypeSection value={type}
                   onChange={value => setType(value)}/>
      <div>
        {records.map(r => {
          return <Item>
            <div className="tags">
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
            </div>
            {r.note && <div className="note">
              {r.note}
            </div>}
            <div className="amount">
              ￥{r.amount}
            </div>
            {/*{dayjs(r.createdAt).format('YYYY年MM月DD日')}*/}
          </Item>;
        })}
      </div>
    </Layout>
  );
}

export default Statistics;