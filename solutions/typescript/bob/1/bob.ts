export function hey(message: string): string {
  switch(true){
    case message.trim().endsWith("?") && message === message.toUpperCase() && /\p{L}/u.test(message):
      return "Calm down, I know what I'm doing!";
      break;
    case message.trim().endsWith("?"):
      return "Sure.";
      break;
    case message === message.toUpperCase() && /\p{L}/u.test(message):
      return "Whoa, chill out!";
      break;
    case message.trim() === "":
      return "Fine. Be that way!";
      break;
    default:
      return "Whatever.";
  }
}