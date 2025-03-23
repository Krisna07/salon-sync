import Button from "@/components/Global_components/Button";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center ">
      <div className="h-[50rem] flex flex-col items-center justify-center gap-4 place-items-center">
        <h1 className="text-[40px] font-bold  text-center">
          Find and Book Your Perfect Salon
        </h1>
        <p className="text-[16px] text-center max-w-2xl">
          Discover and book appointments with top beauty professionals in your
          area
        </p>
        <Link href="/discover">
          <Button rightIcon={<FaChevronRight />}>Start Booking</Button>
        </Link>
      </div>
    </div>
  );
}
