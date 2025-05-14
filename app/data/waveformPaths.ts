export const waveformPaths = (segmentIndex: number): string => {
  const startX = segmentIndex * 260; // 1セグメント分の幅（この場合260）
  const path =
    `L ${startX + 100} 100 ` +  // 安定
    `L ${startX + 120} 90 ` +   // 少し下降
    `L ${startX + 150} 110 ` +  // 急上昇（スパイク前）
    `L ${startX + 175} 50 ` +   // 鋭く頂点（スパイク）
    `L ${startX + 190} 110 ` +  // 急降下
    `L ${startX + 210} 95 ` +   // 少し戻す
    `L ${startX + 240} 100 ` +  // 基線に復帰
    `L ${startX + 260} 100`;    // 安定（次の波に向け余白）

  return `M ${startX} 100 ${path}`;
};
