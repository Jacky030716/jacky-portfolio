import { Html, useProgress } from "@react-three/drei";
import { BiLoaderCircle } from "react-icons/bi";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <BiLoaderCircle className="size-4 animate-spin text-slate-500" />
      <p
        style={{
          fontSize: 14,
          color: "white",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress !== 100
          ? `${(100 - progress).toFixed(2)}%`
          : "Loading complete!"}
      </p>
    </Html>
  );
};

export default CanvasLoader;
