import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {
    orderId: "",
    date: "",
    timer: "",
    status: "new",
    orderType: "order",
    orderTariff: "vip",
    address: "",
    branch: "",
    home: "",
    apartment: "",
    floor: "",
    client: {
      clientType: "vip",
      name: "",
      surname: "",
      phones: [{ phone: "", id: 1, type: "old", desc: "" }],
      description: "",
    },
    products: [
      {
        id: "1",
        title: "Гамбургер",
        price: 20000,
        count: 1,
        desc: "",
      },
    ],
    payment: {
      paymentType: "cash",
      courier: null,
      operator: null,
      deliveryPrice: 10000,
    },
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
  // columns,
  orderList: [],
};

export const orderSlice = createSlice({
  name: "orderState",
  initialState,
  reducers: {
    setDateOrderCreatedAt: (state, { payload }) => {
      state.order.date = payload;
    },
    setStatusOrder: (state, { payload }) => {
      state.order.status = payload;
    },
    setOrderId: (state, { payload }) => {
      state.order.orderId = payload;
    },
    setTimerOrder: (state, { payload }) => {
      state.order.timer = payload;
    },
    setOrderType: (state, { payload }) => {
      state.order.orderType = payload;
    },
    setOrderTarif: (state, { payload }) => {
      state.order.orderTariff = payload;
    },
    setClientType: (state, { payload }) => {
      state.order.client.clientType = payload;
    },
    setClientName: (state, { payload }) => {
      state.order.client.name = payload;
    },
    setClientSurName: (state, { payload }) => {
      state.order.client.surname = payload;
    },
    setClientDesc: (state, { payload }) => {
      state.order.client.description = payload;
    },
    setPhoneChanges: (state, { payload: { value, index } }) => {
      state.order.client.phones[index].phone = value;
    },
    addNewPhone: (state) => {
      const newPhone = { phone: "", id: Date.now(), type: "new" };
      state.order.client.phones.push(newPhone);
    },
    deletePhone: (state, { payload }) => {
      const newPhones = state.order.client.phones.filter(
        (item) => item.id !== payload
      );
      state.order.client.phones = newPhones;
    },
    setProductTitle: (state, { payload: { index, value, price } }) => {
      state.order.products[index].title = value;
      state.order.products[index].price = price;
    },
    incrementProductCount: (state, { payload }) => {
      state.order.products[payload].count += 1;
    },
    decrementProductCount: (state, { payload }) => {
      if (state.order.products[payload].count > 1) {
        state.order.products[payload].count -= 1;
      }
    },
    deleteProduct: (state, { payload }) => {
      const filteredProducts = state.order.products.filter(
        (item) => item.id !== payload
      );
      state.order.products = filteredProducts;
    },
    setProductDesc: (state, { payload: { index, value } }) => {
      state.order.products[index].desc = value;
    },
    addNewproduct: (state) => {
      const newProduct = {
        id: Date.now(),
        title: "Гамбургер",
        price: 20000,
        count: 1,
        desc: "",
      };
      state.order.products.push(newProduct);
    },
    setPaymentType: (state, { payload }) => {
      state.order.payment.paymentType = payload;
    },
    setCourier: (state, { payload }) => {
      state.order.payment.courier = payload;
    },
    setOperator: (state, { payload }) => {
      state.order.payment.operator = payload;
    },
    setOrderData: (state, { payload: { name, value } }) => {
      state.order[name] = value;
    },
    addNewOrder: (state, {payload}) => {
      const newOrder = {
        ...state.order,
        allPrice:
          state.order.products.reduce((sum, product) => {
            return sum + product.count * product.price;
          }, 0) + state.order.payment.deliveryPrice,
      };
      const orderIndex = state.orderList.findIndex(({orderId}) => orderId === payload);
      if(orderIndex !== -1) {
        state.orderList[orderIndex] = newOrder;
      }else{
        state.orderList.push(newOrder);
      }
    },
    setOrder: (state, {payload}) => {
      state.order = payload;
    }
  },
});

export const {
  setDateOrderCreatedAt,
  setStatusOrder,
  setTimerOrder,
  setClientType,
  setClientName,
  setClientSurName,
  setPhoneChanges,
  addNewPhone,
  deletePhone,
  setClientDesc,
  setProductTitle,
  incrementProductCount,
  decrementProductCount,
  deleteProduct,
  setProductDesc,
  addNewproduct,
  setPaymentType,
  setCourier,
  setOperator,
  setOrderTarif,
  setOrderType,
  setOrderData,
  addNewOrder,
  setOrderId,
  setOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
