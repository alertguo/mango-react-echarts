import {useState} from 'react';

// use 开头是为了React规定
const useTags = () => { // 封装一个自定义的 Hook
  const [tags, setTags] = useState<{ id: number,name: string }[]>([
    {id: 1,name: '1'},
    {id: 2,name: '2'},
    {id: 3,name: '3'},
    {id: 4,name: '4'},
  ]);
  // 返回接口,不能是返回数组，不然使用就报错
  return {tags, setTags};
};

export {useTags};