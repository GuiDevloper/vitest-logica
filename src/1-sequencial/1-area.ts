/* 
Faça o algoritmo (diagrama de blocos e português estruturado) para calcular a área (AREA) de uma sala, sendo que os comprimentos das paredes (L e C) são fornecidos pelo usuário. Apresente a área depois de calculada. 
*/

export default function Area(largura: number, comprimento: number) {
  return largura * comprimento
}

if (import.meta.vitest) {
  it('Area', () => {
    expect(Area(10, 20)).toBe(200)
    expect(Area(10, 10)).toBe(100)
    expect(Area(100, 10)).toBe(1000)
  })
}