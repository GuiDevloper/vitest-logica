/*
Faça o algoritmo (diagrama de blocos e português estruturado) para calcular o valor a ser pago pelo período de estacionamento do automóvel (PAG). O usuário entra com os seguintes dados: hora (HE) e minuto (ME) de entrada, hora (HS) e minuto (MS) de saída. Sabe-se que este estacionamento cobra R$ 4,00, mas calcula as frações de hora também. Por exemplo, se a pessoa ficar 1 hora e quinze minutos, pagará R$ 5,00 (R$ 4,00 pela hora e R$ 1,00 pelos quinze minutos).
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
    total_minutos += SMinuto
  }
  return Math.round(total_minutos / 15)
}

if (import.meta.vitest) {
  it('Estacionamento', () => {
    expect(Estacionamento('10:00', '14:00')).toBe(16)
    expect(Estacionamento('12:00', '20:00')).toBe(32)
    expect(Estacionamento('08:10', '14:30')).toBe(25)
  })
}