export const waveformPaths = (segmentIndex: number): string => {
  const startX = segmentIndex * 260;

  const patterns = [
    // パターン1: スパイク型
    `L ${startX + 100} 100 ` +
      `L ${startX + 120} 90 ` +
      `L ${startX + 150} 110 ` +
      `L ${startX + 175} 50 ` +
      `L ${startX + 190} 110 ` +
      `L ${startX + 210} 95 ` +
      `L ${startX + 240} 100 ` +
      `L ${startX + 260} 100`,

    // パターン2: 深い谷型
    `L ${startX + 80} 100 ` +
      `L ${startX + 100} 80 ` +
      `L ${startX + 120} 60 ` +
      `L ${startX + 140} 100 ` +
      `L ${startX + 160} 130 ` +
      `L ${startX + 180} 100 ` +
      `L ${startX + 200} 85 ` +
      `L ${startX + 230} 100 ` +
      `L ${startX + 260} 100`,

    //   // パターン3: 水平
    // `L ${startX + 80} 100 ` +
    //   `L ${startX + 260} 100`,

      // パターン4: 小スパイク型
    `L ${startX + 100} 100 ` +
      `L ${startX + 120} 95 ` +
      `L ${startX + 150} 105 ` +
      `L ${startX + 175} 65 ` +
      `L ${startX + 190} 105 ` +
      `L ${startX + 210} 100 ` +
      `L ${startX + 225} 95 ` +
      `L ${startX + 260} 100`,
  ];

  // ランダムにパターンを選択
  const path = patterns[Math.floor(Math.random() * patterns.length)];

  return `M ${startX} 100 ${path}`;
};
