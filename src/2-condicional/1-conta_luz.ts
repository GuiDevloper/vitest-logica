/*
Construa um algoritmo que leia o valor de uma conta de luz (CL) e, caso o valor seja maior que R$ 50,00 apresente a mensagem: “Você está gastando muito”. Caso contrário exiba a mensagem: “Seu gasto foi normal”.
*/

export default function Conta_Luz(valor_conta: number) {
  if (valor_conta > 50.0) {
    return 'Você está gastando muito'
  }
  return 'Seu gasto foi normal'
}

if (import.meta.vitest) {
  it('Conta_Luz', () => {
    expect(Conta_Luz(51.0)).toBe('Você está gastando muito')
    expect(Conta_Luz(45.5)).toBe('Seu gasto foi normal')
    expect(Conta_Luz(0)).toBe('Seu gasto foi normal')
  })
}