import { useState } from "react";
import { Input, Select } from "antd";
import InputMask from "react-input-mask";
import { PiXBold } from "react-icons/pi";
import { FaEquals, FaMinus, FaPlus } from "react-icons/fa6";
import { TbSum } from "react-icons/tb";
import { MdMonetizationOn, MdDirectionsCarFilled } from "react-icons/md";
import TitleWithBorderB from "../TitleWithBorderB";
import BankImg from "../../assets/bank.svg";
import PaymeImg from "../../assets/payme.svg";
import ClickImg from "../../assets/click.svg";
import CashImg from "../../assets/cash.svg";

const paymentTypes = [
  { Img: <img src={CashImg} />, title: "cash" },
  { Img: <img src={PaymeImg} />, title: "payme" },
  { Img: <img src={ClickImg} />, title: "click" },
  { Img: <img src={BankImg} />, title: "bank" },
];

const AddOrderContent = () => {
  const [paymentType, setPaymentType] = useState("cash");
  const [phones, setPhones] = useState([
    { phone: "", id: 1, type: "old", desc: "" },
  ]);

  const addPhone = () => {
    const newPhone = { phone: "", id: Date.now(), type: "new" };
    setPhones([...phones, newPhone]);
  };
  const handlePhoneChange = (value, index) => {
    const newPhones = [...phones];
    newPhones[index].phone = value;
    console.log(newPhones);

    setPhones(newPhones);
  };
  const deletePhone = (id) => {
    const newPhones = phones.filter((item) => item.id !== id);
    setPhones(newPhones);
  };

  return (
    <div className="px-[16px] mb-[41px] pt-[20px] font-inter">
      <div className="grid grid-cols-2 gap-x-[20px]">
        <div className="w-full bg-white rounded-[6px] pt-[8px]">
          <TitleWithBorderB>Клиент</TitleWithBorderB>
          <div className="p-[16px]">
            <div className="mb-[20px] items-center flex gap-x-[16px]">
              <h2 className="w-[96px] font-semibold text-[#48535B]">
                Тип клиента
              </h2>
              <div className="w-[calc(100%-96px)]">
                <Select
                  defaultValue={""}
                  options={[
                    { value: "", label: "Тип клиента" },
                    { value: "vip", label: "VIP" },
                  ]}
                  style={{ width: "100%" }}
                  className="bg-white-select"
                />
              </div>
            </div>
            <div className="mb-[20px] items-center flex gap-x-[16px]">
              <h2 className="w-[96px] font-semibold text-[#48535B]">Имя</h2>
              <div className="w-[calc(100%-96px)]">
                <Input placeholder="Введите имя" />
              </div>
            </div>
            <div className="mb-[20px] items-center flex gap-x-[16px]">
              <h2 className="w-[96px] font-semibold text-[#48535B]">Фамилия</h2>
              <div className="w-[calc(100%-96px)]">
                <Input placeholder="Фамилия" />
              </div>
            </div>
            {phones.map(({ phone, id, type }, index) => (
              <div
                className="flex mb-[20px] items-center gap-x-[16px]"
                key={id}
              >
                <h2 className="w-[96px] font-semibold text-[#48535B]">
                  Телефон
                </h2>
                <div className="w-[calc(100%-128px)]">
                  <InputMask
                    mask={"+\\9\\98 (99) 999-99-99"}
                    className="w-full outline-none focus-within:border-[#1677ff] h-[32px] pl-[12px] border border-[#d9d9d9] rounded-[6px]"
                    placeholder="Телефон"
                    value={phone}
                    onChange={(evt) =>
                      handlePhoneChange(evt.target.value, index)
                    }
                  />
                </div>
                <button
                  type="button"
                  onClick={type === "old" ? addPhone : () => deletePhone(id)}
                  className="flex items-center justify-center rounded-[6px] h-[32px] bg-[#4094F71A] w-[32px]"
                >
                  {type === "old" ? (
                    <FaPlus className="text-[#4094F7]" />
                  ) : (
                    <FaMinus className="text-[red]" />
                  )}
                </button>
              </div>
            ))}
            <div className="items-center flex gap-x-[16px]">
              <h2 className="w-[96px] font-semibold text-[#48535B]">
                Описание
              </h2>
              <div className="w-[calc(100%-96px)]">
                <Input placeholder="Описание" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-[6px] pt-[8px]">
          <TitleWithBorderB>Доставка</TitleWithBorderB>
          <div className="p-[16px]">
            <div className="flex  gap-x-[24px]">
              <div className="w-1/2 flex items-center">
                <h2 className="w-[96px] font-semibold text-[14px] text-[#48535B]">
                  Тип доставки
                </h2>
                <div className="w-[calc(100%-96px)] pl-[16px]">
                  <Select
                    className="bg-white-select"
                    style={{ width: "100%" }}
                    placeholder={"Тип доставки"}
                    options={[{ label: "Доставка", value: "order" }]}
                  />
                </div>
              </div>
              <div className="w-1/2 flex items-center">
                <h2 className="w-[96px] font-semibold text-[#48535B]">Тариф</h2>
                <div className="w-[calc(100%-96px)]">
                  <Select
                    className="bg-white-select"
                    style={{ width: "100%" }}
                    placeholder={"Тариф"}
                    options={[{ label: "VIP", value: "vip" }]}
                  />
                </div>
              </div>
            </div>
            <div className="flex my-[16px] items-center gap-x-[16px]">
              <h2 className="w-[96px] font-semibold text-[14px] text-[#48535B]">
                Адрес
              </h2>
              <div className="w-[calc(100%-96px)]">
                <Input placeholder="Адрес или обьект" />
              </div>
            </div>
            <div className="w-full h-[289px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10678.547694123168!2d69.25191440429185!3d41.31830179035486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0054fc3f19%3A0x3ec7893532dc8339!2sObshchezhitiye%20Konservatorii!5e0!3m2!1suz!2s!4v1706192357931!5m2!1suz!2s"
                onClick={(evt) => console.log(evt.target)}
                width={"100%"}
                height="289"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex items-center gap-x-[16px] my-[16px]">
              <h2 className="w-[96px] font-semibold text-[14px] text-[#48535B]">
                Филиал
              </h2>
              <div className="w-[calc(100%-96px)]">
                <Input placeholder="Филиал" />
              </div>
            </div>
            <div className="flex  gap-x-[24px]">
              <div className="w-1/2 flex items-center">
                <h2 className="w-[96px] font-semibold text-[14px] text-[#48535B]">
                  Дом
                </h2>
                <div className="w-[calc(100%-96px)] pl-[16px]">
                  <Input placeholder="Дом" />
                </div>
              </div>
              <div className="w-1/2 flex items-center">
                <h2 className="w-[96px] font-semibold text-[#48535B]">
                  Квартира
                </h2>
                <div className="w-[calc(100%-96px)]">
                  <Input placeholder="Квартира" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-[16px] mt-[16px]">
              <h2 className="w-[96px] font-semibold text-[14px] text-[#48535B]">
                Этаж
              </h2>
              <div className="w-[calc(100%-96px)]">
                <Input placeholder="Этаж" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] pt-[8px] border-b bg-white rounded-[6px]">
        <TitleWithBorderB>Продукты</TitleWithBorderB>
        <div className="p-[16px]">
          <div className="flex gap-x-[12px] items-center">
            <div className="w-[25%]">
              <h2 className="mb-[4px] font-semibold text-[14px] text-[#48535B]">
                Наименование
              </h2>
              <Select
                className="bg-white-select"
                style={{ width: "100%" }}
                defaultValue={"Клаб сендвич"}
                options={[{ label: "Клаб сендвич", value: "Клаб сендвич" }]}
              />
            </div>
            <div className="w-[45%]  flex items-center">
              <div className="w-[30%] pr-[12px]">
                <h2 className="mb-[4px] font-semibold text-[14px] text-[#48535B]">
                  Цена
                </h2>
                <Input value={"26 000 сум"} />
              </div>
              <div className="w-[40%] flex ">
                <PiXBold className="self-center mt-[25px] mr-[12px] text-[20px] text-[#4094F7]" />
                <div className="">
                  <h2 className="mb-[4px] font-semibold text-[14px] text-[#48535B]">
                    Кол-во
                  </h2>
                  <div className="flex items-center rounded-lg border border-[#d9d9d9]">
                    <button
                      type="button"
                      className="h-[32px] w-[32px] flex items-center justify-center border-r border-l-[#d9d9d9] text-[#4094F7]"
                    >
                      <FaMinus />
                    </button>
                    <button type="button" className="h-[32px] w-[64px]">
                      1
                    </button>
                    <button
                      type="button"
                      className="h-[32px] w-[32px] flex items-center justify-center border-l border-l-[#d9d9d9] text-[#4094F7]"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <FaEquals className="ml-[12px] text-[20px] text-[#4094F7] self-center mt-[23px]" />
              </div>
              <div className="w-[30%]">
                <h2 className="mb-[4px] font-semibold text-[14px] text-[#48535B]">
                  Общая стоимость
                </h2>
                <Input value={"52 000 сум"} />
              </div>
            </div>
            <div className="w-[30%]">
              <h2 className="mb-[4px] font-semibold text-[14px] text-[#48535B]">
                Описание
              </h2>
              <div className="flex items-center">
                <div className="w-[calc(100%-32px)] pr-[12px]">
                  <Input />
                </div>
                <button
                  type="button"
                  className="flex items-center rounded-lg bg-[#F766591A] text-[#F76659] justify-center h-[32px] w-[32px]"
                >
                  <PiXBold />
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            disabled
            className="mt-[24px] w-full rounded-lg block border bg-[rgba(64,148,247,0.10)] disabled:border-dashed text-[#4094F7] disabled:text-[#6E8BB7] flex items-center justify-center disabled:border-[#6E8BB780] py-[8px] disabled:bg-[#6E8BB71A]"
          >
            <FaPlus />
            <span className="ml-[10px]">Добавить продукт</span>
          </button>
        </div>
        <div className="mt-[16px] grid grid-cols-2">
          <div className="w-full border-r">
            <div className="flex px-[16px] items-center gap-x-[16px]">
              <h2 className="w-1/5 font-semibold text-[14px] text-[#48535B]">
                Типы оплаты
              </h2>
              {paymentTypes.map(({ Img, title }, index) => (
                <label
                  htmlFor={title}
                  key={index}
                  className={`relative cursor-pointer rounded-xl w-1/5 border ${
                    paymentType === title
                      ? "bg-[rgba(64,148,247,0.10)] border-[#4094F7]"
                      : "bg-[#F7F9FB]"
                  } flex items-center justify-center h-[40px]`}
                >
                  <input
                    onChange={(evt) => setPaymentType(evt.target.value)}
                    value={title}
                    className="payment-type-radio left-0 top-0 absolute invisible opacity-0"
                    type="radio"
                    name="payment-type"
                    id={title}
                  />
                  {Img}
                </label>
              ))}
            </div>
            <div className="flex items-center px-[16px] my-[16px]">
              <h2 className="w-1/5 font-semibold text-[14px] text-[#48535B]">
                Курьер
              </h2>
              <div className="w-4/5">
                <Select
                  className="bg-white-select w-full"
                  placeholder={"Курьер"}
                  options={[{ label: "Diyorbek", value: "Diyorbek" }]}
                />
              </div>
            </div>
            <div className="flex items-center px-[16px] mb-[16px]">
              <h2 className="w-1/5 font-semibold text-[14px] text-[#48535B]">
                Оператор
              </h2>
              <div className="w-4/5">
                <Select
                  className="bg-white-select w-full"
                  placeholder={"Оператор"}
                  options={[{ label: "Diyorbek", value: "Diyorbek" }]}
                />
              </div>
            </div>
          </div>
          <div className="w-full px-[16px]">
            <div className="grid grid-cols-2 gap-x-[32px] gap-y-[16px] font-semibold border-b pb-[20px]">
              <div className="w-full flex items-center">
                <MdMonetizationOn className="text-[24px] text-[#4094F7]" />
                <span className="text-[#84919A] font-normal ml-[12px]">
                  Сумма заказа
                </span>
              </div>
              <div className="w-full text-[#303940]">2 000 000 сум</div>
              <div className="w-full flex items-center">
                <MdDirectionsCarFilled className="text-[24px] text-[#4094F7] " />
                <span className="text-[#84919A] font-normal ml-[12px]">
                  Сумма доставки
                </span>
              </div>
              <div className="w-full">10 000 сум</div>
            </div>
            <div className="grid mt-[20px] text-[#303940] grid-cols-2 gap-x-[32px] gap-y-[16px] font-semibold pb-[20px]">
              <div className="w-full flex items-center">
                <TbSum className="text-[24px] text-[#4094F7]" />
                <span className="ml-[12px]">Сумма заказа</span>
              </div>
              <div className="w-full">2 010 000 сум</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrderContent;
