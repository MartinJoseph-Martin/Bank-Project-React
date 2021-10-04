import { Route,BrowserRouter as Router,Switch } from "react-router-dom";

import Head from "./components/core/head";

import NotFound from "./components/core/notfound";

import {Provider} from 'react-redux'

import { store } from "./redux/store/store";
import AddCustomer from "./components/customer/addCustomer";
import AddAccount from "./components/customer/addAccount";

import AddTransaction from "./components/transaction/addTransaction";
import ViewCustomer from "./components/customer/viewCustomer";
import ViewTransaction from "./components/transaction/viewTransaction";
import ViewBank from "./components/bankdetails/viewbank";
import AddBankBranch from "./components/bankdetails/addBranch";
import viewPreviousTransaction from "./components/transaction/viewPreviousTransaction";
import viewCustomerAccounts from "./components/customer/viewCustomerAccounts";
import Home from "./components/core/home";
import Login from "./components/core/login";
import Admin from "./components/core/admin";
import Footer from "./components/core/footer";



const AppRouter=(
    <Provider store={store}>
    <Router>
     
        <Head></Head>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login'component={Login}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/addcus' component={AddCustomer}/>
            <Route path='/viewcus' component={ViewCustomer}/>
            <Route path='/addacc' component={AddAccount}/>
            <Route path='/addtrans' component={AddTransaction}/>
            <Route path='/viewtrans' component={ViewTransaction}/>
            <Route path='/viewbank' component={ViewBank}/>
            <Route path='/addbank' component={AddBankBranch}/>
            <Route path='/previoustransaction' component={viewPreviousTransaction}/>
            <Route path='/account' component={viewCustomerAccounts}/>
            <Route component={NotFound}/>
        </Switch>
        <Footer></Footer>
        

    </Router>
    </Provider>
)

export default AppRouter