import React, {useState} from 'react';
import Layout from '../components/Layout';
import TypeSection from './Money/TypeSection';

export function AddTag() {
  const [type, setType] = useState<'-' | '+'>('-');
  return (
    <Layout>
      <TypeSection value={type}
                   onChange={value => setType(value)}/>
    </Layout>
  );
}