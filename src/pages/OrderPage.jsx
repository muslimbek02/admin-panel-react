import { Popover } from "antd";
import { FaSearch, FaFilter } from "react-icons/fa";
import { FaPlus, FaTableColumns } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Aside from "../components/Aside";
import DateOrder from "../components/DateOrder";
import OrderTable from "../components/OrderTable";
import OrderTableCols from "../components/OrderTableCols";
import OrderTabs from "../components/OrderTabs";

const OrderPage = () => {
  return (
    <div className="h-screen flex">
      <Aside />
      <div className="w-[calc(100%-64px)] h-screen overflow-y-auto">
        <div className="h-[64px] border-b pl-[20px] flex items-center justify-between">
          <h1 className="text-[20px] text-[#303940] font-semibold">Заказы</h1>
          <button className="border-l flex items-center py-[12px] px-[20px] text-[14px] text-[#1AC19D]">
            <FaPlus className="mr-[12px]" />
            Добавить
          </button>
        </div>
        <div className="px-[20px] flex items-center justify-between py-[12px] bg-[#F7F9FB]">
          <div className="relative flex items-center w-[400px]">
            <input
              type="text"
              placeholder="Поиск"
              className="block border text-[#9AA6AC] text-[14px] h-[32px] border-[#E5E9EB] rounded-[6px] w-full pl-[32px]"
            />
            <FaSearch className="absolute left-[8px] text-[#9AA6AC]" />
          </div>
          <div className="flex items-center">
            <DateOrder />
            <Popover trigger={'click'} content={<OrderTableCols/>}>
              <button className="ml-[24px] text-[#303940] flex items-center">
                <FaTableColumns className="mr-[12px]" />
                Столбцы
              </button>
            </Popover>
            <div className="ml-[24px]">
              <Link to={'/order-filters'} className="text-[#303940] flex items-center">
                <FaFilter className="mr-[12px]" />
                Фильтр
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#DCE9F9] p-[20px]">
          <div className="bg-white rounded-[6px] pl-[20px]">
            <OrderTabs />
            <OrderTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;