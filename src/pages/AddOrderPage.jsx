import { Form } from "antd";
import Aside from "../components/Aside";
import AddOrderHeader from "../components/AddOrderHeader";
import TabTitles from "../components/TabTitles";
import AddOrderContent from "../components/AddOrderContent";


const tabItems = [
  { key: "1", label: "Основное", children: <AddOrderContent /> },
  { key: "2", label: "История изменений" },
];

const handleSubmitOrder = evt => {
  // evt.preventDefault();
}

const AddOrderPage = () => {
  return (
    <div className="h-screen flex">
      <Aside />
      <form onSubmit={handleSubmitOrder} className="w-[calc(100%-64px)] h-screen overflow-y-auto">
        <AddOrderHeader />
        <TabTitles items={tabItems} />
      </form>
    </div>
  );
};

export default AddOrderPage;
