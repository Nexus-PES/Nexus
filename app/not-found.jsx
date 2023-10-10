import React from "react";
import { Button } from "../components/Button";
const notfound = () => {
  return (
    <>
      <div className="min-h-screen  flex justify-center items-center">
        <div className="h-[20rem] w-[40rem]  rounded-md p-2 flex items-center flex-col">
          <div className="text-9xl font-black bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text animate-gradient">
            404
          </div>
          <p className="text-2xl font-bold text-text-primary">
            OOPS! PAGE NOT FOUND
          </p>
          <p className="mt-5 text-center">
            Sorry, the page you are looking for doesn't exist
          </p>

          <Button
            href="/"
            size="sm"
            className="text-sm md:text-base font-semibold py-30 px-6 md:px-10 justify-self-end mt-10"
          >
            HOME
          </Button>
        </div>
      </div>
    </>
  );
};

export default notfound;
