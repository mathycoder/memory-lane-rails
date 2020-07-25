import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers} from '../actions/userActions'

const Home = ({users, fetchUsers}) => {
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            Home
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)