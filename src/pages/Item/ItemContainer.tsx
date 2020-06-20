import React from "react"
import {connect} from "react-redux"
import {withRouter, RouteComponentProps} from "react-router-dom"
import {compose} from "redux"
import {Helmet} from "react-helmet"
import {AppStateType} from "../../redux/store"
import Item from './Item'



type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToProps = {

}

type OwnPropsType = {

}

type PathPropsType = {
    itemId: string
}

type PropsType = MapStateToPropsType & MapDispatchToProps & OwnPropsType & RouteComponentProps<PathPropsType>

class IndexContainer extends React.PureComponent<PropsType> {

    render () {

        return (
            <>
                <Helmet>
                    <title>Item {this.props.match.params.itemId}</title>
                </Helmet>
                <Item itemId={this.props.match.params.itemId}/>
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