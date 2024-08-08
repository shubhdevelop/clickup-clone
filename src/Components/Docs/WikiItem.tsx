type Props = {
  title: string;
  description: string;
  src: string;
};

export default function WikiItem({ title, description, src }: Props) {
  return (
    <div className="flex w-full p-3 rounded-xl gap-2 border-[1px] hover:bg-gray-100 cursor-pointer">
      <div>
        <img src={src} alt={`${title} svg}`} />
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs font-light">{description}</p>
      </div>
    </div>
  );
}
