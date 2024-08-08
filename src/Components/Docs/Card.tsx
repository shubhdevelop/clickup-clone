type Props = {
  title: string;
  description: string;
};

function Card({ title, description }: Props) {
  return (
    <div className="w-full h-40 rounded-xl border-[1px] border-gray-200 p-4 grid-rows-1">
      <p className="font-medium">{title}</p>
      <div className="w-full flex flex-col justify-center items-center">
        <img src="https://app-cdn.clickup.com/no-favorites-docs.04932f5310ced65716502d27f1efd906.svg" width={75} />
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Card;
