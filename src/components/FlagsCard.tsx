import axios from "axios";

function FlagsCard() {
  const getData = async () => {
    try {
      const responce = await axios.get("https://restcountries.com/v3.1/all");
      console.log(responce.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  getData();
  return <div></div>
}

export default FlagsCard;
