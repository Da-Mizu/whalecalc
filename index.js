register("command", (user) => {
  ChatLib.chat("fish : " + user*5);
  ChatLib.chat("ink : " + user);
  ChatLib.chat("prismarine : " + user*3);
  ChatLib.chat("salmon : " + user);
  ChatLib.chat("gold ingot : " + user*9);
}).setName("whalecalc");
