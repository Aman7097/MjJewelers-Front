import {BrowserRouter as Router,Route} from 'react-router-dom'
import {useEffect} from 'react'


import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import ProductDetails from './components/product/ProductDetails'
import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from "./components/user/Profile"
import UpdateProfile from './components/user/UpdateProfile'
import ProtectedRoute from './components/routes/ProtectedRoute'
import UpdatePassword from './components/user/UpdatePassword'
import  ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'
import{loadUser} from './actions/userActions'
import store from './store'

function App() {
  useEffect(()=>{
    store.dispatch(loadUser())
  })
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="container container-fluid">
      <Route path="/" component={Home} exact />
      <Route path="/product/:id" component={ProductDetails} exact />
      <Route path="/search/:keyword" component={Home} exact />

      <Route path="/login" component={Login}  />
      <Route path="/register" component={Register}  />
      <ProtectedRoute path="/me" component={Profile} exact />
      <Route path= '/password/forgot' component={ForgotPassword} exact/>
      <Route path= '/password/reset/:token' component={NewPassword} exact/>

      <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
      <ProtectedRoute path= '/password/update' component={UpdatePassword} exact/>
      




      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
