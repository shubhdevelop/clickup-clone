import { PlusCircle } from 'lucide-react';
import TableItem from './TableItem';
import { useState } from 'react';

export default function Table() {
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  return (
    <div className="w-full h-96 overflow-y-scroll overflow-x-auto">
      <table className="w-full relative">
        {/* Table Heading */}
        <tr className="flex justify-between items-center flex-row text-xs  z-50 text-gray-600 border-y-[1px] sticky top-0 left-0 bg-white">
          <th className=" text-left font-normal  py-2 pl-6 cursor-pointer border-y-none flex absolute justify-center items-center ">
            <input
              type="checkbox"
              name=""
              id=""
              className="absolute left-3 z-50"
              checked={isAllSelected}
              onChange={() => setIsAllSelected((prev) => !prev)}
            />
          </th>
          <th className="w-full  text-left font-normal hover:bg-gray-200 py-2 cursor-pointer pl-10">Name</th>
          <th className="w-full  text-left font-normal hover:bg-gray-200 py-2 pl-2 cursor-pointer">Location</th>
          <th className="w-full  text-left font-normal hover:bg-gray-200 py-2 pl-2 cursor-pointer">Tags </th>
          <th className="w-full  text-left font-normal hover:bg-gray-200 py-2 pl-2 cursor-pointer ">Date Updated</th>
          <th className="w-full  text-left font-normal hover:bg-gray-200 py-2 pl-2 cursor-pointer">Date Viewed</th>
          <th className="w-full  text-left font-normal hover:bg-gray-200 py-2 pl-2 cursor-pointer"> Sharing</th>
          <th className="w-auto text-left font-normal hover:bg-gray-200 py-2 pl-2 cursor-pointer">
            <PlusCircle size={15} />
          </th>
        </tr>
        {/* Table items goes here */}
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
        <TableItem selected={isAllSelected} />
      </table>
    </div>
  );
}
