import React from 'react'
import AnaliticsIcon from "../../assets/analiticsIcon.svg";
import SuperviserIcon from "../../assets/supervisor_account.svg";
import ShoppingBasket from "../../assets/shopping_basket.svg";
import Assignment from "../../assets/assignment.svg";
import Store from "../../assets/store.svg";
import StarRate from "../../assets/star_rate.svg";
import HistoryIcon from "../../assets/history.svg";
import Settings from "../../assets/settings.svg";
import Notifications from "../../assets/notifications.svg";
import Ellipse from "../../assets/Ellipse.png";

const Aside = () => {
  return (
    <div className="w-[64px] bg-white p-[12px] flex flex-col">
        <div className="w-[40px] text-[22px] font-semibold  cursor-pointer rounded-full text-white flex items-center justify-center h-[40px] bg-[#0E73F6]">
          D
        </div>
        <ul className="flex flex-col mt-[24px] bg-[#F0F3F8] rounded-[6px]">
          <li className="cursor-pointer w-[40px] h-[40px] bg-[#4094F7] rounded-[6px] flex items-center justify-center">
            <img src={AnaliticsIcon} alt="analitics" />
          </li>
          <li className="cursor-pointer w-[40px] h-[40px] rounded-[6px] flex items-center justify-center">
            <img src={SuperviserIcon} alt="analitics" />
          </li>
          <li className="cursor-pointer w-[40px] h-[40px] rounded-[6px] flex items-center justify-center">
            <img src={ShoppingBasket} alt="analitics" />
          </li>
          <li className="cursor-pointer w-[40px] h-[40px] rounded-[6px] flex items-center justify-center">
            <img src={Assignment} alt="analitics" />
          </li>
          <li className="cursor-pointer w-[40px] h-[40px] rounded-[6px] flex items-center justify-center">
            <img src={Store} alt="analitics" />
          </li>
          <li className="cursor-pointer w-[40px] h-[40px] rounded-[6px] flex items-center justify-center">
            <img src={StarRate} alt="analitics" />
          </li>
          <li className="cursor-pointer w-[40px] h-[40px] rounded-[6px] flex items-center justify-center">
            <img src={HistoryIcon} alt="analitics" />
          </li>
          <li className="cursor-pointer w-[40px] h-[40px] rounded-[6px] flex items-center justify-center">
            <img src={Settings} alt="analitics" />
          </li>
        </ul>
        <div className="mt-auto flex flex-col items-center">
          <img src={Notifications} className="cursor-pointer" alt="notify" />
          <div className="mt-[24px] w-[40px] h-[40px] rounded-full cursor-pointer">
            <img src={Ellipse} alt="ellipse" />
          </div>
        </div>
      </div>
  )
}

export default Aside