import { useState } from 'react';


const items = [
  {
    key: '1',
    label: 'Курьер в пути',
    count: 10,
  },
  {
    key: '2',
    label: 'Новый',
    count: 12,
  },
  {
    key: '3',
    label: 'Оператор принял',
    count: 12
  },
  {
    key: '4',
    label: 'Загатовка',
    count: 5
  },
  {
    key: '5',
    label: 'Завершен',
    count: 120
  },
  {
    key: '6',
    label: 'Все заказы',
    count: 1
  },
];

const OrderTabs = () => {
  const [active , setActive] = useState('1');
  const [tabItems , setTabItems] = useState(items);

  return (
    <div className="flex gap-x-[12px] h-[56px] items-center border-b">
      {
        tabItems.map(({key, label, count}) => (
          <button style={{boxShadow: `${active === key ? '0px -4px 0px 0px #3593F9 inset' : ''}`}} onClick={() => setActive(key)} className={`h-full text-[14px] font-medium flex items-center ${active === key ? 'text-[#4094F7]' : 'text-[#6E8BB7]'}`} key={key}>
            <span>{label}</span>
            <div className={`${active === key ? 'bg-[#4094F7]' : 'bg-[#6E8BB7BF]'} font-semibold text-[12px] text-white ml-[8px] h-[24px] px-[8px] flex items-center justify-center rounded-full`}>{count}</div>
          </button>
        ))
      }
    </div>
  )
}

export default OrderTabs