import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  type: '-' | '+'
  tagIds: number[]
  note: string
  amount: number
}
export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('record', JSON.stringify(records));
  }, [records]);

  const addRecord = (record: RecordItem) => {
    setRecords([...records, record]);
  };

  return {records, addRecord};
};