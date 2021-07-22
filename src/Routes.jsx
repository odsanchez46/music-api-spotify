import { LinearProgress } from '@material-ui/core'
import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const FavoritePage = lazy(() => import('./components/pages/FavoritePage'))
const HomePage = lazy(() => import('./components/pages/HomePage'))

const Routes = () => (
  <Suspense fallback={<LinearProgress color="secondary" />}>
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/favoritos' component={FavoritePage} />
    </Switch>
  </Suspense>
)

export default Routes
