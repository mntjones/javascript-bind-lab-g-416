const app = "I don't do much.";

const digitalClock = {
  time: Math.round(Date.now() / 1000), 
  startTicking: function() { setInterval(() => this.time++, 1000); }
};

const censor = (word, string) => {
  return string.replace(word, "BLEEP");
};

const violenceCensor = censor.bind('violence', null);