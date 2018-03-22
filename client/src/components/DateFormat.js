const dateFormat = props => {
  const launchDate = new Date(props.date);
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const day = launchDate.getDate();
  const month = launchDate.getMonth();
  const year = launchDate.getFullYear();

  const formattedDate = `${monthNames[month]} ${day}, ${year}`
  return formattedDate
}

export default dateFormat
