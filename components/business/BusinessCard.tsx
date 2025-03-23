// import Image from "next/image";
import Link from "next/link";
import { BsScissors } from "react-icons/bs";

interface BusinessCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  activeHours?: string;
  type?: string;
  location?: string;
  services?: string[];
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  id,
  name,
  description,
  imageUrl,
  rating,
  activeHours,
  type,
}) => {
  // const time = new Date().toLocaleTimeString();
  // console.log(activeHours);
  return (
    <Link
      href={`/business/${id}`}
      className="bg-primary h-full grid grid-rows-[200px_auto] gap-2 hover:shadow-[0_0_4px_0_darkgray] rounded-md overflow-hidden "
    >
      <div className="relative row-span-1 w-full">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full flex flex-col gap-2 p-2 ">
        <div className="flex items-center justify-between">
          <div className="w-full  flex items-center  gap-2  ">
            <BsScissors size={12} />
            <span className="font-semibold ">{name}</span>
          </div>
          <span className="text-[12px] whitespace-nowrap bg-accent text-primary rounded-md px-2 ">
            {type && type}
          </span>
        </div>
        <span className="h-full">{description}</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2  ">
            <span className="font-semibold">{rating.toFixed(1)}</span>
            <span className="text-yellow-400">★</span>
          </div>
          {
            <span className="text-[12px] whitespace-nowrap bg-accent text-primary rounded-md px-2 ">
              {activeHours}
            </span>
          }
        </div>
      </div>
    </Link>
  );
};

export default BusinessCard;
