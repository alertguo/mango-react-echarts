import {useState} from 'react';
import {createId} from 'lib/createId';

// use 开头是为了React规定
const useTags = () => { // 封装一个自定义的 Hook
  const [tags, setTags] = useState<{ id: number, name: string }[]>([
    {id: createId(), name: '1'},
    {id: createId(), name: '2'},
    {id: createId(), name: '3'},
    {id: createId(), name: '4'},
  ]);
  // 返回接口,不能是返回数组，不然使用就报错
  return {tags, setTags};
};

export {useTags};