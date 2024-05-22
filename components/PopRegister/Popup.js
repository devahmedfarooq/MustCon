import React, { useEffect, useState } from 'react'

export const Popup = ({ details, event, closeModal }) => {
  const { img, title, venue, date, desc, ticket } = event;


  return (
    <>

      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center ${details}`} style={{ zIndex: "9999" }}>
        {details === "unhide" && (
          <div className="bg-white flex flex-col justify-between rounded-lg py-8 w-[90vw] h-[90vh]">
            <div id="modal-table">
              <div className="container mx-auto px-2">
                <div className="overflow-x-auto">
                  <div className="font-bold text-[18px] mb-2 text-left">
                    Event: {title}
                  </div>

                  <table className="table-auto w-full text-left">
                    <thead>
                      <tr className="bg-zinc-100 text-[18px]">
                        <th className="px-4 py-2">Date</th>
                        <td className="px-4 py-2">{date}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="px-4 py-2">Venue</th>
                        <td className="px-4 py-2">{venue}</td>
                      </tr>
                      <tr className="bg-zinc-50">
                        <th className="px-4 py-2">Fee:</th>
                        <td className="px-4 py-2">{ticket}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex justify-center space-x-4">
                  <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                    Register Now
                  </button>
                </div>
              </div>

            </div>
            <div className="mt-4 mr-6 text-right">
              <button id='closemodal'
                className="bg-[#E74C3C] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#E74C3C] py-2 px-4 rounded"
                onClick={closeModal}  >
                Close
              </button>
            </div>
          </div>

        )}
      </div>




    </>
  )
}
