"use client"
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import AddCarModal from "../addcarmodal/page";
import DeleteModal from "../deletecarmodal/page";

type CarsType = {
  id: number,
  name: string,
  price: number,
  position: string,
  color: string,
  year: number
}
type EditType = CarsType | null
type DeleteType = string | number
const CarsTable = () => {
  const [cars, setCars] = useState<Array<CarsType>>([
    {id: 1, name: "Cobalt", price: 14000, position: "full position", color: "darkblue", year: 2024},
    {id: 2, name: "Onix", price: 18000, position: "5th position", color: "white", year: 2023},
  ])
  const [deleteModal, setDeletModal] = useState<boolean>(false)
  const [addCar, setAddCar] = useState<boolean>(false)
  const [edit, setEdit] = useState<EditType>(null)
  const [deleteId, setDeleteId] = useState<DeleteType>("")
  const toggle =()=> {
    setEdit(null)
    setAddCar(false)
    setDeletModal(false)
  }
  const updateCar =(item:CarsType)=> {
    setEdit(item)
    setAddCar(true)
  }
  const removeCar =(id:number)=> {
    setDeletModal(true)
    setDeleteId(id)
  }
  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center gap-[20px] mt-[30px]">
      <AddCarModal open={addCar} toggle={toggle} setCars={setCars} cars={cars} edit={edit}/>
      <DeleteModal open={deleteModal} toggle={toggle} id={deleteId} setCars={setCars} cars={cars}/>
      <h1>CarsTable</h1>
      <div className="row w-[100%]">
        <div className="col-8 offset-2">
          <button onClick={()=>setAddCar(true)} className="my-[20px] px-[15px] py-[8px] bg-violet-600 text-white rounded-md">Add +</button>
          <table className="table table-bordered w-[100%] table-striped">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>Price</th>
                <th>Position</th>
                <th>Color</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{
              cars?.map((item,index)=> {
                return <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.position}</td>
                  <td>{item.color}</td>
                  <td>{item.year}</td>
                  <td>
                      <button onClick={()=>updateCar(item)}><FaRegEdit className="text-[22px] ml-[10px] text-blue-400"/></button>
                      <button onClick={()=>removeCar(item.id)}><RiDeleteBin6Fill className="text-[22px] ml-[10px] text-red-600"/></button>
                  </td>
                </tr>
              })}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CarsTable;
