const listData = `Mitski: “Your Best American Girl” (2015)
Future: “March Madness” (2015)
Carly Rae Jepsen: “Cut to the Feeling” (2017)
Lil Uzi Vert: “XO Tour Llif3” (2017)
Young Thug: "Halftime" (2015)
Kanye West: "New Slaves" (2013)
Charli XCX & Christine and the Queens: “Gone” (2019)
Chance the Rapper (feat. Saba): “Angels” (2015)
Jamie xx (feat. Young Thug & Popcaan): “I Know There’s Gonna Be (Good Times)” (2015)
Robyn: “Dancing On My Own” (2010)
Kanye West (feat. Pusha T): “Runaway” (2010)
Young Thug & Metro Boomin (Metro Thuggin): “The Blanguage” (2014)
HYUNA: “Bubble Pop!” (2011)
Ariana Grande: “Into You” (2016)
Drake: “Passionfruit” (2017)
Kendrick Lamar: “Sing About Me, I'm Dying Of Thirst” (2012)
Earl Sweatshirt: “Chum” (2012)
Vince Staples: “Big Fish” (2017)
FKA Twigs: “sad day” (2019)
Skrillex: “Cinema” (2011)
Migos: “T-Shirt” (2017)
Kacey Musgraves: “Slow Burn” (2018)
Frank Ocean: “Nike” (2016)
Mitski: “Nobody” (2018)
Charli XCX: “Track 10” (2017)
Chief Keef (feat. Lil Reese): “I Don’t Like” (2012)
Snail Mail: “Speaking Terms” (2018)
Phoebe Bridgers: “Motion Sickness” (2017)
Smino (feat. Bari, Jean Deaux & Noname): “Krash Kourse” (2017)
Lana Del Rey: “The greatest” (2019)
Carly Rae Jepsen: “Run Away With Me” (2015)
Roddy Ricch: “Die Young” (2018)
Bobby Shmurda: “Hot Nigga” (2014)
YG: “BPT” (2014)
Skepta (feat. JME): “That's Not Me” (2014)
A Tribe Called Quest: “We the People...” (2016)
Polo G: “Finer Things” (2018)
Donnie Trumpet & the Social Experiment: "Sunday Candy" (2014)
Kaytranada: “Lite Spots” (2016)
Ariana Grande: “no tears left to cry” (2018)
Isaiah Rashad: “Free Lunch” (2016)
Lorde: “Perfect Places” (2017)
Future: "Trap N*****s" (2015)
Mac Miller: "Diablo" (2014)
Travis Scott & Young Thug (feat. Quavo): “Pick Up the Phone” (2016)
Soccer Mommy: "Your Dog" (2018)
Fetty Wap: “Trap Queen” (2014)
Danny Brown (feat. Kendrick Lamar, Ab-Soul & Earl Sweatshirt): “Really Doe” (2016)
Noname (feat. Saba, Smino & Phoelix): “Shadow Man” (2016)
Rae Sremmurd (feat. Juicy J): “Powerglide” (2018)
A$AP Rocky: “Goldie” (2012)
Frank Ocean: “Nights” (2016)
Kendrick Lamar: “HUMBLE.” (2017)
Dua Lipa: “New Rules” (2017)
Grimes: "REALiTi (demo)” (2015)
Cardi B: “Bodak Yellow” (2017)
Azealia Banks: “212” (2011)
Joey Bada$$ x Capital STEEZ: “Survival Tactics” (2012)
Goldlink (feat. Brent Faiyaz & Shy Glizzy): “Crew” (2017)
Daft Punk (feat. Pharrell WIlliams): “Get Lucky” (2013)
Rihanna: “Bitch Better Have My Money” (2015)
Lady Gaga: “Perfect Illusion” (2016)
Drake: “Headlines” (2011)
Jai Paul: "Str8 Outta Mumbai" (2013)
Christine and the Queens: “Intranquillité” (2016)
Japanese Breakfast: “Everybody Wants to Love You” (2016)
Tame Impala: “New Person, Same Old Mistakes” (2015)
Chance The Rapper (feat. BJ The Chicago Kid, Lili K. & Kiara Lanier): “Good Ass Intro” (2013)
Disclosure (feat. AlunaGeorge): "White Noise" (2013)
Blackpink: “As If It’s Your Last” (2017)
Sky Ferreira: “Heavy Metal Heart” (2013)
Rich Homie Quan: "Type of Way" (2013)
Freddie Gibbs & Madlib: “Thuggin'” (2012)
The Weeknd: “The Morning” (2011)
DaBaby: “Intro” (2019)
Playboi Carti (feat. Lil Uzi Vert): “wokeuplikethis*” (2017)
Tirzah: “Do You Know” (2018)
Clairo: “Bags” (2019)
Jeremih: “Oui” (2015)
Waka Flocka Flame: “Hard in da Paint” (2010)
Kelela: “Rewind” (2015)
The Internet (feat. KAYTRANADA): “Girl” (2015)
Blocboy JB (feat. Drake): “Look Alive” (2018)
Sango (feat. Smino): “Khlorine” (2018)
Sufjan Stevens: "Should Have Known Better" (2015)
Odd Future: “Oldie” (2012)
Lil Uzi Vert: “LUV SCARS K.o 1600” (2017)
Lil Baby & Gunna: “Drip Too Hard” (2018)
A$AP Ferg: “Plain Jane” (2017)
Lorde: “Tennis Court” (2013)
Ravyn Lenae (feat. Appleby): “Free Room” (2016)
Nipsey Hussle (feat. YG): “Last Time That I Checc'd” (2018)
2NE1: “I Am the Best” (2011)
Porter Robinson & Madeon: “Shelter” (2016)
Camila Cabello (feat. Young Thug): “Havana” (2017)
Vic Mensa: “Down on My Luck” (2014)
ScHoolboy Q: “Man of the Year” (2013)
Kehlani: “Undercover” (2017)
Travis Scott: “Stargazing” (2018)
Far East Movement (feat. The Cataracs, DEV): “Like A G6” (2010)`;

const listDataArray = listData.split("\n");
const parsedListData = listDataArray.map(str => {
  const split = str.split(":");
  const artist = split[0];
  const title = split[1].slice(2, -8);
  const year = split[1].slice(-5, -1);
  return {
    artist,
    title,
    year,
    body: ""
  };
});

const yearCounts = {};
for (let item of parsedListData) {
  const year = item.year;
  if (yearCounts.hasOwnProperty(year)) {
    yearCounts[year] += 1;
  } else {
    yearCounts[year] = 1;
  }
}
// console.log(yearCounts);
console.log(parsedListData);
