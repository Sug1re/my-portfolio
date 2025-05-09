export const waveformPaths = (segmentIndex: number): string => {
    const startX = segmentIndex * 500; // 5000 / 10 segments
    const path = Array.from({ length: 10 }, (_, i) => {
      const x = startX + i * 50;
      if (i % 10 === 5) {
        return `
          L ${x} 100 L ${x + 5} 80 L ${x + 10} 120 L ${x + 15} 100
          L ${x + 20} 80 L ${x + 25} 120 L ${x + 30} 100 L ${x + 35} 90 L ${x + 40} 110 L ${x + 45} 100`;
      } else if (i % 4 === 0) {
        return `L ${x} 100 L ${x + 10} 60 L ${x + 20} 140 L ${x + 30} 100 L ${x + 40} 70 L ${x + 50} 130`;
      } else {
        return `L ${x} 100 L ${x + 10} 80 L ${x + 20} 120 L ${x + 30} 100 L ${x + 40} 90 L ${x + 50} 110`;
      }
    }).join("");

    return `M ${startX} 100 ${path}`;
  };
