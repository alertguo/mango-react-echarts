import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';

// use 开头是为了React规定
const useTags = () => { // 封装一个自定义的 Hook
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if(localTags.length === 0){
      localTags = [
        {id: createId(), name: '1'},
        {id: createId(), name: '2'},
        {id: createId(), name: '3'},
        {id: createId(), name: '0'},
      ]
    }
    setTags(localTags);
  }, []); // 组件挂载时执行
  useEffect(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]); // tags 必须是不可变数据才会触发
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
    // 使用 map 替换深拷贝
    setTags(tags.map(tag => {
        return tag.id === id ? {id: id, name: obj.name} : tag;
      }
    ));
    // // 获取到在 tags 中对应的下标
    // const index = findTagIndex(id);
    // // 深拷贝 tags （React 不推荐改变原数组，如果发现还是原来的对象，会不做任何改变）
    // let tagsClone = JSON.parse(JSON.stringify(tags));
    // // 替换该项数据
    // tagsClone.splice(index, 1, {id: id, name: obj.name});
    // setTags(tagsClone);
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt('标签名为');
    if (tagName !== null) {
      if (tagName === '') {
        return window.alert('标签名不能为空');
      } else if (tags.map(t => t.name).indexOf(tagName) >= 0) {
        return window.alert('标签名重复');
      }
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  // 返回接口，不能是返回数组，不然使用就报错
  return {tags, setTags, findTag, findTagIndex, updateTag, deleteTag, addTag};
};

export {useTags};