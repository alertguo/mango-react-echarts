import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';

type Params = {
  id: string
}
const EditLabel: React.FC = () => {
  const {tags} = useTags();
  let {id} = useParams<Params>();
  const tag = tags.filter(tag => tag.id === parseInt(id))[0];
  return (
    <div>{tag.name}</div>
  );
};

export {EditLabel};