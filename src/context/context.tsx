import { ReactNode, useContext, useReducer, createContext } from 'react';
import { docReducer } from './reducer';

const Doc = createContext({} as any);

type Props = { children: ReactNode };

function Context({ children }: Props) {
  const [state, dispatch] = useReducer(docReducer, {
    data: [],
    selected: [],
  });

  return <Doc.Provider value={{ state, dispatch }}>{children}</Doc.Provider>;
}
export default Context;

export const DocState = () => {
  return useContext(Doc);
};
