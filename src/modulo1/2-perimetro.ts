/*
Faça o algoritmo (diagrama de blocos e português estruturado) para calcular a área (AREA) e o perímetro (P) de uma sala, sendo que os comprimentos (L e C) são fornecidos pelo usuário. Apresente a área e o perímetro depois de calculados.
*/

import Area from './1-area'

export function Perimetro(largura: number, comprimento: number) {
  const area = Area(largura, comprimento)
  const perimetro = (largura * 2) + (comprimento * 2)
  return {
    area, perimetro
  }
}

if (import.meta.vitest) {
  it('Perimetro', () => {
    expect(Perimetro(10, 20)).toStrictEqual({ area: 200, perimetro: 60 })
  })
}