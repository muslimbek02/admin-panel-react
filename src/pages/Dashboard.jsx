import React from "react";
import Aside from "../components/Aside";
import ShopIcon from "../assets/Shop.svg";
import Users from "../assets/Users.svg";
import NotifyBlue from "../assets/notifications-blue.svg";
import DirectionsCar from "../assets/directions_car.svg";
import AreaChartContent from "../components/AreaChartContent";

const NumbersData = [
  {
    num: "24",
    title: "Филиалы",
    icon: ShopIcon,
  },
  {
    num: "110,823",
    title: "Клиенты",
    icon: Users,
  },
  {
    num: "110,823",
    title: "Подписчики",
    icon: NotifyBlue,
  },
  {
    num: "75",
    title: "Курьеры",
    icon: DirectionsCar,
  },
];

const GraphicChartData = [
  {
    title: 'Total orders this month',
    num: '1,850',
    percen: 5,
    isBenefit: false,
    chartColor: '#F8C51B',
    colorId: 'gradiendId1'
  },
  {
    title: 'Earning this month',
    num: '$6,250',
    percen: 25,
    isBenefit: true,
    chartColor: '#A23FEE',
    colorId: 'gradiendId2'
  },
  {
    title: 'Total orders this month',
    num: '$12,750',
    percen: 12,
    isBenefit: true,
    chartColor: '#F2271C',
    colorId: 'gradiendId3'
  },
]

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
          <div className="grid grid-cols-4 gap-x-[20px]">
            {NumbersData.map((item, index) => (
              <div
                key={index}
                className="w-full p-[24px] h-[120px] rounded-[6px] bg-white flex items-center justify-between"
              >
                <div className="flex flex-col h-full">
                  <h6 className="text-[24px] text-[#4094F7] font-bold">
                    {item.num}
                  </h6>
                  <span className="block mt-auto text-[14px] text-[#6E8BB7] ">
                    {item.title}
                  </span>
                </div>
                <div className="w-[72px] h-[72px] bg-[rgba(64,148,247,0.15)] flex items-center justify-center rounded-[6px]">
                  <img src={item.icon} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-[20px]">
            <div className="w-1/4 grid grid-row-3 gap-y-[20px]">
              {GraphicChartData.map((item, index) => (
                <AreaChartContent chartData={item} key={index} />
              ))}
            </div>
            <div className="w-3/4 grid grid-col-2 gap-x-[20px]">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
