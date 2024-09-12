
const Buttton = () => {

    //const handleClick1 = () => console.log("Ouch!");

    //const handleClick2 = (name) => console.log(`${name} stop click me`);

    // let count = 0;

    // const handleClick = (props) => {

    //     if (count < 3) {
    //         count++;
    //         console.log(`${props} you clicked me ${count} times`);
    //     }
    //     else{
    //         console.log(`${props} stop clicking me`);
    //     }
    // }



    // Event parameter

    const handleClick = (e) => e.target.textContent = "OUCH! 🤪";

  return (
      <button onDoubleClick={(e)=> handleClick(e)}>Click Me 🙃</button>
  )
}

export default Buttton
