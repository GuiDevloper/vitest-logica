/*
Construa um algoritmo para calcular o valor a ser pago pelo período de estacionamento do automóvel (PAG). O usuário entra com os seguintes dados: hora (HE) e minuto (ME) de entrada, hora (HS) e minuto (MS) de saída. Sabe-se que este estacionamento cobra hora cheia, ou seja, se passar um minuto ele cobra a hora inteira. O valor cobrado pelo estacionamento é:
- R$ 4,00 para 1 hora de estacionamento
- R$ 6,00 para 2 horas de estacionamento
- R$ 1,00 por hora adicional (acima de 2 horas)
*/

/**
 * @param HE Hora de entrada (ex: "10:30")
 * @param HS Hora de saída (ex: "14:30")
 * @returns Valor arrendondado a ser pago
 */
export default function Estacionamento(HE: string, HS: string) {
  const [EHora, EMinuto] = HE.split(':').map(n => parseInt(n))
  const [SHora, SMinuto] = HS.split(':').map(n => parseInt(n))
  let total_minutos = (SHora - EHora) * 60
  if (EMinuto > 0) {
    total_minutos -= 60
    total_minutos += 60 - EMinuto
  }
  if (SMinuto > 0) {
    total_minutos += 60
  }
  if (total_minutos > 120) {
    return Math.ceil((total_minutos - 120) / 60) + 6
  }
  if (total_minutos > 60 && total_minutos <= 120) {
    return 6
  }
  return 4
}

if (import.meta.vitest) {
  it('Estacionamento', () => {
    expect(Estacionamento('10:00', '14:00')).toBe(8)
    expect(Estacionamento('10:00', '12:00')).toBe(6)
    expect(Estacionamento('10:00', '11:00')).toBe(4)
    expect(Estacionamento('10:00', '15:01')).toBe(10)
  })
}