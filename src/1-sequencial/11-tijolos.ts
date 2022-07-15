/*
Faça o algoritmo (diagrama de blocos e português estruturado) que calcule a quantidade de tijolos iguais (QTD) necessários para construir uma determinada parede. São dados de entrada do programa: dimensões do tijolo (comprimento – CT e largura – LT) e dimensões da parede a ser construída (comprimento – CP e largura – LP).
*/

export default function QTD_Tijolos(tijolo: number[], parede: number[]) {
  const [CTijolo, LTijolo] = tijolo
  const [CParede, LParede] = parede
  return (CParede * LParede) / (CTijolo * LTijolo)
}

if (import.meta.vitest) {
  it('QTD_Tijolos', () => {
    expect(QTD_Tijolos([0.2, 1], [2, 2])).toStrictEqual(20)
    expect(QTD_Tijolos([1, 1], [5, 2])).toStrictEqual(10)
    expect(QTD_Tijolos([1, 1], [1, 1])).toStrictEqual(1)
  })
}