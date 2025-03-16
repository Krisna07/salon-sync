import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Find and Book Your Perfect Salon
      </h1>
      <p className="text-xl text-neutral-600 mb-8 text-center max-w-2xl">
        Discover and book appointments with top beauty professionals in your
        area
      </p>
      <Link
        href="/discover"
        className="bg-black text-white px-8 py-4 rounded-full hover:bg-neutral-800 transition-colors"
      >
        Start Booking
      </Link>
    </div>
  );
}
