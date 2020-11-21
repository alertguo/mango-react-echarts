import {useTags} from 'useTags';
import Layout from '../components/Layout';
import React from 'react';


function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <ol>
        {tags.map(tag =>
          <li key={tag}>{tag}</li>
        )}
      </ol>
    </Layout>
  );
}

export {Tags};