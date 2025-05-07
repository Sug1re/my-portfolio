import React from "react";

type WaveformProps = {
  path: string;
};
const Waveform = ({ path }: WaveformProps) => {
  return (
    <>
      {/* 波形 */}
      {/* viewBox と関連する */}
      <path d={path} />
    </>
  );
};

export default Waveform;
