/*
Faça o algoritmo (diagrama de blocos e português estruturado) para calcular o volume de uma esfera (VOL). O raio (R) da esfera será fornecido pelo usuário. Obs: VOL = 3.14*R^2 (apresentar o volume da esfera)
*/

export default function VolumeEsfera(raio: number) {
  return Math.pow(3.14 * raio, 2)
}

if (import.meta.vitest) {
  it('VolumeEsfera', () => {
    expect(VolumeEsfera(100)).toBe(98596)
  })
}