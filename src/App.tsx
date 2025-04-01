import { VapiButton, vapi } from "./features/Assistant";

import { useVapi } from "./features/Assistant";

import { useEffect, useRef } from "react";
import { Infinity } from "ldrs/react";
import "ldrs/react/Infinity.css";
//import BackgroundAnimation from "./components/ui/Background";

function App() {
  //const scrollAreaRef = useRef<any>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const viewport = viewportRef.current;
    if (viewport) {
      viewport.scrollTop = viewport.scrollHeight;
    }
  };

  const { toggleCall, callStatus, audioLevel } = useVapi();

  useEffect(() => {
    vapi.on("message", scrollToBottom);
    return () => {
      vapi.off("message", scrollToBottom);
    };
  }, []);

  return (
    <main className="flex h-screen  font-orbitron relative overflow-hidden">
      {/* Background Waveforms */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`waveform ${
            callStatus === "active" ? "animate-waveform" : ""
          }`}
        ></div>
        <div
          className={`waveform waveform-delay ${
            callStatus === "active" ? "animate-waveform" : ""
          }`}
        ></div>
      </div>

      {/* <CharacterPreview /> */}

      <div id="card" className="text-slate-50 w-full relative bg-black">
        {/* <BackgroundAnimation /> */}
        {/* Card Header */}

{/*         <div id="card-header" className="p-6 shadow pb-4">
          <h1 className="text-3xl font-bold text-cyan-400 text-center">
            Drok by DigiRocket
          </h1>
          <div className="flex justify-center mt-4">
            <svg
              className={`w-8 h-8 text-purple-400 ${
                callStatus === "active" ? "animate-spin-slow" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10S2 17.5 2 12zm10-5a5 5 0 0 0 0 10 5 5 0 0 0 0-10z" />
            </svg>
          </div>
        </div> */}


        {/* Card Content */}
        <div className="w-screen">
          <div className="w-full h-svh flex justify-center items-center ">
            <Infinity
              size={150}
              stroke={10}
              strokeLength={0.01}
              bgOpacity={0.1}
              speed={callStatus === "active" ? 2.5 : 0}
              color="white"
            />
          </div>
        </div>

        {/* Card Footer */}
        <div
          id="card-footer"
          className="flex flex-col items-center absolute bottom-20 left-0 right-0 "
        >
          <div className="flex justify-center space-x-4 mb-1">
            <VapiButton
              audioLevel={audioLevel}
              callStatus={callStatus}
              toggleCall={toggleCall}
              className={`w-16 h-16 rounded-full flex items-center bg-black shadow-2xl justify-center transition-all duration-300 ${
                callStatus === "active" ? " animate-pulse-glow" : ""
              }`}
            />
          </div>
          <p className="text-white text-sm font-thin">
            Press button to{" "}
            <span>{callStatus === "active" ? "stop" : "start"}</span>
          </p>
          {/* <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={toggleCall}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Stop
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              Reset
            </button>
          </div> */}
          {/* <p className="text-center text-sm text-cyan-400">
            Secure voice interaction • Powered by DigiRocket
          </p> */}
        </div>
      </div>
    </main>
  );
}

export default App;
