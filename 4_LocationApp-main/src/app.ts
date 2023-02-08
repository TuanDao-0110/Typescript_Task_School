console.log("Location app starts...");
import axios from "axios";
const form = document.querySelector("form")! as HTMLFormElement;
// form?.addEventListener('submit',)
const GOOGLE_KEY = "AIzaSyDJNNFVtb2u2Vc0cA1tcC6aqWV98ZEZrKs";
const inputElement = document.getElementById("address")! as HTMLInputElement;
type GOOGLECODINGRESONSE = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESSULTS";
};
// declare let google: any;

const searchLocation = (e: Event) => {
  e.preventDefault();
  const enterAddress = inputElement.value;
  console.log(enterAddress);
  const BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enterAddress)}en&key=${GOOGLE_KEY}`;
  axios
    .get<GOOGLECODINGRESONSE>(
      BASE_URL
      // method: "get",
    )
    .then((response) => {
      //  console.log(data)
      const { data } = response;
      console.log(data)
       if (data.status !== "OK") {
         throw Error;
       }
      const coodinates = data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: coodinates,
        zoom: 8,
      });
      new google.maps.Marker({
        position: coodinates,
        map: map,
      });
     
    })
    .catch((err) => console.log(err));
};

// send data to google API
form.addEventListener("submit", searchLocation);

