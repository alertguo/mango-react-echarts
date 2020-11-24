import {useState} from 'react';
import {createId} from 'lib/createId';

const defaultTags = [
  {id: createId(), name: '1'},
  {id: createId(), name: '2'},
  {id: createId(), name: '3'},
  {id: createId(), name: '0'},
];
// use 开头是为了React规定
const useTags = () => { // 封装一个自定义的 Hook
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    // 获取到在 tags 中对应的下标
    const index = findTagIndex(id);
    console.log('index');
    console.log(index);
    // 深拷贝 tags
    let tagsClone = JSON.parse(JSON.stringify(tags));
    // 替换该项数据
    tagsClone.splice(index, 1, {id: id, name: obj.name});
    console.log('tagsClone');
    console.log(tagsClone);
    setTags(tagsClone);
  };
  // 返回接口,不能是返回数组，不然使用就报错
  return {tags, setTags, findTag, findTagIndex, updateTag};
};

export {useTags};