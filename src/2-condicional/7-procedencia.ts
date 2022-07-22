/*
Construa um algoritmo que tendo como dados de entrada o preço de um produto (PR) e seu código de origem (CO), apresente o preço e a sua procedência, de acordo com a tabela abaixo:
Código de Origem (CO) - Procedência
1 Sul
2 Sudeste
3 Centro-Oeste
4 Norte
5 Nordeste
*/

export default function Procedencia(preco: number, origem: number) {
  const procedencias = ['Sul', 'Sudeste', 'Centro-Oeste', 'Norte', 'Nordeste']
  if (!procedencias[origem - 1]) {
    return 'Procedência desconhecida!'
  }
  return `Preço: ${preco}, Procedência: ${procedencias[origem - 1]}`
}

if (import.meta.vitest) {
  it('Procedencia', () => {
    expect(Procedencia(400, 1)).toBe('Preço: 400, Procedência: Sul')
    expect(Procedencia(1000, 3)).toBe('Preço: 1000, Procedência: Centro-Oeste')
    expect(Procedencia(720, 1)).toBe('Preço: 720, Procedência: Sul')
  })
}