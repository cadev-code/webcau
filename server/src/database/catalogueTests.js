/**
 * saltos de linea = <br>
 * opcion "•" = **
 */
// recurso
const recurso = '1) APPDATA carpeta Roaming'
const brRecurso = recurso.split('<br>')
console.log(brRecurso)

const solucion = '1) Verificar que el Patchcore este linkeando con el equipo<br>2) Verificar que tenga IP en el segmente correcto<br>3) Solicitar al Área de Infracomm con el formato correcto validar la reserva Mac del equipo'
const brSolucion = solucion.split('<br>')
const replaceSolucion = brSolucion.map(txt => txt.replace('**', '•'))
console.log(replaceSolucion)

const text = [
  {
    img: '',
    label: ''
  }
]
console.log(JSON.stringify(text))
// console.log(JSON.parse(text))