import React from "react";
import france from "../assets/img/france-yellow.svg";
import Button from "./ui/Button";

const Modal = ({
  setShowModal,
  content,
  title,
  confirm,
  cancel,
  confirmAction,
  cancelAction,
  image,
}) => {
  return (
    <>
      <div className="z-[1001] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-xl">
          <div className="shadow-main p-6 border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none mx-4">
            <div className="flex justify-center">
              <img src={require(`../assets/img/${image}`)} width={50} />
            </div>
            <div className="flex justify-center text-lg font-bold text-blue mt-4">
              {title}
            </div>
            <div className="text-gray my-4 text-center">{content}</div>
            <div className="flex mt-2">
              <div
                className="cursor-pointer hover:bg-whiteHover pr-2 w-1/2 border border-1 font-bold border-gray text-sm text-black rounded-lg flex justify-center items-center"
                onClick={() => cancelAction()}
              >
                {cancel}
              </div>
              <div className="pl-2 w-1/2">
                <Button bold={true} onClick={() => confirmAction(false)}>
                  {confirm}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-[1000] opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default Modal;

{
  /* <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
<div className="relative w-auto my-6 mx-auto max-w-xl">
  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
    <div className="flex items-start justify-between p-5 rounded-t">
      <h3 className="text-3xl font-semibold">{title}</h3>
     
    </div>
    <div className="relative p-6 flex-auto">
      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
        {content}
      </p>
    </div>
    <div className="flex items-center justify-end p-6 rounded-b">
      {cancel !== null && (
        <button
          className="w-1/2 text-red-500 bg-blue border-1 border-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mr-2"
          type="button"
          onClick={() => cancelAction()}
        >
          {cancel}
        </button>
      )}
      <button
        className="w-1/2 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-2"
        type="button"
        onClick={() => confirmAction(false)}
      >
        {confirm}
      </button>
    </div>
  </div>
</div>
</div> */
}
