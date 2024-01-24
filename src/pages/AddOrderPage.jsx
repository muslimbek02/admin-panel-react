

import Aside from "../components/Aside";
import AddOrderHeader from "../components/AddOrderHeader";

const AddOrderPage = () => {
  return (
    <div className="h-screen flex">
      <Aside />
      <div className="w-[calc(100%-64px)] h-screen overflow-y-auto">
        <AddOrderHeader/>
      </div>
    </div>
  );
};

export default AddOrderPage;
