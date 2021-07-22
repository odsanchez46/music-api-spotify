import { FormControlLabel, Box, makeStyles } from '@material-ui/core'
import { useState } from 'react'
import PropTypes from 'prop-types'
import RedCheckbox from './RedCheckbox'
import RedInput from './RedInput'

const useStyles = makeStyles((theme) => ({
  checkboxContainer: {
    [theme.breakpoints.only('xs')]: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  checkbox: {
    paddingRight: '0'
  }
}))

const Search = ({ onChange }) => {
  let interval = null

  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState([
    { selected: true, key: 'album', name: 'Álbumes' },
    { selected: true, key: 'track', name: 'Canción' },
    { selected: true, key: 'artist', name: 'Artista' }
  ])

  const toggleControl = (index) => e => {
    e.preventDefault()
    const newFilter = [...filters]
    newFilter[index].selected = !newFilter[index].selected
    setFilters(newFilter)
    newSearch()
  }

  const changeSearch = (e) => {
    clearTimeout(interval)

    interval = setTimeout(() => {
      setQuery(e.target.value)
      newSearch(e.target.value)
    }, 200)
  }

  const newSearch = (value = query) => {
    onChange({
      q: value,
      type: filters.filter(f => f.selected).map(f => f.key)
    })
  }

  const styles = useStyles()
  return (
    <>
      <RedInput
        id="buscar"
        label="Buscar"
        placeholder="Ingresa un texto para realizar la búsqueda"
        fullWidth
        margin="normal"
        onKeyUp={changeSearch}
      />
      <Box className={styles.checkboxContainer} >
        {
          filters.map((filter, index) => (
            <FormControlLabel
              key={filter.key}
              control={<RedCheckbox className={styles.checkbox} checked={filter.selected} name={filter.name} />}
              label={filter.name}
              onClick={toggleControl(index)}
            />
          ))
        }
      </Box>
    </>
  )
}

Search.propTypes = {
  onChange: PropTypes.func
}

export default Search
