import { Suspense } from "react";
import dynamic from "next/dynamic";
import CanvasLoader from "./CanvasLoader";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export const GlobeModel = () => {
  if (typeof window === "undefined") {
    return null; // Return nothing during SSR
  }

  const pointsData = [
    {
      lat: 4.6005,
      lng: 101.6667,
      size: 0.5,
      color: "red",
      label: "Ipoh, Perak",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Suspense fallback={<CanvasLoader />}>
        <Globe
          width={500}
          height={500}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          pointsData={pointsData}
          pointLabel="label"
          pointRadius={0.5}
          showGraticules={true}
          showAtmosphere={true}
          atmosphereColor="#2c2168"
          atmosphereAltitude={0.25}
        />
      </Suspense>
    </div>
  );
};

export default GlobeModel;
