import img1 from '../src/assets/user_icon.png'

function Card(){
    
    return(

        <div className="card">
            {/* PlaceOrder Image 200/200*/}

            {/* <img src="https: //via.placeholder.com/200" alt="my_img" /> */}

            <img  className='card_image' src={img1}  alt="" />
            <h2 className='card_title'>Mohiuddin Murad</h2>
            <p className='card_text' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, autem.</p>

        </div>
    );
}

export default Card