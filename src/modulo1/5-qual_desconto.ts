/*
Faça o algoritmo (diagrama de blocos e português estruturado) para calcular qual foi a porcentagem de desconto dada em um determinado produto (DESC), sabendo-se o preço original do produto (PRECO) e o preço que foi cobrado por ele depois do desconto (PRECOF).
*/

export default function QualDesconto(preco: number, preco_final: number) {
  return Math.round(100 - (preco_final / (preco / 100)))
}

if (import.meta.vitest) {
  it('QualDesconto', () => {
    expect(QualDesconto(100, 50)).toBe(50)
    expect(QualDesconto(1000, 10)).toBe(99)
    expect(QualDesconto(70, 30)).toBe(57)
    expect(QualDesconto(2222, 1111)).toBe(50)
  })
}