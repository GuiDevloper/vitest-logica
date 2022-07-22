/*
Construa um algoritmo que, tendo como dados de entrada a altura (H) e o sexo (S) de uma pessoa calcule e apresente seu peso ideal utilizando as seguintes fórmulas:
Para homens: Peso ideal (P) = (72,7 * H) – 58
Para mulheres: Peso ideal (P) = (62,1 * H) – 44,7
*/

export default function Peso_Ideal(altura: number, S: string) {
  if (S === 'H') {
    return (72.7 * altura) - 58
  }
  return (62.1 * altura) - 44.7
}

if (import.meta.vitest) {
  it('Peso_Ideal', () => {
    expect(Peso_Ideal(1.65, 'H').toFixed(2)).toBe('61.95')
    expect(Peso_Ideal(1.65, 'M').toFixed(2)).toBe('57.77')
  })
}