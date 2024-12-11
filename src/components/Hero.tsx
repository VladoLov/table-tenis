import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen relative mx-auto bg-gradient-to-br from-red-950 via-blue-950 to-black">
      <div className="absolute inset-0">
        <Image
          src="/winner.jpeg"
          alt="Hero table tenis player"
          fill
          objectFit="cover"
          className="object-cover opacity-40"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-screen inset-0">
        <div className="grid max-w-screen-xl mx-auto grid-cols-12 grid-rows-6 w-full h-screen">
          <div className="col-span-7 row-span-6 relative ">
            <div className="flex items-start justify-center flex-col gap-8 w-full h-full ">
              <h1 className="text-bold text-blue-50 uppercase mx-10 md:px-0 font-bold pt-8 md:pb-0 lg:text-7xl text-start text-4xl shadow-sm">
                Stolnotenski klub <span className="text-teal-100">Breza</span>
              </h1>
              <h2 className="text-3xl lg:text-5xl font-semibold mx-10 text-blue-100 text-start shadow-md">
                Povežite se s ostalim ljubiteljima stonog tenisa
              </h2>
            </div>
          </div>
          <div className="lg:col-span-8 col-span-8 row-span-3 order-4 lg:order-3"></div>
          <div className=" hidden md:grid  row-start-5 row-end-7  col-start-9 col-end-13 row-span-1">
            <div className="h-full pt-8 flex items-center">
              <h2 className="text-2xl font-bold text-end  text-blue-100  shadow-xl">
                Zaronite u svijet stonog tenisa i otkrijte što čini ovaj sport
                jedinstvenim
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
