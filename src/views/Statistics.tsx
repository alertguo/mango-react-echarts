import Layout from 'components/Layout';
import React, {useState} from 'react';
import TypeSection from './Money/TypeSection';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import dayjs from 'dayjs';

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
          return <div>
            {r.tagIds.map(tagId => <span>id:{getName(tagId)}</span>)}
            ￥{r.amount}
            {dayjs(r.createdAt).format('YYYY年MM月DD日')}
          </div>;
        })}
      </div>
    </Layout>
  );
}

export default Statistics;