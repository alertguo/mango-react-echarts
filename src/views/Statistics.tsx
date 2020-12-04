import Layout from 'components/Layout';
import React, {useState} from 'react';
import TypeSection from './Money/TypeSection';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import dayjs from 'dayjs';
import styled from 'styled-components';
import {Center} from '../components/Center';
import {Space} from '../components/Space';
import {Chart} from '../components/Chart';

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
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
`;

function Statistics() {
  const [option,setOption] = useState({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  })
  const [type, setType] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [K: string]: RecordItem[] } = {};
  // 筛选类型
  const selectedRecords = records.filter(r => r.type === type);

  selectedRecords.forEach(r => {
    const key = dayjs(r.createdAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
    return hash;
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] > b[0]) {
      return -1;
    } else if (a[0] === b[0]) {
      return 0;
    } else {
      return 1;
    }
  });
  return (
    <Layout>
      <TypeSection value={type}
                   onChange={value => setType(value)}/>
      <Chart option={option}/>
      {array.length !== 0
        ? array.map(([date, records]) => <div key={date}>
          <Header>
            {date}
            <div>
              ￥{records.map(a => {return a.amount;})
              .reduce((sum, amount) => {
                return sum + amount;
              })}
            </div>
          </Header>
          <div>
            {records.map(r => {
              return <Item key={r.createdAt}>
                <div className="tags">
                  {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
                </div>
                {r.note && <div className="note">
                  {r.note}
                </div>}
                <div className="amount">
                  ￥{r.amount}
                </div>
              </Item>;
            })}
          </div>
        </div>)
        : <div>
          <Space/>
          <Center>
            "您没有相关记账"
          </Center>
        </div>}
    </Layout>
  );
}

export default Statistics;