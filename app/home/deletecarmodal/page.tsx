import React from "react";
import { Modal, ModalBody } from "reactstrap";
import DeleteImage from "../../../Assets/delete.jpg"
import Image from "next/image";
type CarsType = {
  id: number;
  name: string;
  price: number;
  position: string;
  color: string;
  year: number;
};
type DeleteType = string | number;

interface CarModal {
  open: boolean;
  toggle: () => void;
  id: DeleteType;
  cars: Array<CarsType>;
  setCars: React.Dispatch<React.SetStateAction<CarsType[]>>;
}
const DeleteModal: React.FC<CarModal> = ({
  open,
  toggle,
  id,
  cars,
  setCars,
}) => {
  const deleteCar = () => {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
    toggle();
  };
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalBody>
          <div className="flex items-center flex-col gap-[10px]">
            <Image src={DeleteImage} alt="deleteimage" className="w-[150px] h-[150px]"/>
            <h1 className="text-[24px]">Are you sure, you want to delete?</h1>
            <div className="flex gap-[10px]">
              <button onClick={toggle} className="px-[15px] py-[8px] rounded-md text-white bg-emerald-300">
                cancel
              </button>
              <button
                onClick={deleteCar}
                className="px-[15px] py-[8px] rounded-md text-white bg-red-600"
              >
                delete
              </button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DeleteModal;
