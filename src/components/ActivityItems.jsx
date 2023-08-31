/* eslint-disable react/prop-types */
export const ActivityItem = ({ status, description, date }) => {
  return (
    <>
      <div className="p-4 w-full text-start rounded-md my-1 hover:bg-neutral-100 dark:hover:bg-neutral-600">
        <div className="grid grid-cols-3 xl:grid-cols-6 dark:text-white">
          <div className="hidden xl:block">
            <p>{status}</p>
          </div>
          <div className="col-span-2 max-w-[38rem] xl:col-span-4">
            <p className="break-words">{description}</p>
          </div>
          <p className="text-sm italic">{date}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export const ActivityHeader = () => {
  return (
    <div className="p-4 w-full text-start rounded-md my-1 bg-neutral-800 text-white font-semibold dark:bg-neutral-900 ">
      <div className="grid grid-cols-3 xl:grid-cols-6">
        <h1 className="hidden xl:block">Status</h1>
        <p className="col-span-2 max-w-[38rem] xl:col-span-4">Description</p>
        <p>Date</p>
      </div>
    </div>
  );
};
