import { useEffect, useState } from 'react';
import Card from './Card';
import Filter from './Filter';
import Table from './Table';
import TopSection from './TopSection';
import WikiItem from './WikiItem';
import axios from 'axios';
import { DocState } from '@/context/context';
import MultiSelect from '../MultiSelect';

export type CurrFilter = 'all' | 'my_docs' | 'shared' | 'private' | 'workspace' | 'assigned' | 'archived';
export type Data = {
  _id: string;
  title: string;
  archived: boolean;
  private: boolean;
  location: string;
  content: object;
  isPublished: boolean;
  owner: string;
  contributor: string[];
  createdAt: string;
  updatedAt: string;
};

function DocLayout() {
  const [active, setActive] = useState<CurrFilter>('all');

  const { dispatch } = DocState();

  useEffect(() => {
    axios.get(`https://clickup-server.onrender.com/api/v1/docs/66b496aa223bd084bd9e6195`).then((res) => {
      dispatch({ type: 'SET_DATA', payload: res.data.data });
    });
  }, [active, dispatch]);

  return (
    <div className="w-[100%] h-full  overflow-y-scroll">
      <TopSection />
      <div className="p-10 flex flex-col gap-5 overflow-y-scroll ">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 w-full ">
          <Card title="Recent" description="Your Recently Open docs will show here" />
          <Card title="Favorites" description="Your Favorites Docs will show here." />
          <Card title="Created by Me" description="Docs Created by you will be shown here." />
        </div>
        <div className="w-full rounded-xl border-[1px] border-gray-200 p-4  shadow-md">
          <div className="flex flex-row gap-1 justify-between items-center my-4">
            <p className="font-semibold"> Create first wiki</p>
            <p className="text-xs text-gray-600">
              Use wikis to organize information, and prioritize it as results when you Ask AI. You can
              <span className="underline"> create a new wiki </span>
              or <span className="underline">import from Confluence.</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 wrap">
            <WikiItem
              title="Company wiki"
              description="All-in-one wiki"
              src="https://app-cdn.clickup.com/blank-wiki.8aaa0583e7135e2d04571812c0b8285f.svg"
            />
            <WikiItem
              title="Company Home"
              description="Company intranet hub"
              src="https://app-cdn.clickup.com/company-home.e805ec42a0c4a14c55c1e8500534c819.svg"
            />
            <WikiItem
              title="knowledge Base"
              description="Company knowledge center"
              src="https://app-cdn.clickup.com/knowledge-base.1b8b9a509a3d70e3587e559c6cd4bb72.svg"
            />
            <WikiItem
              title="Team Hub"
              description="Team collaboration center"
              src="https://app-cdn.clickup.com/team-hub.2a04aebcc17cad83bc7d90ca7d2d4a7d.svg"
            />
          </div>
        </div>
        <Filter active={active} setActive={setActive} />
        <Table filter={active} />
      </div>
      <MultiSelect />
    </div>
  );
}

export default DocLayout;
