import React, { useEffect, useState } from 'react'
import { Modal, ModalBody } from 'reactstrap'
type CarsType = {
    id: number,
    name: string,
    price: number,
    position: string,
    color: string,
    year: number
  }
interface CarModal {
    open: boolean;
    toggle: ()=> void;
    cars: Array<CarsType>
    setCars: React.Dispatch<React.SetStateAction<CarsType[]>>;
    edit: CarsType | null 
}
const AddCarModal: React.FC<CarModal> = ({open, toggle, cars, setCars, edit}) => {
    const [Name, setName] = useState<string>("")
    const [Price, setPrice] = useState<string>("")
    const [Position, setPosition] = useState<string>("")
    const [Color, setColor] = useState<string>("")
    const [Year, setYear] = useState<string>("")
    useEffect(() => {
        if (edit) {
          setName(edit.name);
          setPrice(edit.price.toString());
          setPosition(edit.position);
          setColor(edit.color);
          setYear(edit.year.toString());
        }else{
          setName("");
          setPrice("");
          setPosition("");
          setColor("");
          setYear("");
        }
      }, [edit]);
    const AddCar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let payload: CarsType = {
          id: cars.length + 1,
          name: Name,
          price: +Price,
          position: Position,
          color: Color,
          year: +Year
        };
        if (edit !== null) {
          const updatedCars = cars.map(car => {
            if (car.id === edit.id) {
              return {
                ...car,
                name: Name,
                price: +Price,
                position: Position,
                color: Color,
                year: +Year
              };
            }
            return car;
          });
          setCars(updatedCars);
        } else {
          setCars([...cars, payload]);
        }
        toggle()
      };
      
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalBody>
            <h1 className='text-[24px] font-[700] text-center'>Add Car</h1>
            <form onSubmit={AddCar}>
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name...' className='form-control my-2' defaultValue={Name}/>
                <input onChange={(e)=>setPrice(e.target.value)} type="number" placeholder='Price...' className='form-control my-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' defaultValue={Price}/>
                <input onChange={(e)=>setPosition(e.target.value)} type="text" placeholder='Position...' className='form-control my-2' defaultValue={Position}/>
                <input onChange={(e)=>setColor(e.target.value)} type="text" placeholder='Color...' className='form-control my-2' defaultValue={Color}/>
                <input onChange={(e)=>setYear(e.target.value)} type="number" placeholder='Year...' className='form-control my-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' defaultValue={Year}/>
                <button type='submit' className='px-[15px] py-[8px] rounded-md bg-violet-500 text-white'>Save</button>
            </form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default AddCarModal
