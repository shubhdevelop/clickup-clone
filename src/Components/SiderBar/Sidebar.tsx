import {
  ChevronDown,
  ChevronRight,
  Columns2,
  File,
  HelpCircle,
  //   HelpCircle,
  Home,
  Inbox,
  LucideLayoutGrid,
  MoreHorizontalIcon,
  PinIcon,
  Plus,
  Search,
  ShipWheel,
  SquareKanban,
  Star,
  Timer,
  UserRoundPlus,
  //   UserRoundPlus,
  Video,
} from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  return (
    <div
      className={`flex flex-col h-full justify-between  bg-[#f7f8f9] pt-2 pr-2 pl-2 font-normal text-gray-600 ${isCollapsed ? 'w-12' : 'w-72'}`}
    >
      <div>
        <div className="flex justify-between h-10 items-center w-full px-1 py-1 text-sm border-b-[1px] ">
          {isCollapsed ? (
            <div className="p-3 my-1 rounded-sm bg-green-500 h-5 w-5 flex justify-center items-center gap-1  cursor-pointer">
              S
            </div>
          ) : (
            <div className="flex  cursor-pointer px-2 py-1 rounded-md justify-between items-center gap-1 hover:bg-gray-200 w-[80%]">
              <div className="p-3 rounded-sm bg-green-500/[.3] h-5 w-5 flex justify-center items-center gap-1"> S </div>
              {isCollapsed ? null : <p className="w-full font-medium text-xm">Shubham's Work..</p>}

              <ChevronDown width={15} />
            </div>
          )}
          <div
            className={`cursor-pointer hover:bg-gray-200 rounded-md p-1 ${isCollapsed ? 'absolute left-12 z-50' : ''}`}
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            <Columns2 size={20} />
          </div>
        </div>

        {/* Navlinks */}
        <div className="py-2 flex flex-col gap-1 border-b-[1px]">
          <NavLink
            to="/home"
            className="w-auto flex items-center justify-start px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
          >
            <Home size={20} strokeWidth="2" />
            {isCollapsed ? null : <p>Home</p>}
          </NavLink>
          <NavLink
            to="/inbox"
            className="w-full flex items-center justify-start px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
          >
            <Inbox size={20} strokeWidth="2" />
            {isCollapsed ? null : <p>Inbox</p>}
          </NavLink>
          <NavLink
            to="/docs"
            className="w-full flex items-center justify-start px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
          >
            <File size={20} strokeWidth="2" />
            {isCollapsed ? null : <p>Docs</p>}
          </NavLink>
          <NavLink
            to="/Dashboard"
            className="w-full flex items-center justify-sta   <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />rt px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
          >
            <SquareKanban size={20} className="rotate-180" />
            {isCollapsed ? null : <p>Dashboard</p>}
          </NavLink>
          <NavLink
            to="/clips"
            className="w-full flex items-center justify-start px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
          >
            <Video size={20} strokeWidth="2" />
            {isCollapsed ? null : <p>Clips</p>}
          </NavLink>
          <NavLink
            to="/timesheet"
            className="w-full flex items-center justify-start px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
          >
            <Timer size={20} strokeWidth="2" />
            {isCollapsed ? null : <p>Timesheet</p>}
          </NavLink>
          <NavLink
            to="/more"
            className="w-full flex items-center justify-start px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
          >
            <MoreHorizontalIcon size={20} strokeWidth="2" />
            {isCollapsed ? null : <p>More</p>}
          </NavLink>
        </div>
        {isCollapsed ? (
          <div>
            <NavLink
              to="/favorites"
              className="w-full flex items-center justify-start px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
            >
              <Star size={20} strokeWidth="2" />
            </NavLink>
            <NavLink
              to="/spaces"
              className="w-full flex items-center justify-start px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
            >
              <LucideLayoutGrid size={20} strokeWidth="2" />
            </NavLink>
          </div>
        ) : (
          <div className=" mt-2">
            <div className="flex justify-between items-center cursor-pointer">
              <div className="flex justify-center items-center text-xs font-bold text-gray-600 gap-1 px-2 py-2">
                Favorites <ChevronRight size={15} />
              </div>
              <div className="p-2 rounded-md hover:bg-gray-500/[.2] cursor-pointer">
                <PinIcon size={15} />
              </div>
            </div>
            <div className="flex justify-between  cursor-pointer items-center">
              <div className="flex justify-center items-center text-xs font-bold text-gray-600 gap-1 px-2 py-2">
                Spaces
              </div>
              <div className="flex gap-2">
                <div className="p-2 rounded-md hover:bg-gray-500/[.2] cursor-pointer">
                  <MoreHorizontalIcon size={15} />
                </div>{' '}
                <div className="p-2 rounded-md hover:bg-gray-500/[.2] cursor-pointer">
                  <Search size={15} />
                </div>{' '}
                <div className="p-2 rounded-md hover:bg-gray-500/[.2] cursor-pointer">
                  <Plus size={15} />
                </div>
              </div>
            </div>
            <div className="p-1 mt-2">
              <NavLink
                to="/everything"
                className="w-full flex items-center justify-start px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
              >
                <ShipWheel size={20} strokeWidth="2" />
                <p>Everything</p>
              </NavLink>{' '}
              <NavLink
                to="/all-spaces"
                className="w-full flex items-center justify-start px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
              >
                <LucideLayoutGrid size={20} strokeWidth="2" />
                <p>View all Spaces</p>
              </NavLink>{' '}
              <NavLink
                to="/create-spaces"
                className="w-full flex items-center justify-start px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
              >
                <Plus size={20} strokeWidth="2" />
                <p>Create Spaces</p>
              </NavLink>
            </div>
          </div>
        )}
      </div>
      {isCollapsed ? (
        <div>
          <NavLink
            to="/invite"
            className="w-full flex items-center justify-start px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
          >
            <UserRoundPlus size={20} strokeWidth="2" />
          </NavLink>
          <NavLink
            to="/help"
            className="w-full flex items-center justify-start px-2 py-2 gap-2 text-gray-600 text-sm hover:bg-gray-200 cursor-pointer rounded-md"
          >
            <HelpCircle size={20} strokeWidth="2" />
          </NavLink>
        </div>
      ) : (
        <div className="w-full flex flex-row justify-center items-center  text-sm border-t-[.5px]">
          <NavLink
            to="/invite"
            className="flex justify-center p-2 items-center w-full border-r-[1px] gap-1 hover:bg-gray-200 cursor-pointer"
          >
            <UserRoundPlus size={15} />
            Invite
          </NavLink>

          <NavLink
            to="/help"
            className="flex justify-center items-center w-full gap-1 p-2 hover:bg-gray-200 cursor-pointer"
          >
            <HelpCircle size={15} /> Help
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
