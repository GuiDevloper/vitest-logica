/*
Construa um algoritmo que calcule o novo salário (SAL_NOVO) de um funcionário. Considere que o funcionário deverá receber um reajuste de 15% caso seu salário (SAL) seja menor que 500. Se o salário for maior ou igual a 500, mas menor ou igual a 1000, o reajuste deve ser de 10%. Caso o salário seja maior que 1000, o reajuste deve ser de 5%.
*/

export default function Salario_Novo(salario: number) {
  if (salario < 500) {
    return salario + ((salario * 15) / 100)
  }
  if (salario >= 500 && salario <= 1000) {
    return salario + (salario / 10)
  }
  return salario + ((salario * 5) / 100)
}

if (import.meta.vitest) {
  it('Salario_Novo', () => {
    expect(Salario_Novo(400)).toBe(460)
    expect(Salario_Novo(730)).toBe(803)
    expect(Salario_Novo(1100)).toBe(1155)
  })
}