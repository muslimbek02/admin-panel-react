import { Tabs } from "antd";
import React from "react";
import CashiersTable from "../CashiersTable";
import CouriersTable from "../CouriersTable";

const tabItems = [
  {
    key: "1",
    label: "Курьеры",
    children: <CouriersTable />,
  },
  {
    key: "2",
    label: "Кассиры",
    children: <CashiersTable />,
  },
];

const PersonalContent = () => {
  return (
    <div className="p-[20px]">
      <div className="p-[16px] bg-white rounded-[6px]">
        <Tabs className="bg-white" items={tabItems} />
      </div>
    </div>
  );
};

export default PersonalContent;
