import { Box, Button, TextField, Typography } from '@material-ui/core'
import { useState } from 'react'
import PropTypes from 'prop-types'

const TokenSpotify = ({ onChange }) => {
  const [api, setApi] = useState('')

  const updateApiKey = () => {
    onChange(api)
  }

  const changeApi = (e) => {
    setApi(e.target.value.trim())
  }

  return (
    <>
      <Box paddingTop="1.5rem" paddingBottom="1.5rem" paddingLeft=".3rem">
        <Typography variant="h4" component="h2">
          API Key Invalida
        </Typography>
      </Box>
      <Box display="flex" width="80%" >
        <TextField onChange={changeApi} fullWidth={true} label="Ingresa la api key" variant="outlined" />
        <Button variant="contained" color="primary" size="large" onClick={updateApiKey} >Actualizar</Button>
      </Box>
    </>
  )
}

TokenSpotify.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default TokenSpotify
