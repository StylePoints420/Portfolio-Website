import dijkstra from "@/images/EdsgerDijkstra.png";

const DijkstraQuoteComponent = () => {
  return (
    <>
      <div className="absolute w-full bg-teal-400 dark:bg-orange-500 -z-10 md:h-96 rounded-2xl grid grid-cols-1"></div>
      <div className="absolute left-0 lg:w-md xl:w-2xl 2xl:w-[60%]">
        <div className="flex flex-col justify-center items-center gap-5 ml-5">
          <h2 className="font-primary lg:text-2xl xl:text-4xl break-words text-center italic">
            <q>
              If debugging is the process of removing bugs, then programming
              must be the process of putting them in.
            </q>
          </h2>
          <div className="flex justify-end items-center w-full">
            <h3 className="font-primary text-2xl xl:text-4xl break-words  italic">
              Edsger Dijkstra -
            </h3>
            <img
              src={dijkstra}
              alt="Edsger Dijkstra"
              className="w-24 h-auto bg-transparent rounded-full scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DijkstraQuoteComponent;
