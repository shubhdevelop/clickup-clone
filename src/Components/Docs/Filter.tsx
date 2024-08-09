import { FilterIcon, Search } from 'lucide-react';
import { CurrFilter } from './DocLayout';

function Filter({ active, setActive }: { active: CurrFilter; setActive: (arg0: CurrFilter) => void }) {
  return (
    <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 items-start">
      <div className="justify-start items-center flex lg:gap-1 lg:text-sm text-xs gap-0 flex-wrap mr-auto">
        <div className={active === 'all' ? `border-b-2 border-purple-600` : ''} onClick={() => setActive('all')}>
          <div className="py-1 rounded-md px-2 hover:bg-gray-200 cursor-pointer text-gray-600  ">All</div>
        </div>
        <div
          className={active === 'my_docs' ? `border-b-2 border-purple-600` : ''}
          onClick={() => setActive('my_docs')}
        >
          <div className="py-1 rounded-md px-2 hover:bg-gray-200 cursor-pointer text-gray-600 ">My Docs</div>
        </div>
        <div className={active === 'shared' ? `border-b-2 border-purple-600` : ''} onClick={() => setActive('shared')}>
          <div className="py-1 rounded-md px-2 hover:bg-gray-200 cursor-pointer text-gray-600 ">Shared</div>
        </div>
        <div
          className={active === 'private' ? `border-b-2 border-purple-600` : ''}
          onClick={() => setActive('private')}
        >
          <div className="py-1 rounded-md px-2 hover:bg-gray-200 cursor-pointer text-gray-600 ">Private</div>
        </div>
        <div
          className={active === 'workspace' ? `border-b-2 border-purple-600` : ''}
          onClick={() => setActive('workspace')}
        >
          <div className="py-1 rounded-md px-2 hover:bg-gray-200 cursor-pointer text-gray-600 ">Workspace</div>
        </div>
        <div
          className={active === 'assigned' ? `border-b-2 border-purple-600` : ''}
          onClick={() => setActive('assigned')}
        >
          <div className="py-1 rounded-md px-2 hover:bg-gray-200 cursor-pointer text-gray-600 ">Assigned</div>
        </div>
        <div
          className={active === 'archived' ? `border-b-2 border-purple-600` : ''}
          onClick={() => setActive('archived')}
        >
          <div className="py-1 rounded-md px-2 hover:bg-gray-200 cursor-pointer text-gray-600">Archived</div>
        </div>
      </div>

      <div className="flex justify-center items-center ml-auto">
        <div className="flex justify-center items-center gap-2  py-1 px-2 rounded-sm text-gray-600 hover:bg-gray-200 cursor-pointer ">
          <Search size={15} /> <p className="text-sm"> Search</p>
        </div>
        <div className="flex justify-center items-center gap-2   rounded-sm text-gray-600  py-1 px-2 hover:bg-gray-200 cursor-pointer ">
          <FilterIcon size={15} /> <p className="text-sm">Filters</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
