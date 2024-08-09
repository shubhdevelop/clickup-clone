import { PlusCircle } from 'lucide-react';
import TableItem from './TableItem';

import { DocState } from '@/context/context';

import { CurrFilter } from './DocLayout';

export default function Table({ filter }: { filter: CurrFilter }) {
  const { state, dispatch } = DocState();
  const filteredItem = [];
  if (state.data && state.data.length > 0) {
    state.data.forEach((el) => {
      if (el[filter] || filter == 'all' || filter == 'my_docs') filteredItem.push(el);
    });
  }

  return (
    <div className="w-full h-96 overflow-y-scroll overflow-x-auto">
      <table className="w-full relative">
        {/* Table Heading */}
        <thead>
          <tr className="flex justify-between items-center flex-row text-xs  z-50 text-gray-600 border-y-[1px] sticky top-0 left-0 bg-white">
            <th className=" text-left font-normal  py-2 pl-6 cursor-pointer border-y-none flex absolute justify-center items-center ">
              <input
                type="checkbox"
                name=""
                id=""
                className="absolute left-3 z-50"
                checked={state.selected.length == state.data.length}
                onChange={() => {
                  if (state.selected.length == state.data.length) {
                    dispatch({ type: 'UNSELECT_ALL' });
                  } else {
                    dispatch({ type: 'SELECT_ALL' });
                  }
                }}
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
        </thead>
        {/* Table items goes here */}
        {filteredItem.map((el) => (
          <TableItem data={el} key={el._id} />
        ))}
      </table>
    </div>
  );
}
