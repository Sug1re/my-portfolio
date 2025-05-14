type Props = {
  segments: string[];
};

const Waveform = ({ segments }: Props) => {
  return (
    <>
      {/* 波形 */}
      {segments.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </>
  );
};

export default Waveform;
