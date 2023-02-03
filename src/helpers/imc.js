export const niveis = [
  {titulo:'Magreza', cor: '#96a3ab', icone: 'down', imc:[0, 18.5]},
  {titulo:'Normal', cor: '#0ead69', icone: 'up', imc:[18.6, 24.9]},
  {titulo:'Sobrepeso', cor: '#e2b039', icone: 'down', imc:[25, 30]},
  {titulo:'Obsidade', cor: '#c3423f', icone: 'down', imc:[30.1, 99]}
]

export const calcularIMC = (altura, peso) => {
  const imcPessoa = peso / (altura * altura)

  for (let chave in niveis){
    if (imcPessoa >= niveis[chave].imc[0] && imcPessoa < niveis[chave].imc[1]){
      let niveisCopy = {...niveis[chave]};
      
      niveisCopy.seuImc = imcPessoa.toFixed(1)
      return niveisCopy
    }
  }
  return null
}