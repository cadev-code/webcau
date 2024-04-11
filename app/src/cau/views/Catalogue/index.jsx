// react tools imports
import { 
  useState, 
  useEffect 
} from 'react'

// api's imports
import { getCatalogue } from '../../api/catalogue.api'

// components imports
import { 
  CatalogueContainer, 
  CatalogueMain
} from './styled'
import { 
  ArticleCard, 
  CatalogueNav,
  HeaderCard, 
  ModalArticle
} from '../../components'

export const Catalogue = () => {

  const [articles, setArticles] = useState([])
  const [leakedArticles, setLeakedArticles] = useState([])
  const [filterActive, setFilterActive] = useState('')
  const [searchFieldValue, setSearchFieldValue] = useState('')

  const loadCatalogue = async() => { // carga los registros del catalogo
    const { data } = await getCatalogue()
    setArticles(data)
    setLeakedArticles(data)
  }

  useEffect(() => {
    loadCatalogue() // ejecuta antes de dibujar el frontend
    setFilterActive('todo')
  }, [])

  const filterArticlesBtns = (category) => { // inserta el filtrado por btn click
    category === 'todo'
      ? setLeakedArticles(articles)
      : setLeakedArticles(articles.filter(art => art.type === category))
  }

  const btnFilterClick = (e) => { // ejecuta al dar click en btn filter
    const { id } = e.target
    filterArticlesBtns(id)
    setSearchFieldValue('') // limpia buscador
    setFilterActive(id)
  }

  const filterArticlesInput = (value) => { // filtra por valor de input buscador
    const filteredOut = articles.filter(art => art.incidencia.toLowerCase().includes(value.toLowerCase()))
    setLeakedArticles(filteredOut)
    setFilterActive('')
  }

  const searchOnChange = (e) => { // ejecuta al cambiar texto del input search
    console.log('active')
    const { value } = e.target
    setSearchFieldValue(value)

    if(value === '') { // si se limpia el buscador muestra todo
      setLeakedArticles(articles) // inserta
      setFilterActive('todo') // activa btn
      return
    }

    filterArticlesInput(value) // filtra en base al buscador
  }

  // modal
  const [openModal, setOpenModal] = useState(false)
  const [modalArticle, setModalArticle] = useState([])

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => {
    setOpenModal(false)
    setModalArticle([])
  }

  const articleOnClick = (article) => {
    handleOpenModal()
    setModalArticle([article])
  }

  return (
    <CatalogueContainer>
      <CatalogueNav 
        filterActive={ filterActive }
        btnFilterClick={ btnFilterClick }
        searchFieldValue={ searchFieldValue }
        searchOnChange={ searchOnChange }
      />
      <CatalogueMain>
        <HeaderCard />
        {
          leakedArticles.map(article => (
            <ArticleCard 
              key={ article.id } 
              article={ article }
              articleOnClick={ articleOnClick }
            />
          ))
        }
      </CatalogueMain>

      {
        openModal
        ? <ModalArticle 
            article={ modalArticle }
            open={ openModal }
            handleCloseModal={ handleCloseModal }
          />
        : ''
      }

    </CatalogueContainer>
  )
}

/**
 * muestra de solucion al catalogo 
 * 
 * JSX --------
 * soluciones.map(txt => 
 *  !txt.includes('•')
 *    ? <p>{txt}</p>
 *    : <p style={{ paddingLeft: '10px' }}>{txt}</p>
 * )
 * ------------
 * 
 * JS ----------
 * const result = data[0]
 * const convertSolucion = result.solucion.split('<br>').map(txt => txt.replace('**', '•'))
 * setSoluciones(convertSolucion)
 * -------------
 */