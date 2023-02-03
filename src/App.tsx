import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {MainLayout} from "./layouts/MainLayout";
import {Loadable} from "react-loadable";

import "./scss/app.scss";

// Загрузка файла тогда, когда это необходимо будет
// React.lazy()
const Cart = React.lazy(() => import(/* webpackChunkName: 'Cart' */'./pages/Cart'))
const FullPizza = React.lazy(() => import(/* webpackChunkName: 'FullPizza' */'./pages/FullPizza'))
const NotFound = React.lazy(() => import(/* webpackChunkName: 'NotFound' */'./pages/NotFound'))

// React Loadable
// const Cart = Loadable({
//     loader: () => import(/* webpackChunkName: "Cart" */ './pages/Cart'),
//     loading: () => <div>Идёт загрузка корзины...</div>,
// });

//React
// export const SearchContext = React.createContext()

function App() {
    //React
    // const [searchValue, setSearchValue] = React.useState('')

    return (
        <Routes>
           <Route path='/' element={<MainLayout/>}>
               <Route path='' element={<Home />}/>
               <Route path='cart' element={
                   <Suspense fallback={ <div>Идет загрузка корзины...</div> }>
                       <Cart />
                    </Suspense>
               }/>
               <Route path='pizza/:id' element={
                   <Suspense fallback={ <div>Идет загрузка...</div> }>
                       <FullPizza />
                   </Suspense>
               }/>
               <Route path='*' element={
                   <Suspense fallback={ <div>Идет загрузка...</div> }>
                       <NotFound />
                   </Suspense>
               }/>
           </Route>
        </Routes>
    );
}

export default App;
