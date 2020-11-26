import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  type: '-' | '+'
  tagIds: number[]
  note: string
  amount: number
  // createdAt: string // ISO 8601
}
// type newRecordItem = Omit<RecordItem, 'createdAt'>
export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('record', JSON.stringify(records));
  }, [records]);

  const addRecord = (record: RecordItem) => {
    if (record.tagIds.length === 0) {
      alert('请选择标签');
      return false;
    }
    if (record.amount <= 0) {
      alert('您还没有输入记账金额');
      return false;
    }
    setRecords([...records, record]);
    alert('已保存');
    return true;
  };

  return {records, addRecord};
};