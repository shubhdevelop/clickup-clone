import { DocState } from '@/context/context';
import axios from 'axios';
import { ChevronDown, File, Search } from 'lucide-react';

function TopSection() {
  const { dispatch } = DocState();
  function createDoc() {
    axios({
      method: 'post',
      url: 'https://clickup-server.onrender.com/api/v1/docs/new',
      data: {
        title: 'Untitled',
        docContent: {
          h1: 'Hello there',
          p: 'Nice to meet you how you doing?',
        },
        userId: '66b496aa223bd084bd9e6195',
      },
    }).then((res) => dispatch({ type: 'ADD', payload: res.data.data }));
  }

  return (
    <div className=" flex justify-between items-center w-full px-1  text-sm border-b-[1px]  pl-10 pr-1 sticky top-0 bg-white">
      <div className="flex justify-center items-center gap-2 font-light">
        <File size={15} />
        <p>Docs</p>
      </div>
      <div className="flex gap-1 font-medium py-[9px] cursor-pointer">
        <div className="flex justify-center items-center gap-2 border-[1px] py-1 px-2 rounded-sm text-gray-600">
          <Search size={15} /> <p> Search Docs</p>
        </div>
        <div
          className="flex justify-center items-center gap-2 border-[1px] py-1 px-2 rounded-sm bg-blue-500 text-white"
          onClick={createDoc}
        >
          <p className="border-r-[1px] border-gray-300 pr-2 /">Create Docs</p>
          <ChevronDown size={10} />
        </div>
      </div>
    </div>
  );
}

export default TopSection;
