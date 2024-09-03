import Proptypes from 'prop-types'

function UserGreeting(props){


    // if (props.isLoggedIn) {

    //     return <h2>Welcome {props.username}</h2>
        
    // }
    // else{
    //     return <h2>Please Log in</h2>
    // }

    return (props.isLoggedIn ? <h2>Welcome {props.username}</h2>:<h2>Please Log in</h2>)

} 

UserGreeting.proptypes = {

    isLoggedIn:Proptypes.bool,
    username:Proptypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn:false,
    username:"Guest",
}

export default UserGreeting