async function success(position) {
  console.log("position:", position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const location = await (await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
  )).json();
  console.log("location:", location);
}
function error(error) {
  console.log(error);
}

navigator.geolocation.getCurrentPosition(success, error);
