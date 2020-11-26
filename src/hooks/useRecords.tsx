import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  type: '-' | '+'
  tagIds: number[]
  note: string
  amount: number
  createdAt: string // ISO 8601
}
type newRecordItem = Omit<RecordItem, 'createdAt'>

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.tagIds.length === 0) {
      alert('请选择标签');
      return false;
    }
    if (newRecord.amount <= 0) {
      alert('您还没有输入记账金额');
      return false;
    }
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
    alert('已保存');
    return true;
  };

  return {records, addRecord};
};