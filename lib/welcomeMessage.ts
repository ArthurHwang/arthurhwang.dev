function getDayText(currentDay: number): string {
  let dayMessage;

  switch (currentDay) {
    case 0:
      dayMessage = "Happy Sunday!";
      break;
    case 1:
      dayMessage = "Happy Monday!";
      break;
    case 2:
      dayMessage = "Happy Tuesday!";
      break;
    case 3:
      dayMessage = "Happy Wednesday!";
      break;
    case 4:
      dayMessage = "Happy Thursday!";
      break;
    case 5:
      dayMessage = "Happy Friday!";
      break;
    case 6:
      dayMessage = "Happy Saturday!";
      break;
    default:
      dayMessage = "Good Day!";
  }
  return dayMessage;
}

function getHourText(currentHour: number): string {
  let hourMessage;

  if (currentHour < 3) {
    hourMessage = "Happy Late Night To Ya!";
  } else if (currentHour < 12) {
    hourMessage = "Good Morning!";
  } else if (currentHour < 16) {
    hourMessage = "Good Afternoon!";
  } else if (currentHour < 20) {
    hourMessage = "Good Evening!";
  } else {
    hourMessage = "Good Night!";
  }
  return hourMessage;
}

export function getWelcomeMessage() {
  let date = new Date(),
    day = date.getDay(),
    hour = date.getHours();

  let dayMessage = getDayText(day),
    hourMessage = getHourText(hour),
    randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0,
    message;

  randomNumber ? (message = dayMessage) : (message = hourMessage);

  return message;
}
