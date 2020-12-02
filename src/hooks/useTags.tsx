import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from 'hooks/useUpdate';

export type Tag = {
  id: number,
  name: string,
  type: '-' | '+',
  svg: string
}
// use 开头是为了React规定
export const useTags = () => { // 封装一个自定义的 Hook
  const [tags, setTags] = useState<Tag[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '餐饮', type: '-', svg: '餐饮'},
        {id: createId(), name: '购物', type: '-', svg: '购物'},
        {id: createId(), name: '交通', type: '-', svg: '交通'},
        {id: createId(), name: '日用', type: '-', svg: '日用'},
        {id: createId(), name: '医疗', type: '-', svg: '医疗'},
        {id: createId(), name: '工资', type: '+', svg: '工资'},
      ];
    }
    setTags(localTags);
  }, []); // 组件挂载时执行

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags); // tags 必须是不可变数据才会触发

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
  const updateTag = (id: number, obj: { name: string, type: '-' | '+', svg: string }) => {
    // 使用 map 替换深拷贝
    setTags(tags.map(tag => {
        return tag.id === id ? {id, name: obj.name, type: obj.type, svg: obj.svg} : tag;
      }
    ));
  };
  // 删除标签
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  // 新增标签
  const addTag = (tag: Tag) => {
    if (tag.name === '') {
      window.alert('标签名不能为空');
      return false;
    } else if (tags.map(t => t.name).indexOf(tag.name) >= 0) {
      window.alert('标签名重复');
      return false;
    }
    // 没有上面的失败情况才创建新的 id
    tag.id = createId();
    console.log(tag);
    console.log(tags);
    setTags([...tags, tag]);
    console.log(tags);
    alert('创建成功');
    return true;
  };
  // 已知 id ，获取对应的标签名
  const getName = (id: number) => {
    const tag = tags.find(t => t.id === id);
    return tag ? tag.name : '';
  };
  // 返回接口，不能是返回数组，不然使用就报错
  return {tags, setTags, getName, findTag, findTagIndex, updateTag, deleteTag, addTag};
};
