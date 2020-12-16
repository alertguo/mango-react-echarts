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
import _ from 'lodash';

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
const ChartWrapper = styled.div`
  overflow: auto;
  background: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function Statistics() {
  const [option, setOption] = useState({
    grid: {
      left: 0,
      right: 0,
    },
    tooltip: {
      show: true,
      // triggerOn: 'click',
      // position: 'top',
      formatter: '{c}',
      // axisPointer: {
      //   precision: 'auto', //保留所有小数
      // },
    },
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
      ],
      // type: 'category',
      // x轴节点位置
      axisTick: {
        alignWithLabel: true,
      },
      lineStyle: {
        color: '#333'
      },
      // axisLabel: {
      //   formatter: function (value: string, index: number) {
      //     // 格式化成月/日，只在第一个刻度显示年份
      //     if (index === 0) {
      //       return value.substr(0, 4);
      //     }
      //     return value.substr(5);
      //   }
      // }
    },
    yAxis: {
      // type: 'value',
      // 不显示 y 轴
      show: false,
    },
    series: [{
      // 转折点圆圈大小
      symbolSize: 10,
      //折线颜色
      lineStyle: {
        color: '#333',
        width: 1
      },
      // 线条样式
      itemStyle: {
        color: '#ffda44',
        borderColor: '#333',
      },
      type: 'line',
      data: [
        0, 20, 36, 10, 10, 20, 5, 20, 36, 10,
        5, 20, 36, 10, 10, 20, 5, 20, 36, 10,
        5, 20, 36, 10, 10, 20, 5, 20, 36, 10,
      ]
    }]
  });
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
  // const x = () => {
  const today = new Date();
  const array1 = [];
  const y = array.map(([date, records]) => {
    return records.map(r => ({createAt: r.createdAt, amount: r.amount}));
  });
  for (let i = 0; i <= 29; i++) {
    // 获取到30天的日期
    const dateString = dayjs(today).subtract(i, 'day').format('YYYY-MM-DD');
    // 找到对应的日期的值,不存在则为0
    const found = _.find(records, {
      createAt: dateString
    });
    array1.push({
      key: dateString, value: found
    });
  }
  // };
  return (
    <Layout>
      <TypeSection value={type}
                   onChange={value => setType(value)}/>
      <ChartWrapper>
        <Chart option={option}/>
      </ChartWrapper>
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