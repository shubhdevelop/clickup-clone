import { DocState } from '@/context/context';
import axios from 'axios';
import { ArchiveIcon, ShieldOff, Trash2, X } from 'lucide-react';

function MultiSelect() {
  const { state, dispatch } = DocState();

  function handleDelete(docIds) {
    axios({
      method: 'delete',
      url: 'https://clickup-server.onrender.com/api/v1/docs/delete',
      data: {
        docIds: docIds,
        userId: '66b496aa223bd084bd9e6195',
      },
    }).then(() => {
      dispatch({ type: 'DELETE', payload: docIds });
      dispatch({ type: 'UNSELECT_ALL' });
    });
  }

  function handleUpdate(updateData, docIds) {
    axios({
      method: 'patch',
      url: 'https://clickup-server.onrender.com/api/v1/docs/',
      data: {
        docIds: docIds,
        updateData: updateData,
      },
    }).then((res) => {
      dispatch({ type: 'UPDATE', payload: res.data.data });
      dispatch({ type: 'UNSELECT_ALL' });
    });
  }

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
        <div
          className="text-white/[.8] flex justify-center items-center  p-1 gap-2 text-sm rounded-md cursor-pointer"
          onClick={() =>
            handleUpdate(
              { private: true },
              state.selected.map((el) => el._id),
            )
          }
        >
          <ShieldOff size={15} color="white" /> Make Private
        </div>
        <div
          className="text-white/[.8] flex justify-center items-center  p-1 gap-2 text-sm rounded-md cursor-pointer"
          onClick={() =>
            handleUpdate(
              { archived: true },
              state.selected.map((el) => el._id),
            )
          }
        >
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
