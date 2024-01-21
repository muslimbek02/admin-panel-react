import {useState} from 'react'
import { Button, Table } from 'antd';
import { FaPlus, FaTableColumns } from "react-icons/fa6";

const columns = [
  {
    title: '№',
    dataIndex: 'num',
  },
  {
    title: 'Клиент',
    dataIndex: 'client',
  },
  {
    title: 'Ид.заказа',
    dataIndex: 'orderId',
    render: (text) => <FaPlus />
  },
  {
    title: 'Курьер',
    dataIndex: 'kuryer',
  },
  {
    title: 'Филиал',
    dataIndex: 'part',
  },
  {
    title: 'Тип доставки',
    dataIndex: 'type',
  },
  {
    title: 'Цена заказа',
    dataIndex: 'price',
  },
  {
    title: 'Адресс клиента',
    dataIndex: 'address',
  },

];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    num: i + 1,
    client: `Edward King ${i}`,
    orderid: i,
    kuryer: 32,
    part: 32,
    type: 32,
    price: 32,
    address: `London, Park Lane no. ${i}`,
  });
}


const OrderTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className='mt-[20px] pr-[20px]'>
      <div className="border rounded-[6px] w-full overflow-auto">
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default OrderTable