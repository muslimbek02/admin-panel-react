import { Tabs } from 'antd';
import {useState} from 'react';


const TabTitles = ({items}) => {

  return (
      <Tabs items={items} defaultActiveKey={items[0].key} />
  )
}

export default TabTitles