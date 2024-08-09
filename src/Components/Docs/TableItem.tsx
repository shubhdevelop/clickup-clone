import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  ArchiveIcon,
  ArchiveRestore,
  File,
  Globe2,
  Link,
  MoreHorizontalIcon,
  MoveLeft,
  Pen,
  PersonStandingIcon,
  Plus,
  Share2Icon,
  Star,
  Trash2,
  Users,
  Wand2,
} from 'lucide-react';
import { Data } from './DocLayout';
import { Link as RLink } from 'react-router-dom';
import axios from 'axios';
import { DocState } from '@/context/context';

function TableItem({ data }: { data: Data | undefined }) {
  const { state, dispatch } = DocState();

  function handleDelete(docIds) {
    axios({
      method: 'delete',
      url: 'https://clickup-server.onrender.com/api/v1/docs/delete',
      data: {
        docIds: docIds,
        userId: '66b496aa223bd084bd9e6195',
      },
    }).then(() => dispatch({ type: 'DELETE', payload: data._id }));
  }

  function handleUpdate(updateData, docIds) {
    axios({
      method: 'patch',
      url: 'https://clickup-server.onrender.com/api/v1/docs/',
      data: {
        docIds: docIds,
        updateData: updateData,
      },
    }).then((res) => dispatch({ type: 'UPDATE', payload: res.data.data }));
  }

  const isInSelected = state.selected.some((el) => el._id == data._id);

  return (
    <tbody>
      <tr
        className={` doc-name flex justify-between items-center flex-row text-xs  text-gray-600 border-y-[.5px] py-2 cursor-pointer  ${isInSelected ? 'bg-purple-200/[.5] border-purple-300' : 'hover:bg-gray-100'} min-w-20  bg-white`}
      >
        <td className=" text-left font-normal  py-2 pl-6 cursor-pointer border-y-none flex  justify-center items-center ">
          <input
            type="checkbox"
            name=""
            id=""
            checked={isInSelected}
            className="  accent-purple-300 absolute left-[10px] bg-gray-100 border-gray-300 rounded-lg "
            onChange={() => {
              if (isInSelected) {
                dispatch({ type: 'UNSELECT_ONE', payload: data });
              } else {
                dispatch({ type: 'SELECT_ONE', payload: data });
              }
            }}
          />
        </td>
        <td className="w-full group text-left  pl-2  flex justify-start  gap-2 items-center font-semibold cursor-pointer">
          <File size={15} /> <RLink to={data._id}>{data.title}</RLink>{' '}
          <div className="p-[3px] group-hover:block hidden bg-white rounded-md border-[.2px] hover:bg-gray-500/[.3] ">
            <Link size={13} strokeWidth={3} />
          </div>
          <div className="p-[3px] group-hover:block hidden bg-white rounded-md border-[.2px] hover:bg-gray-500/[.3] ">
            <Star size={13} strokeWidth={3} />
          </div>
          <div
            className="p-[3px] group-hover:block hidden rounded-md border-[.2px] hover:bg-gray-500/[.3]  bg-white"
            onClick={() => handleUpdate({ title: 'updated title' }, [data._id])}
          >
            <Pen size={13} strokeWidth={3} />
          </div>
        </td>
        <td className="w-full text-left font-normal pl-2  flex justify-start  gap-1 items-center">
          <Users size={15} /> {data.location}
        </td>
        <td className="w-full text-left font-normal pl-2 "> -</td>
        <td className="w-full text-left font-normal pl-2 ">{data.createdAt}</td>
        <td className="w-full text-left font-normal pl-2 ">{data.updatedAt}</td>
        <td className="w-full text-left font-normal pl-2 ">
          <Share2Icon size={15} />
        </td>
        <DropdownMenu>
          <td className="flex text-right justify-start gap-1 items-center hover:bg-gray-200 py-1 px-1 rounded-md">
            <DropdownMenuTrigger>
              <MoreHorizontalIcon size={15} />
            </DropdownMenuTrigger>
          </td>
          <DropdownMenuContent className="relative right-10 bottom-0 w-52">
            <DropdownMenuItem className="text-sm">
              <Link size={20} strokeWidth={1} className="mr-2" /> Copy link
            </DropdownMenuItem>

            <DropdownMenuItem className="text-sm" onClick={() => handleUpdate({ title: 'updated title' }, [data._id])}>
              <Pen size={20} strokeWidth={1} className="mr-2" /> Rename
            </DropdownMenuItem>
            <DropdownMenuItem className="text-sm " onClick={() => handleUpdate({ private: !data.private }, [data._id])}>
              {!data.private ? (
                <>
                  <PersonStandingIcon size={20} strokeWidth={1} className="mr-2" /> Private
                </>
              ) : (
                <>
                  <Globe2 size={20} strokeWidth={1} className="mr-2" /> Public
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuItem className="text-sm">
              <Plus size={20} strokeWidth={1} className="mr-2" /> Add to
            </DropdownMenuItem>

            <DropdownMenuItem className="text-sm">
              <MoveLeft size={20} strokeWidth={1} className="mr-2" /> Move to
            </DropdownMenuItem>
            <DropdownMenuItem className="text-sm">
              <Wand2 size={20} strokeWidth={1} className="mr-2" /> Templates
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-sm"
              onClick={() => handleUpdate({ archived: !data.archived }, [data._id])}
            >
              {data.archived ? (
                <>
                  <ArchiveRestore size={20} strokeWidth={1} className="mr-2" /> Un Archive
                </>
              ) : (
                <>
                  <ArchiveIcon size={20} strokeWidth={1} className="mr-2" /> Archive
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuItem className="text-sm text-red-700" onClick={() => handleDelete([data._id])}>
              <Trash2 size={20} strokeWidth={1} className="mr-2" /> Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-sm p-0 ">
              <div className="flex w-full justify-center items-center gap-2 border-[1px] py-1 px-2 rounded-sm bg-blue-500 text-white">
                <p>Sharing & Permissions</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </tr>
    </tbody>
  );
}

export default TableItem;
