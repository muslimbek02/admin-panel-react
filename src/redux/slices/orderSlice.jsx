import { createSlice } from "@reduxjs/toolkit";
import TableActionButton from "../../components/TableActionButton";

const columns = [
  {
    title: "№",
    dataIndex: "num",
  },
  {
    title: "Клиент",
    dataIndex: "client",
    render: (client) => (
      <div className="text-[14px]">
        <p className="text-[#303940] mb-[8px]">{client.name}</p>
        <a href={`tel:${client.phone}`} className="text-[#4094F7] font-medium">
          {client.phone}
        </a>
      </div>
    ),
  },
  {
    title: "Ид.заказа",
    dataIndex: "orderId",
  },
  {
    title: "Таймер",
    dataIndex: "timer",
    render: (timer) => (
      <div className="bg-[#38D9B933] rounded-[6px] text-[#1AC19D] font-medium text-center py-[4px] px-[12px]">
        {timer}
      </div>
    ),
  },
  {
    title: "Курьер",
    dataIndex: "kuryer",
  },
  {
    title: "Филиал",
    dataIndex: "part",
    render: (client) => (
      <div className="text-[14px]">
        <p className="text-[#303940] mb-[8px]">{client.name}</p>
        <a href={`tel:${client.phone}`} className="text-[#4094F7] font-medium">
          {client.phone}
        </a>
      </div>
    ),
  },
  {
    title: "Тип доставки",
    dataIndex: "type",
    render: (type) => (
      <div className="bg-[#F8DD4E4D] rounded-[6px] text-[#D29404] font-medium text-center py-[4px] px-[12px]">
        {type}
      </div>
    ),
  },
  {
    title: "Цена заказа",
    dataIndex: "price",
  },
  {
    title: "Адресс клиента",
    dataIndex: "address",
  },
  {
    title: (
      <TableActionButton />
    ),
    dataIndex: "action",
    render: () => (
      <TableActionButton/>
    ),
    className: "action-col",
  },
];

const initialState = {
  order: {
    client: {
      type: '',
      name: "",
      surname: "",
      phones: [''],
      description: "",
    },
      orderId: "",
      date: "",
      timer: "",
      status: "",
      orderType: '',
      orderTariff: '',
      address: '',
      branch: '',
      home: '',
      apartment: '',
      floor: '',
    products: [
      {
        title: '',
        price: '',
        count: '',
        desc: '',
  
      }
    ],
    payment: {
      paymentType: '',
      courier: '',
      operator: '',
      deliveryPrice: ''
    }
  },
  columnsStatus: {
    num: true,
    client: true,
    orderId: true,
    timer: true,
    courier: true,
    branch: true,
    orderType: true,
    orderPrice: true,
    status: true,
  },
  columns,
  orderList: []
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;
