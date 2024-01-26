import { useState } from "react";
import { Table } from "antd";

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
