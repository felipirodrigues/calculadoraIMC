export const niveis = [
  {titulo:'Magreza', cor: '#96a3ab', icone: 'down', imc:[0, 18.5]},
  {titulo:'Normal', cor: '#0ead69', icone: 'up', imc:[18.6, 24.9]},
  {titulo:'Sobrepeso', cor: '#e2b039', icone: 'down', imc:[25, 30]},
  {titulo:'Obsidade', cor: '#c3423f', icone: 'down', imc:[30.1, 99]}
]

export const calcularIMC = (altura, peso) => {
  const imc = peso / (altura * altura)

  for (let chave in niveis){
    if (imc >= niveis[chave].imc[0] && imc < niveis[chave].imc[1]){
      niveis[chave].seuImc = imc
      return niveis[chave]
    }
  }
  return null
}