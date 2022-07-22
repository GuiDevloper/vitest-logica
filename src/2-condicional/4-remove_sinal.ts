/*
Construa um algoritmo que leia um número inteiro (positivo ou negativo) e apresente o seu módulo (número sem sinal)
*/

export default function Remove_Sinal(numero: number) {
  if (numero < 0) {
    return numero * -1
  }
  return numero
}

if (import.meta.vitest) {
  it('Remove_Sinal', () => {
    expect(Remove_Sinal(-10)).toBe(10)
    expect(Remove_Sinal(+25)).toBe(25)
  })
}