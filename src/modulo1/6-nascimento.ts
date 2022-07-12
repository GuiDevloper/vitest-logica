/*
Faça o algoritmo (diagrama de blocos e português estruturado) que calcule a idade de uma pessoa, sendo que o ano atual (AA) e o ano do nascimento da pessoa (AN) são fornecidos pelo usuário. (considere que a pessoa já fez aniversário nesse ano). Apresentar a idade da pessoa depois de calculada.
*/

export default function Nascimento(atual: number, ano_nascimento: number) {
  return atual - ano_nascimento
}

if (import.meta.vitest) {
  it('Nascimento', () => {
    expect(Nascimento(2022, 1999)).toBe(23)
    expect(Nascimento(2022, 1900)).toBe(122)
    expect(Nascimento(2000, 1900)).toBe(100)
  })
}