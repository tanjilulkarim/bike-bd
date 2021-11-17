
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import Register from './Pages/Registar/Register';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Pay from './Pages/Pay/Pay';
import MyOrders from './Pages/MyOrders/MyOrders';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import Review from './Pages/Review/Review';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import AdminRoute from './AdminRoute/AdminRoute';
import AddProducts from './Pages/AddProducts/AddProducts';
import ManageProduct from './Pages/ManageProduct/ManageProduct';

function App() {
  return (
  <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route  path="/home">
              <Home></Home>
          </Route>
          <Route  path="/shop">
              <Shop></Shop>
          </Route>
          <PrivateRoute  path="/product/:id">
              <ProductDetails></ProductDetails>
          </PrivateRoute>
          <PrivateRoute path="/pay">
              <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute  path="/myOrders">
              <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute  path="/review">
              <Review></Review>
          </PrivateRoute>
          <AdminRoute  path="/manageAllOrder">
              <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute  path="/manageProduct">
              <ManageProduct></ManageProduct>
          </AdminRoute>
          <AdminRoute  path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute  path="/addProducts">
              <AddProducts></AddProducts>
          </AdminRoute>
           <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
         <Register></Register>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
       </AuthProvider>
   
  );
}

export default App;

