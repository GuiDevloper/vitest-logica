/*
Construa um algoritmo que determine quanto será gasto para encher o tanque de um carro (VG), sabendo-se que o preço da gasolina é de R$ 1,80 e o preço do álcool é de R$ 1,00. O usuário fornecerá os seguintes dados: Tipo de carro (TC) (G – gasolina ou A – álcool) e Capacidade do tanque (CT), em litros.
*/

export default function Tanque_Carro(tipo_carro: string, capacidade: number) {
  if (tipo_carro === 'G') {
    return capacidade * 1.80
  }
  return capacidade
}

if (import.meta.vitest) {
  it('Tanque_Carro', () => {
    expect(Tanque_Carro('G', 25).toFixed(2)).toBe('45.00')
    expect(Tanque_Carro('A', 30).toFixed(2)).toBe('30.00')
  })
}