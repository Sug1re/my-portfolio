export const waveformPaths = [
    // 他の波形...
    `M 0 100
       ${Array.from({ length: 100 }, (_, i) => {
         const x = i * 50;
         if (i % 10 === 5) {
           // 細かい揺れ
           return `
             L ${x} 100 L ${x + 5} 80 L ${x + 10} 120 L ${x + 15} 100
             L ${x + 20} 80 L ${x + 25} 120 L ${x + 30} 100 L ${x + 35} 90 L ${x + 40} 110 L ${x + 45} 100`;
         } else if (i % 4 === 0) {
           // 大波
           return `L ${x} 100 L ${x + 10} 60 L ${x + 20} 140 L ${x + 30} 100 L ${x + 40} 70 L ${x + 50} 130`;
         } else {
           // 小波
           return `L ${x} 100 L ${x + 10} 80 L ${x + 20} 120 L ${x + 30} 100 L ${x + 40} 90 L ${x + 50} 110`;
         }
       }).join('')}
    `,
    `M 0 100
     ${Array.from({ length: 100 }, (_, i) => {
       const x = i * 50;
       const heightBase = 100;
       const amplitude = 20 + 40 * Math.abs(Math.sin((Math.PI * i) / 50)); // 山の高さに周期性を持たせる

       // リズミカルにパルス波を織り交ぜ
       if (i % 8 === 2) {
         return `
           L ${x} ${heightBase}
           L ${x + 10} ${heightBase - amplitude}
           L ${x + 20} ${heightBase + amplitude}
           L ${x + 30} ${heightBase}
           L ${x + 40} ${heightBase - amplitude}
           L ${x + 50} ${heightBase}
         `;
       } else if (i % 10 === 7) {
         return `
           L ${x} ${heightBase}
           L ${x + 5} ${heightBase - 10}
           L ${x + 10} ${heightBase + 10}
           L ${x + 15} ${heightBase - 10}
           L ${x + 20} ${heightBase + 10}
           L ${x + 25} ${heightBase}
           L ${x + 30} ${heightBase - 15}
           L ${x + 35} ${heightBase + 15}
           L ${x + 40} ${heightBase}
           L ${x + 45} ${heightBase - 10}
           L ${x + 50} ${heightBase}
         `;
       } else {
         return `
           L ${x} ${heightBase}
           L ${x + 25} ${heightBase - amplitude}
           L ${x + 50} ${heightBase}
         `;
       }
     }).join('')}
  `
  ];