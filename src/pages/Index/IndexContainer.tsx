import Index from './Index'
import React from "react"
import {connect} from "react-redux"
import {withRouter, RouteComponentProps} from "react-router-dom"
import {compose} from "redux"
import {Helmet} from "react-helmet"
import {AppStateType} from "../../redux/store"



type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToProps = {

}

type OwnPropsType = {

}

type PathPropsType = {

}

type PropsType = MapStateToPropsType & MapDispatchToProps & OwnPropsType & RouteComponentProps<PathPropsType>

class IndexContainer extends React.PureComponent<PropsType> {

    render () {

        return (
            <>
                <Helmet>
                    <title>Index page</title>
                </Helmet>
                <Index />
            </>
        )
    }
}



const mapStateToProps = (state: AppStateType) => ({

})

const mapDispatchToProps: MapDispatchToProps = {

}



export default compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter,
)(IndexContainer)