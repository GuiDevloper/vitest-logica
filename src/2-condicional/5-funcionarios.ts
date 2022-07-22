/*
Construa um algoritmo que apresente o nome e o salário dos funcionários, de acordo com os seguintes critérios:
- Salários que sejam maiores ou iguais a R$ 1000,00 e menores ou iguais a R$ 1500,00
- Funcionários pertencentes aos departamentos de produção ou engenharia.
Obs: Os departamentos são reconhecidos pelas letras (P) Produção e (E) Engenharia
São fornecidos o nome do funcionário (NF), o seu salário (SAL) e o departamento onde trabalha (DEP).
*/

type Funcionario = [
  nome: string,
  salario: number,
  departamento: string
]

export default function Funcionarios(funcionarios: Funcionario[]) {
  return funcionarios.reduce((total, atual) => {
    if ((atual[1] < 1000 || atual[1] > 1500) ||
      (atual[2] !== 'P' && atual[2] !== 'E')) {
      return total
    }
    let departamento: string
    if (atual[2] === 'P') {
      departamento = 'producao'
    } else {
      departamento = 'engenharia'
    }
    return {
      ...total,
      [departamento]: [
        ...total[departamento],
        { nome: atual[0], salario: atual[1] }
      ]
    }
  }, { producao: [], engenharia: [] })
}

if (import.meta.vitest) {
  it('Funcionarios', () => {
    expect(Funcionarios([
      ['Maria', 1500, 'P'],
      ['João', 1500, 'E'],
      ['Joana', 900, 'P'],
    ])).toStrictEqual({
      producao: [{ nome: 'Maria', salario: 1500 }],
      engenharia: [{ nome: 'João', salario: 1500 }]
    })

    expect(Funcionarios([
      ['Maria', 900, 'P'],
      ['João', 1500, 'E'],
      ['Joana', 1200, 'A'],
    ])).toStrictEqual({
      producao: [],
      engenharia: [{ nome: 'João', salario: 1500 }]
    })
  })
}