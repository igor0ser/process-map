const drawAcr = (radius, signX = '', signY='') => `
  a${radius},${radius} 0 0 1 ${signX}${radius},${signY}${radius}
`;

const getRoundedRectPath = (i, width, height, acrR) => {
  const w = width - acrR * 2;
  const h = height - acrR * 2;
  return `
    M${i * 300 },${acrR}
    H${w}
    ${drawAcr(acrR)}
    V${h}
    ${drawAcr(acrR, '-')}
    H${-w}
    ${drawAcr(acrR, '-', '-')}
    V${-h}
    ${drawAcr(acrR, , '-')}
    Z
  `;
}