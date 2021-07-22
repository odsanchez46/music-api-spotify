import ButtonNavLink from '../atoms/ButtonNavLink'

const Navigation = () => (
  <>
    <ButtonNavLink to="/" exact >
      Inicio
    </ButtonNavLink>
    <ButtonNavLink to="/favoritos" >
      Favoritos
    </ButtonNavLink>
  </>
)

export default Navigation
