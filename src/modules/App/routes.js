import { Switch, Router } from 'react-router-dom';
import React, { Suspense , lazy } from 'react';
import { Redirect } from 'react-router-dom';
import history from '../../config/history';
import NavBar from '../../components/NavBar/NavBar';
import Spinner from '../../components/Spinner/Spinner';
import PrivateRoute from '../../helpers/privateroutes';
import AuthRoute from '../../helpers/authroutes';
const Login = lazy(() => import('../Login'));
const Post = lazy(() => import('../Post'));
const Comments = lazy(() => import('../Comments') );



// Root routes
const AllRoutes = () => {
    const Routes = (props) => {
       


        return (
            < Router history={history} >

                  
                    <Spinner />
                     <Suspense fallback={<Spinner requesting={true}></Spinner>}>
                     <NavBar {...props} />
                        <Switch >

                            < Redirect exact={true} from="/" to="login" />
                             <PrivateRoute exact={true}  path="/comments/:id" component={Comments} />
                             <PrivateRoute exact={true}  path="/post" component={Post} /> 
                             <AuthRoute exact={true}  path="/login" component={Login} />
                           
                            


                        </Switch>
                    </Suspense>
           
            </Router>
        )
    }
    return <Routes />
};




export default AllRoutes;