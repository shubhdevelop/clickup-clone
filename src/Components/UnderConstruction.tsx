import { Link } from 'react-router-dom';

function UnderConstruction() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full">
      <h1 className="text-2xl font-extrabold  ">Sorry For the Inconvience</h1>
      <h3 className="text-sm">This page is Still under Construction</h3>

      <Link className="underline text-blue-500" to={'/docs'}>
        Visit This Page instead
      </Link>
    </div>
  );
}

export default UnderConstruction;
