const dateFormat = props => {
  let launchDate = new Date(props.date);
  let monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  let day = launchDate.getDate();
  let month = launchDate.getMonth();
  let year = launchDate.getFullYear();

  let formattedDate = `${monthNames[month]} ${day}, ${year}`
  return formattedDate
}

export default dateFormat
