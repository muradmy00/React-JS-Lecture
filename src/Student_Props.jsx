import propTypes from 'prop-types'

function Student_Props(props){


    return(

        <div className="student">

         <p>Name: {props.name}</p>
         <p>Age : {props.age}</p>
         <p>isStudent: {props.isStudent ? "Yes":"No"}</p>

        </div>

    );

}

// Props Type =---> every props are own datatype example name is a string , age is a number , we have any wrong then show this console

Student_Props.propTypes = {

    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,

}

// Default Props

Student_Props.defaultProps = {
    name: "No Define",
    age: 0,
    isStudent: false,
}



export default Student_Props