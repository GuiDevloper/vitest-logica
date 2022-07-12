/*
Faça o algoritmo (diagrama de blocos e português estruturado) para calcular quanto será pago por um produto (PAG), sendo que o preço do produto (PR) e o desconto (D) são fornecidos pelo usuário. Apresentar o valor a ser pago pelo produto
*/

export default function DescontoUsuario(valor: number, desconto: number) {
  return valor * (desconto / 100)
}

if (import.meta.vitest) {
  it('DescontoUsuario', () => {
    expect(DescontoUsuario(10, 5)).toBe(0.5)
    expect(DescontoUsuario(100, 10)).toBe(10)
    expect(DescontoUsuario(1500, 10)).toBe(150)
  })
}