/*
Faça o algoritmo (diagrama de blocos e português estruturado) para calcular o valor monetário do desconto (D), sendo que o preço do produto (PR) é fornecido pelo usuário e o desconto é de 5%. Apresentar o valor do desconto
*/

export default function Desconto_5(valor: number) {
  return valor * 0.05
}

if (import.meta.vitest) {
  it('Desconto_5', () => {
    expect(Desconto_5(10)).toBe(0.5)
    expect(Desconto_5(100)).toBe(5)
    expect(Desconto_5(1500)).toBe(75)
  })
}