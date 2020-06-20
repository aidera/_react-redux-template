import React, {Suspense} from 'react'
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import {connect, Provider} from "react-redux"
import {compose} from "redux"
import {actions, initializeApp} from "./redux/app-actions"
import {getInitialized, getGlobalError} from "./redux/app-selectors"
import store, {AppStateType} from "./redux/store"
import './assets/styles/global.sass'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Preloader from './components/Preloader/Preloader'
import ErrorContent from './components/ErrorContent/ErrorContent'
import ItemContainer from './pages/Item/ItemContainer'
import IndexContainer from './pages/Index/IndexContainer'


type MapStateToProps = {
    initialized: boolean
    globalError: string | null
}

type MapDispatchToProps = {
    initializeApp: () => void
    setGlobalError: (error: string) => void
}

type StateProps = {
    isModalOpen: boolean
}

type PropsType = MapStateToProps & MapDispatchToProps

class App extends React.PureComponent<PropsType, StateProps> {

    state = {
        isModalOpen: false
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    catchAllUnhandledErrors = (promise: PromiseRejectionEvent) => {
        this.setModalError(promise.reason)

    }

    setModalError = (error: string) => {
        this.setIsModalOpen()
        this.props.setGlobalError(error)
    }

    setIsModalOpen = () => {
        this.setState({
            isModalOpen: true,
        })
    }



    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }else {
            return (
                <div className='app'>

                    <Header />

                    <main className="main">

                        <div className="content">
                            <Suspense fallback={<Preloader/>}>

                                <Switch>

                                    <Route path='/item/:itemId?'
                                           render={() => <ItemContainer/>}/>

                                    {/*<Route exact path='/'> <Redirect to='/profile'/> </Route>*/}

                                    <Route exact path='/' render={() => <IndexContainer/>}/>

                                    <Route path='*'
                                           render={() => <ErrorContent
                                               h1={'Page not found'}
                                               h2={'Sorry, we have lost this page, but... our best detectives are already looking for it!'}
                                               linkUrl={'/users'}
                                               linkText={'Get another try'}
                                               />}
                                    />

                                </Switch>

                            </Suspense>
                        </div>
                    </main>

                    <Footer />

                </div>
            )
        }
    }
}



const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    initialized: getInitialized(state),
    globalError: getGlobalError(state)
})

const mapDispatchToProps: MapDispatchToProps = {
    initializeApp,
    setGlobalError: actions.setGlobalError
}


const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App) as React.ComponentType<any>



const AppContainerWithStore = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}



export default AppContainerWithStore

