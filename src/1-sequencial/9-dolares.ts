/*
Faça o algoritmo (diagrama de blocos e português estruturado) que calcule o valor em Reais (VAL_REAL), correspondente aos dólares que um turista possui no cofre do hotel. O programa deve solicitar os seguintes dados: Quantidade de dólares guardados no cofre (VAL_DOLAR) e cotação do dólar naquele dia (COT).
*/

export default function Dolares(quantidade: number, cotacao: number) {
  return quantidade * cotacao
}

if (import.meta.vitest) {
  it('Dolares', () => {
    expect(Dolares(5, 1)).toBe(5)
    expect(Dolares(6, 6)).toBe(36)
    expect(Dolares(5, 5)).toBe(25)
  })
}