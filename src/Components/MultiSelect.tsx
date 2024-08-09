import { DocState } from '@/context/context';
import axios from 'axios';
import { ArchiveIcon, Trash2, X } from 'lucide-react';

function MultiSelect() {
  const { state, dispatch } = DocState();

  function handleDelete(docIds) {
    alert(docIds);
    axios({
      method: 'delete',
      url: 'http://localhost:3000/api/v1/docs/delete',
      data: {
        docIds: docIds,
        userId: '66b496aa223bd084bd9e6195',
      },
    }).then(() => dispatch({ type: 'DELETE', payload: docIds }));
  }

  //   function handleUpdate(updateData, docIds) {
  //     axios({
  //       method: 'patch',
  //       url: 'http://localhost:3000/api/v1/docs/',
  //       data: {
  //         docIds: docIds,
  //         updateData: updateData,
  //       },
  //     }).then((res) => dispatch({ type: 'UPDATE', payload: res.data.data }));
  //   }

  return (
    <div
      className={`w-[70%] ${state.selected.length == 0 ? 'hidden' : ''} p-2 absolute bottom-10 left-[15%] mx-auto  z-50 bg-black/[.9] flex justify-between items-center rounded-md`}
    >
      <div
        className="text-white/[.8] flex justify-center items-center border-[.2px] border-white/[.5] p-1 gap-1 text-sm rounded-md cursor-pointer"
        onClick={() => dispatch({ type: 'UNSELECT_ALL' })}
      >
        {state.selected.length} Doc selected <X size={15} />
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="text-white/[.8] flex justify-center items-center  p-1 gap-2 text-sm rounded-md cursor-pointer">
          <ArchiveIcon size={15} color="white" /> Archive
        </div>
        <div
          className="text-white/[.8] flex justify-center items-center  p-1 gap-1 text-sm rounded-md cursor-pointer"
          onClick={() => handleDelete(state.selected.map((el) => el._id))}
        >
          <Trash2 size={15} color="red" /> Delete
        </div>
      </div>
    </div>
  );
}

export default MultiSelect;
