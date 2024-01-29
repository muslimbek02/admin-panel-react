import { Table } from "antd";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import ClientsTableActionButton from "../ClientsTableActionButton";

const ClientsTable = () => {
  const columns = [
    {
      title: "Название",
      dataIndex: "title",
      render: (title) => <Link to={'/clients/add'}>{title}</Link>
    },
    {
      title: "Номер телефона",
      dataIndex: "phone",
    },
    {
      title: "Статус",
      dataIndex: "status",
      render: ({ isActive, label }) => (
        <div className="flex justify-center">
          <div
          className={`${
            isActive
              ? "text-[#4094F7] bg-[#4094F726]"
              : "text-[#F76659] bg-[#F7665926]"
          } font-medium text-[14px] w-[144px] h-[24px] flex items-center justify-center rounded-[6px]`}
        >
          {label}
        </div>
        </div>
      ),
    },
    {
      title: (
        <button className="p-[4px] text-[20px] border border-[#E5E9EB] text-[#4094F7] rounded-[6px]">
          <BsThreeDots />
        </button>
      ),
      dataIndex: "action",
      render: () => <ClientsTableActionButton />,
      className: "action-col",
    },
  ];
  const data = [
    {
      key: '1',
      title: "Cody Fisher",
      phone: "(907) 555-0101",
      status: {
        isActive: true,
        label: "Активный",
      },
      action: "",
    },
    {
      key: '2',
      title: "Cody Fisher",
      phone: "(907) 555-0101",
      status: {
        isActive: false,
        label: "Активный",
      },
      action: "",
    },
    {
      key: '3',
      title: "Cody Fisher",
      phone: "(907) 555-0101",
      status: {
        isActive: true,
        label: "Активный",
      },
      action: "",
    },
  ];

  return (
    <div className="border bg-white p-[20px] mt-[20px] rounded-[6px] w-full overflow-auto">
      <Table className="clients-table" columns={columns} dataSource={data} />
    </div>
  );
};

export default ClientsTable;
