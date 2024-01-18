import React from "react";
import Aside from "../components/Aside";
import ShopIcon from "../assets/Shop.svg";
import Users from "../assets/Users.svg";
import NotifyBlue from "../assets/notifications-blue.svg";
import DirectionsCar from "../assets/directions_car.svg";

const Dashboard = () => {
  return (
    <div className="h-screen flex">
      <Aside />
      <div className="w-[calc(100%-64px)] h-screen overflow-y-auto">
        <div className="shadow-[0px_-1px_0px_0px_#E5E9EB_inset] h-[55px] pl-[32px] flex items-center">
          <h1 className="text-[24px] text-[#303940] font-semibold">
            Dashboard
          </h1>
        </div>
        <div className="px-[32px] py-[24px] bg-[#DCE9F9]">
          <div className="grid grid-cols-4 gap-x-[24px]">
            <div className="w-full p-[24px] h-[120px] rounded-[6px] bg-white flex items-center justify-between">
              <div className="flex flex-col">
                <h6 className="text-[24px] text-[#4094F7] font-bold">24</h6>
                <span className="block mt-auto text-[14px] text-[#6E8BB7] ">
                  Филиалы
                </span>
              </div>
              <div className="w-[72px] h-[72px] bg-[rgba(64,148,247,0.15)] flex items-center justify-center rounded-[6px]">
                <img src={ShopIcon} alt="" />
              </div>
            </div>
            <div className="w-full p-[24px] h-[120px] rounded-[6px] bg-white flex items-center justify-between">
              <div className="flex flex-col">
                <h6 className="text-[24px] text-[#4094F7] font-bold">
                  110,823
                </h6>
                <span className="block mt-auto text-[14px] text-[#6E8BB7] ">
                  Клиенты
                </span>
              </div>
              <div className="w-[72px] h-[72px] bg-[rgba(64,148,247,0.15)] flex items-center justify-center rounded-[6px]">
                <img src={Users} alt="" />
              </div>
            </div>
            <div className="w-full p-[24px] h-[120px] rounded-[6px] bg-white flex items-center justify-between">
              <div className="flex flex-col">
                <h6 className="text-[24px] text-[#4094F7] font-bold">
                  110,823
                </h6>
                <span className="block mt-auto text-[14px] text-[#6E8BB7] ">
                  Подписчики
                </span>
              </div>
              <div className="w-[72px] h-[72px] bg-[rgba(64,148,247,0.15)] flex items-center justify-center rounded-[6px]">
                <img src={NotifyBlue} alt="" />
              </div>
            </div>
            <div className="w-full p-[24px] h-[120px] rounded-[6px] bg-white flex items-center justify-between">
              <div className="flex flex-col">
                <h6 className="text-[24px] text-[#4094F7] font-bold">75</h6>
                <span className="block mt-auto text-[14px] text-[#6E8BB7] ">
                  Курьеры
                </span>
              </div>
              <div className="w-[72px] h-[72px] bg-[rgba(64,148,247,0.15)] flex items-center justify-center rounded-[6px]">
                <img src={DirectionsCar} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
