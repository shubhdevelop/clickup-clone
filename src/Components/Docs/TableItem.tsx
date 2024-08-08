import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  ArchiveIcon,
  Copy,
  File,
  Link,
  MoreHorizontalIcon,
  MoveLeft,
  Pen,
  Plus,
  Share2Icon,
  Trash2,
  Users,
  Wand2,
} from 'lucide-react';
import { useState } from 'react';

function TableItem({ selected }: { selected: boolean }) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <tr
      className={`flex justify-between items-center flex-row text-xs  text-gray-600 border-y-[.5px] py-2 cursor-pointer  ${isSelected || selected ? 'bg-purple-300/[.3] border-purple-300' : 'hover:bg-gray-100'} min-w-20  bg-white`}
    >
      <td className=" text-left font-normal  py-2 pl-6 cursor-pointer border-y-none flex  justify-center items-center ">
        <input
          type="checkbox"
          checked={isSelected || selected}
          name=""
          id=""
          className="  accent-purple-300 absolute left-[10px] bg-gray-100 border-gray-300 rounded-lg "
          onClick={() => setIsSelected((prev) => !prev)}
        />
      </td>
      <td className="w-full text-left font-normal pl-2  flex justify-start  gap-1 items-center">
        <File size={15} /> <p>Docs</p>
      </td>
      <td className="w-full text-left font-normal pl-2  flex justify-start  gap-1 items-center">
        <Users size={15} /> Everything
      </td>
      <td className="w-full text-left font-normal pl-2 ">-</td>
      <td className="w-full text-left font-normal pl-2 ">10:12 am</td>
      <td className="w-full text-left font-normal pl-2 "> 10:12 am</td>
      <td className="w-full text-left font-normal pl-2 ">
        <Share2Icon size={15} />
      </td>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <td className="flex text-right justify-start gap-1 items-center hover:bg-gray-200 py-1 px-1 rounded-md">
            <MoreHorizontalIcon size={15} />
          </td>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative right-10 bottom-0 w-52">
          <DropdownMenuItem className="text-sm">
            <Link size={20} strokeWidth={1} className="mr-2" /> Copy link
          </DropdownMenuItem>

          <DropdownMenuItem className="text-sm">
            <Pen size={20} strokeWidth={1} className="mr-2" /> Rename
          </DropdownMenuItem>
          <DropdownMenuItem className="text-sm">
            <Copy size={20} strokeWidth={1} className="mr-2" /> Duplicate
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
          <DropdownMenuItem className="text-sm">
            <ArchiveIcon size={20} strokeWidth={1} className="mr-2" /> Archive
          </DropdownMenuItem>
          <DropdownMenuItem className="text-sm text-red-700">
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
  );
}

export default TableItem;
