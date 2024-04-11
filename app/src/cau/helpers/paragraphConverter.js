export const paragraphConverter = (text) => {
  return(
    text
      .split('<br>') // separa linea de texto
      .map(txt => txt.replace('**', '•'))
  )
}