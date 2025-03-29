//import { CALL_STATUS, useVapi } from "./useVapi";
import { CALL_STATUS } from "./useVapi";

// import { Loader2, Mic, Square } from "lucide-react";

// const VapiButton = ({
//   toggleCall,
//   callStatus,
//   audioLevel = 0,
// }: Partial<ReturnType<typeof useVapi>>) => {
//   const color =
//     callStatus === CALL_STATUS.ACTIVE
//       ? "red"
//       : callStatus === CALL_STATUS.LOADING
//       ? "orange"
//       : "green";
//   const buttonStyle = {
//     borderRadius: "50%",
//     width: "50px",
//     height: "50px",
//     color: "white",
//     border: "none",
//     boxShadow: `1px 1px ${10 + audioLevel * 40}px ${
//       audioLevel * 10
//     }px ${color}`,
//     cursor: "pointer",
//   };

//   return (
//     <button
//       style={buttonStyle}
//       className={`transition ease-in-out ${
//         callStatus === CALL_STATUS.ACTIVE
//           ? "bg-red-500 hover:bg-red-700"
//           : callStatus === CALL_STATUS.LOADING
//           ? "bg-orange-500 hover:bg-orange-700"
//           : "bg-green-500 hover:bg-green-700"
//       } flex items-center justify-center`}
//       onClick={toggleCall}
//     >
//       {callStatus === CALL_STATUS.ACTIVE ? (
//         <Square />
//       ) : callStatus === CALL_STATUS.LOADING ? (
//         <Loader2 className="animate-spin" />
//       ) : (
//         <Mic />
//       )}
//     </button>
//   );
// };

// export { VapiButton };
interface VapiButtonProps {
  audioLevel: number;
  callStatus: CALL_STATUS;
  toggleCall: () => void;
  className?: string; // Add this
}

export const VapiButton: React.FC<VapiButtonProps> = ({
  audioLevel,
  callStatus,
  toggleCall,
  className,
}) => {
  return (
    <button
      onClick={toggleCall}
      className={className}
      style={{
        transform: `scale(${1 + audioLevel * 0.1})`,
        transition: "transform 0.1s ease-in-out",
      }}
    >
      {callStatus === "active" ? "End Call" : "Start Call"}
    </button>
  );
};
