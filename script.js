async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}

const imgprofile = document.getElementById("img-profile");
const btnRandom = document.getElementById("btn-random");
const imgicon = document.getElementById("span-gender-icon");

if (resp.data.results.gender == "male") {
  imgicon.innerText = "👨";
} else if (resp.data.results.gender == "female") {
  imgicon.innerText = "👩";
}

imgprofile.src = resp.data.results.picture.large;
