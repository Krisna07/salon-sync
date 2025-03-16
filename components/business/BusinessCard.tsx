// import Image from "next/image";
import Link from "next/link";

interface BusinessCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  id,
  name,
  description,
  imageUrl,
  rating,
}) => {
  return (
    <Link
      href={`/business/${id}`}
      className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative ">
        <img src={imageUrl} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-neutral-600 text-sm mb-2 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center">
          <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          <span className="text-yellow-400 ml-1">★</span>
        </div>
      </div>
    </Link>
  );
};

export default BusinessCard;
