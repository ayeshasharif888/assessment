import avatar from "../assets/Avatar.png";

export default function SemenDetails() {
  return (
    <div className="bg-[#08122E] p-4 rounded-3xl shadow">
      <div className="flex flex-row gap-2 items-center mb-4">
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.2716 5.90289C11.4012 5.77291 11.4284 5.57559 11.3713 5.40121C11.0721 4.48829 11.3875 3.31801 12.2551 2.45041C13.3971 1.3084 15.0635 1.12325 15.9771 2.03685C16.8907 2.95046 16.7055 4.61687 15.5635 5.75889C14.7063 6.61615 13.5535 6.93423 12.6455 6.65307C12.4727 6.59962 12.279 6.62872 12.1513 6.75683L12.0493 6.85919C11.7485 7.18242 11.3252 7.36008 10.8939 7.34397L9.52391 7.29281C8.47711 7.25372 7.69358 8.30834 8.04069 9.2892L8.15707 9.618C8.7055 11.1677 7.4584 12.8311 5.80568 12.7543L4.97107 12.7155C4.55959 12.6964 4.22855 13.0776 4.30567 13.4817L4.43773 14.1737C4.6444 15.2566 3.8681 16.3177 2.76598 16.4589L2.14544 16.5384C1.79467 16.5834 1.47677 16.3279 1.44516 15.9757C1.4152 15.6419 1.65451 15.3441 1.98697 15.3015L2.65441 15.216C3.02181 15.1689 3.28054 14.8152 3.21166 14.4542L3.0796 13.7623C2.84823 12.55 3.84141 11.4064 5.07581 11.4638L5.91046 11.5025C6.66165 11.5374 7.22852 10.7813 6.97923 10.0769L6.86289 9.7481C6.21822 7.92652 7.67336 5.96795 9.61743 6.04052L10.9875 6.09168C11.0491 6.09398 11.1095 6.06861 11.1525 6.02242L11.2716 5.90289Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-[16px]">Semen </div>
          <div className="text-sm">Sample 19A43A</div>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-[#5577FF]">
          <div className="flex bg-[#5577FF33] px-2 py-1 rounded-3xl items-center gap-1">
            <img src={avatar} alt="User Avatar" className="w-[12px] h-[12px]" />
            <div>Partner: PESA Testicular</div>
          </div>
          <div className="flex bg-[#5577FF33] px-2 py-1 rounded-3xl items-center gap-1">
            <div>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_183_182)">
                  <path
                    d="M9.03114 4.25L2.96896 7.75M9.03114 4.25L9.58018 2.20096M9.03114 4.25L11.0802 4.79904M2.96896 7.75L0.919922 7.20096M2.96896 7.75L2.41992 9.79904M9.0311 7.74993L2.96892 4.24993M9.0311 7.74993L11.0802 7.2009M9.0311 7.74993L9.58018 9.79898M2.96892 4.24993L2.41999 2.20102M2.96892 4.24993L0.919993 4.79909M6.00005 2.5L6.00005 9.5M6.00005 2.5L4.50005 1M6.00005 2.5L7.50005 1M6.00005 9.5L4.50005 11M6.00005 9.5L7.50005 11"
                    stroke="#5577FF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_183_182">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>Frozen</div>
          </div>
          <div className="flex bg-[#5577FF33] px-2 py-1 rounded-3xl items-center gap-1">
            <div>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 11C5.30833 11 4.71875 10.7563 4.23125 10.2688C3.74375 9.78125 3.5 9.19167 3.5 8.5V4C3.225 4 2.98958 3.90208 2.79375 3.70625C2.59792 3.51042 2.5 3.275 2.5 3V2C2.5 1.725 2.59792 1.48958 2.79375 1.29375C2.98958 1.09792 3.225 1 3.5 1H8.5C8.775 1 9.01042 1.09792 9.20625 1.29375C9.40208 1.48958 9.5 1.725 9.5 2V3C9.5 3.275 9.40208 3.51042 9.20625 3.70625C9.01042 3.90208 8.775 4 8.5 4V8.5C8.5 9.19167 8.25625 9.78125 7.76875 10.2688C7.28125 10.7563 6.69167 11 6 11ZM3.5 3H8.5V2H3.5V3ZM6 10C6.41667 10 6.77083 9.85417 7.0625 9.5625C7.35417 9.27083 7.5 8.91667 7.5 8.5H6V7.5H7.5V6.5H6V5.5H7.5V4H4.5V8.5C4.5 8.91667 4.64583 9.27083 4.9375 9.5625C5.22917 9.85417 5.58333 10 6 10Z"
                  fill="#5577FF"
                />
              </svg>
            </div>
            <div>12:56 PM 10 Jun 2024</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Pre-processing */}
        <div className="bg-[#FFFFFF0D] p-6 rounded-3xl">
          <div className="flex justify-start items-center gap-2 mb-2">
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 14.6666H8M7.33333 4.168C7.75949 4.05832 8.20627 3.99998 8.66667 3.99998C11.6122 3.99998 14 6.38779 14 9.33331C14 11.5716 12.6212 13.4878 10.6667 14.279M3.66667 8.66665H6.33333C6.6431 8.66665 6.79799 8.66665 6.92679 8.69227C7.45571 8.79747 7.86917 9.21094 7.97438 9.73986C8 9.86866 8 10.0235 8 10.3333C8 10.6431 8 10.798 7.97438 10.9268C7.86917 11.4557 7.45571 11.8692 6.92679 11.9744C6.79799 12 6.6431 12 6.33333 12H3.66667C3.3569 12 3.20201 12 3.07321 11.9744C2.54429 11.8692 2.13083 11.4557 2.02562 10.9268C2 10.798 2 10.6431 2 10.3333C2 10.0235 2 9.86866 2.02562 9.73986C2.13083 9.21094 2.54429 8.79747 3.07321 8.69227C3.20201 8.66665 3.3569 8.66665 3.66667 8.66665ZM2.66667 3.66665V8.66665H7.33333V3.66665C7.33333 2.37798 6.28866 1.33331 5 1.33331C3.71134 1.33331 2.66667 2.37798 2.66667 3.66665Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="text-sm text-white">Pre-processing</div>
          </div>
          <div className="max-w-md mx-auto p-0">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#FFFFFF0D] p-4 rounded-lg shadow">
                <p className="text-[16px] font-bold text-white">15 ml</p>
                <p className="text-[#929DB7] text-[10px]">Volume</p>
              </div>

              <div className="bg-[#FFFFFF0D] p-4 rounded-lg shadow">
                <p className="text-[16px] font-bold text-white">15 M/mL</p>
                <p className="text-[#929DB7] text-[10px]">Concentration</p>
              </div>
              <div className="bg-[#FFFFFF0D] p-4 rounded-lg shadow">
                <p className="text-[16px] font-bold text-white">4%</p>
                <p className="text-[#929DB7] text-[10px]">Normal Morphology</p>
              </div>

              <div className="bg-[#FFFFFF0D] p-4 rounded-lg shadow">
                <p className="text-[16px] font-bold text-white">40%</p>
                <p className="text-[#929DB7] text-[10px]">
                  Progressive Motility
                </p>
              </div>
              <div className="col-span-2 flex items-center gap-2 bg-[#FFFFFF0D] p-4 rounded-lg shadow">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.33329 7.33331H5.33329M6.66663 9.99998H5.33329M10.6666 4.66665H5.33329M13.3333 4.53331V11.4666C13.3333 12.5868 13.3333 13.1468 13.1153 13.5746C12.9236 13.951 12.6176 14.2569 12.2413 14.4487C11.8134 14.6666 11.2534 14.6666 10.1333 14.6666H5.86663C4.74652 14.6666 4.18647 14.6666 3.75864 14.4487C3.38232 14.2569 3.07636 13.951 2.88461 13.5746C2.66663 13.1468 2.66663 12.5868 2.66663 11.4666V4.53331C2.66663 3.41321 2.66663 2.85316 2.88461 2.42533C3.07636 2.04901 3.38232 1.74305 3.75864 1.5513C4.18647 1.33331 4.74652 1.33331 5.86663 1.33331H10.1333C11.2534 1.33331 11.8134 1.33331 12.2413 1.5513C12.6176 1.74305 12.9236 2.04901 13.1153 2.42533C13.3333 2.85316 13.3333 3.41321 13.3333 4.53331Z"
                      stroke="#929DB7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[11px]">
                  Minimal bleeding noted at puncture site, reso...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Preparation */}
        <div className="bg-[#FFFFFF0D] p-6 rounded-3xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex justify-start items-center gap-2">
              <div>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3333 4.33333L4.99996 11.6667M6.33329 7V4.33333M4.99996 5.66667H7.66663M9.66663 10.3333H12.3333M5.86663 14H11.4666C12.5867 14 13.1468 14 13.5746 13.782C13.9509 13.5903 14.2569 13.2843 14.4486 12.908C14.6666 12.4802 14.6666 11.9201 14.6666 10.8V5.2C14.6666 4.0799 14.6666 3.51984 14.4486 3.09202C14.2569 2.71569 13.9509 2.40973 13.5746 2.21799C13.1468 2 12.5867 2 11.4666 2H5.86663C4.74652 2 4.18647 2 3.75865 2.21799C3.38232 2.40973 3.07636 2.71569 2.88461 3.09202C2.66663 3.51984 2.66663 4.0799 2.66663 5.2V10.8C2.66663 11.9201 2.66663 12.4802 2.88461 12.908C3.07636 13.2843 3.38232 13.5903 3.75865 13.782C4.18647 14 4.74652 14 5.86663 14Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm text-white">Post Preparation</div>
            </div>
            <div className="bg-[#5577FF33] px-2 py-1 text-[10px]  text-[#5577FF] rounded-3xl">
              microfluidics
            </div>
          </div>
          <div className="max-w-md mx-auto p-0">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#FFFFFF0D] p-4 rounded-lg shadow">
                <p className="text-[16px] font-bold text-white">15 ml</p>
                <p className="text-[#929DB7] text-[10px]">Volume</p>
              </div>

              <div className="bg-[#FFFFFF0D] p-4 rounded-lg shadow">
                <p className="text-[16px] font-bold text-white">15 M/mL</p>
                <p className="text-[#929DB7] text-[10px]">Concentration</p>
              </div>
              <div className="bg-[#FFFFFF0D] p-4 rounded-lg shadow">
                <p className="text-[16px] font-bold text-white">4%</p>
                <p className="text-[#929DB7] text-[10px]">Normal Morphology</p>
              </div>

              <div className="bg-[#FFFFFF0D] p-4 rounded-lg shadow">
                <p className="text-[16px] font-bold text-white">40%</p>
                <p className="text-[#929DB7] text-[10px]">
                  Progressive Motility
                </p>
              </div>
              <div className="col-span-2 flex items-center gap-2 bg-[#FFFFFF0D] p-4 rounded-lg shadow">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.33329 7.33331H5.33329M6.66663 9.99998H5.33329M10.6666 4.66665H5.33329M13.3333 4.53331V11.4666C13.3333 12.5868 13.3333 13.1468 13.1153 13.5746C12.9236 13.951 12.6176 14.2569 12.2413 14.4487C11.8134 14.6666 11.2534 14.6666 10.1333 14.6666H5.86663C4.74652 14.6666 4.18647 14.6666 3.75864 14.4487C3.38232 14.2569 3.07636 13.951 2.88461 13.5746C2.66663 13.1468 2.66663 12.5868 2.66663 11.4666V4.53331C2.66663 3.41321 2.66663 2.85316 2.88461 2.42533C3.07636 2.04901 3.38232 1.74305 3.75864 1.5513C4.18647 1.33331 4.74652 1.33331 5.86663 1.33331H10.1333C11.2534 1.33331 11.8134 1.33331 12.2413 1.5513C12.6176 1.74305 12.9236 2.04901 13.1153 2.42533C13.3333 2.85316 13.3333 3.41321 13.3333 4.53331Z"
                      stroke="#929DB7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[11px]">
                  Minimal bleeding noted at puncture site, reso...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insemination */}
        <div className="bg-[#FFFFFF0D] p-6 rounded-3xl flex items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-sm text-white mb-2">
              No insemination details yet
            </div>
            <div className="text-xs text-[#B3C1E0] mb-6">
              This will come after OPU has been verified
            </div>
            <button class="bg-[linear-gradient(113.96deg,_rgba(255,231,231,0.46)_0%,_rgba(255,255,255,0.47)_7.3%,_rgba(0,0,0,0)_23.96%,_rgba(255,255,255,0.3)_57.81%,_rgba(115,129,255,0.45)_81.28%,_rgba(0,7,73,0.31)_100%)] text-white rounded-xl p-[1px]">
              <span class="flex w-full bg-[#08122E] text-white rounded-xl py-2 px-4 text-sm">
                Add insemination details
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
