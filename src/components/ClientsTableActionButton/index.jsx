import { Popover } from 'antd';
import { BsThreeDots } from 'react-icons/bs';
import { MdEdit } from "react-icons/md";
import { PiX } from "react-icons/pi";
import { Link } from 'react-router-dom';



const Content = () =>  (
  <div className="w-[251px]">
      <Link to={`/clients/add`} className="border-b w-full py-[8px] pr-[16px] flex items-center pl-[8px]">
        <div className="mr-[12px] bg-[#E3EFFE] text-[16px] rounded-[6px] text-[#4094F7] p-[8px]">
          <MdEdit />
        </div>
        <span className="text-black">Изменить</span>
      </Link>
      <button className="border-b w-full py-[8px] pr-[16px] flex items-center pl-[8px]">
        <div className="mr-[12px] bg-[#FEE8E6] text-[16px] rounded-[6px] text-[#F76659] p-[8px]">
          <PiX />
        </div>
        <span className="text-black">Отменено</span>
      </button>
  </div>
);

const ClientsTableActionButton = () => {
  return (
      <Popover placement="bottomLeft" content={<Content />} trigger={"click"}>
      <button className="p-[4px] text-[20px] border border-[#E5E9EB] text-[#4094F7] rounded-[6px]">
        <BsThreeDots />
      </button>
    </Popover>
  )
}

export default ClientsTableActionButton