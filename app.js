async function success(position) {
  console.log("position:", position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const location = await (
    await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    )
  ).json();
  console.log("location:", location);
  const taluka = location.localityInfo.administrative[3].name;
  const district = location.localityInfo.administrative[2].name;
  const state = location.localityInfo.administrative[1].name;
  const country = location.localityInfo.administrative[0].name;

  console.log(taluka + " " + district + " " + state + " " + country);
}
function error(error) {
  console.log(error);
}

navigator.geolocation.getCurrentPosition(success, error);
