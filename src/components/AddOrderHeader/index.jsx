import { Link } from "react-router-dom";
import { Select } from "antd";
import { FaRegCalendar } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { FaSave } from "react-icons/fa";

const AddOrderHeader = () => {
  return (
    <div className="bg-white h-[64px] border-b pl-[20px] flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-[18px] text-[#303940] font-semibold border-r pr-[16px]">
              Заказ
            </h1>
            <p className="text-[#6E8BB7] mx-[16px] border-r pr-[16px]">
              <span className="font-bold text-[16px]">ID</span>
              <span className="ml-[12px] text-[14px] font-medium">537391</span>
            </p>
            <p className="text-[#6E8BB7] flex items-center pr-[16px] border-r">
              <FaRegCalendar className="mr-[12px] text-[20px]" />
              <span className="text-[14px] font-medium">
                2021-06-22 18:40:27
              </span>
            </p>
          </div>
          <div className="flex h-full items-center px-[16px] border-l">
            <div className="flex text-[#1AC19D] text-[14px] font-medium items-center w-[113px] relative">
              <MdOutlineTimer className="text-[20px] left-[12px] absolute" />
              <input
                type="text"
                placeholder="2:10:01"
                className="rounded-[6px] placeholder:text-[#1AC19D] bg-[#38D9B926] w-full h-[32px] pl-[44px]"
              />
            </div>
            <div className="h-full border-x ml-[16px] px-[16px] flex items-center">
              <Select
                defaultValue={"new"}
                options={[
                  { label: "Новый", value: "new" },
                  { label: "Доставлен", value: "created" },
                ]}
              />
            </div>
            <div className="text-[#F76659] text-[14px] font-medium h-full border-r px-[16px] flex items-center">
              <button type="reset" className="flex items-center">
                <TiDelete className="text-[20px] mr-[12px]" />
                <span>Отменить</span>
              </button>
            </div>
            <button className="ml-[16px] flex items-center text-[14px] text-[#4094F7] font-medium">
              <FaSave className="text-[20px] mr-[12px]" />
              <span>Сохранить</span>
            </button>
          </div>
        </div>
  )
}

export default AddOrderHeader