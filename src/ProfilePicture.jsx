
const ProfilePicture = () => {
  

    const imageUrl = '../src/assets/user_icon.png';

    const handleClick = (e) => e.target.style.display = "none";

    return (

      <img onClick={(e)=> handleClick(e)} width='250px' src={imageUrl} alt="" />

    )
}

export default ProfilePicture
