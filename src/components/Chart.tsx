import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import styled from 'styled-components';
import {EChartOption} from 'echarts';

const Wrapper = styled.div`
  height: 40vh;
`;
type Props = {
  option?: EChartOption
}
export const Chart: React.FC<Props> = (props) => {
  const option = props.option;
  const wrapper = useRef<HTMLDivElement>(null);
  let chart = useRef<any>(null);
  // 后面接的空数组相当于第一次渲染（等价于 Vue 的 mounted）
  useEffect(() => {
    // .current 取到这个 div 的值
    console.log(chart.current);
    chart.current = echarts.init(wrapper.current!);
    console.log(chart.current);
  }, []);
  // option 变化时重新渲染
  useEffect(() => {
    chart.current.setOption(option);
  }, [option]);
  return (
    <Wrapper ref={wrapper}/>
  );
};