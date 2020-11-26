import Layout from 'components/Layout';
import React, {useState} from 'react';
import TypeSection from './Money/TypeSection';
import {useRecords} from '../hooks/useRecords';

function Statistics() {
  const [type, setType] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  return (
    <Layout>
      <TypeSection value={type}
                   onChange={value => setType(value)}/>
      <div>
        {JSON.stringify(records)}
      </div>
    </Layout>
  );
}

export default Statistics;