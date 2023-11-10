import Image from "./Image";
import Name from  "./Name"
import Price from "./Price";
import Description from "./Description";
import princesse from "./princesse.jpg"
const lastName = "aicha"
function App() {
  return (

    <>
    <Image></Image>
    <Name></Name>
    <Description></Description>
    <Price></Price>
    {lastName && (
      <img src= {princesse} alt = "ma fiile" /> )}
    </>
  );
};

export default App;
