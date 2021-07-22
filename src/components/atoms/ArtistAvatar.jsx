import { Avatar } from '@material-ui/core'

import PropTypes from 'prop-types'

const ArtistAvatar = ({ name, id, ...attr }) => {
  return (
    <Avatar title={name} {...attr} >
      {name[0]}
    </Avatar>
  )
}

ArtistAvatar.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
}

export default ArtistAvatar
