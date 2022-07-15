/*
Faça o algoritmo (diagrama de blocos e português estruturado) que receba dois valores inteiros nas variáveis A e B. O programa deve trocar os valores entre as variáveis (ou seja, ao término do programa a variável A deve ter o valor inicial de B e vice-versa). Apresentar as duas variáveis no final.
*/

export default function Inverte(...valores) {
  return valores.reverse()
}

if (import.meta.vitest) {
  it('Inverte', () => {
    expect(Inverte(21, 42)).toStrictEqual([42, 21])
    expect(Inverte(26, 6)).toStrictEqual([6, 26])
  })
}