import { useState } from "react";
import { Button, Table } from "antd";
import { FaPlus, FaTableColumns } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import TableActionButton from "../TableActionButton";
import Countdown from "react-countdown";

const columns = [
  {
    title: "№",
    dataIndex: "num",
  },
  {
    title: "Клиент",
    dataIndex: "client",
    render: (client) => (
      <div className="text-[14px]">
        <p className="text-[#303940] mb-[8px]">{client.name}</p>
        <a href={`tel:${client.phone}`} className="text-[#4094F7] font-medium">
          {client.phone}
        </a>
      </div>
    ),
  },
  {
    title: "Ид.заказа",
    dataIndex: "orderId",
  },
  {
    title: "Таймер",
    dataIndex: "timer",
    render: (timer) => (
      <div className="bg-[#38D9B933] rounded-[6px] text-[#1AC19D] font-medium text-center py-[4px] px-[12px]">
        {timer}
      </div>
    ),
  },
  {
    title: "Курьер",
    dataIndex: "kuryer",
  },
  {
    title: "Филиал",
    dataIndex: "part",
    render: (client) => (
      <div className="text-[14px]">
        <p className="text-[#303940] mb-[8px]">{client.name}</p>
        <a href={`tel:${client.phone}`} className="text-[#4094F7] font-medium">
          {client.phone}
        </a>
      </div>
    ),
  },
  {
    title: "Тип доставки",
    dataIndex: "type",
    render: (type) => (
      <div className="bg-[#F8DD4E4D] rounded-[6px] text-[#D29404] font-medium text-center py-[4px] px-[12px]">
        {type}
      </div>
    ),
  },
  {
    title: "Цена заказа",
    dataIndex: "price",
  },
  {
    title: "Адресс клиента",
    dataIndex: "address",
  },
  {
    title: (
      <TableActionButton />
    ),
    dataIndex: "action",
    render: () => (
      <TableActionButton/>
    ),
    className: "action-col",
  },
];
const data = [];
for (let i = 0; i < 146; i++) {
  data.push({
    key: i + 1,
    num: i + 1,
    client: { name: "Diyorbek" + i, phone: "+998 (90) 747-40-11" },
    orderId: i + 1,
    timer: '02:10:25',
    kuryer: 10,
    part: 32,
    type: "Доставка",
    price: "$ " + 32,
    address: `ул. Байкальская‚ д. 52‚ кв. 22`,
  });
}

const OrderTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="mt-[20px] pr-[20px]">
      <div className="border rounded-[6px] w-full overflow-auto">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
};

export default OrderTable;
