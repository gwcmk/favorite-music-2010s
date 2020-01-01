const Handlebars = require("handlebars");
const template = Handlebars.compile(`
{{#each this}}
<li>
  <h5>{{artist}}, "{{title}}" ({{year}})</h5>
  {{{body}}}
</li>
{{/each}}`);
console.log(
  template([
    {
      artist: "Mitski",
      title: "Your Best American Girl",
      year: "2015",
      body: `<p>
      No song spoke so personally to my experiences and struggles this decade than
      Mitski’s “Your Best American Girl”. At the start of this decade I was living
      in Minnesota, the only Asian student at my high school and one of few POC in
      the whole community. This wasn’t something that bothered me at the time,
      having been raised in a community that truly believed that we lived in a
      post-racial world and society. I had fully bought in and viewed myself as an
      “American” through and through, though if you pressed me, I’m not sure I even
      knew what that meant. Like so many other second generation Asian Americans, I
      was shielded from most of the more overt and clearly malicious aspects of
      white supremacy, but in that process, I internalized a lot of racist ideology.
      I think it’s really natural for kids to want to fit in with their peers, and
      that innocent desire changes how you think about yourself, your ethnicity, and
      your culture. Coming to terms with your otherness and facing that resulting
      longing for belonging is so painful and confusing. Mitski expresses that so
      well in this song:
    </p>
    <p class="quote">
      <em>
        Your mother wouldn't approve of how my mother raised me<br />
        But I do, I think I do<br />
        And you're an all-American boy<br />
        I guess I couldn't help trying to be your best American girl
      </em>
    </p>
    <p>
      “Your Best American Girl” feels like such a journey, providing catharsis and
      release for anyone who’s experienced these feelings. It wraps up perfectly
      with my favorite part of this song, the slight change that she makes in the
      final chorus.
    </p>
    <p class="quote">
      <em>
        Your mother wouldn't approve of how my mother raised me<br />
        <strong>But I do, I finally do </strong>
      </em>
    </p>
    <p>
      I had both the highest highs and lowest lows of my life in the past few years,
      and through all of that, I return to this. Mitski is my favorite artist of the
      decade because she writes about self-acceptance in a way that feels so raw and
      personal to me and many others like me.
    </p>
    `
    },
    { artist: "Future", title: "March Madness", year: "2015", body: "" },
    {
      artist: "Carly Rae Jepsen",
      title: "Cut to the Feeling",
      year: "2017",
      body: ""
    },
    {
      artist: "Lil Uzi Vert",
      title: "XO Tour Llif3",
      year: "2017",
      body: ""
    },
    { artist: "Young Thug", title: "Halftime", year: "2015", body: "" },
    { artist: "Kanye West", title: "New Slaves", year: "2013", body: "" },
    {
      artist: "Charli XCX & Christine and the Queens",
      title: "Gone",
      year: "2019",
      body: ""
    },
    {
      artist: "Chance the Rapper (feat. Saba)",
      title: "Angels",
      year: "2015",
      body: ""
    },
    {
      artist: "Jamie xx (feat. Young Thug and Popcaan)",
      title: "I Know There’s Gonna Be (Good Times)",
      year: "2015",
      body: ""
    },
    {
      artist: "Robyn",
      title: "Dancing On My Own",
      year: "2010",
      body: ""
    },
    {
      artist: "Kanye West (feat. Pusha T)",
      title: "Runaway",
      year: "2010",
      body: ""
    },
    {
      artist: "Young Thug & Metro Boomin (Metro Thuggin)",
      title: "The Blanguage",
      year: "2014",
      body: ""
    },
    { artist: "Mitski", title: "Nobody", year: "2018", body: "" },
    { artist: "HYUNA", title: "Bubble Pop!", year: "2011", body: "" },
    {
      artist: "Vince Staples",
      title: "Big Fish",
      year: "2017",
      body: ""
    },
    {
      artist: "Ariana Grande",
      title: "Into You",
      year: "2016",
      body: ""
    },
    { artist: "Drake", title: "Passionfruit", year: "2017", body: "" },
    {
      artist: "Kendrick Lamar",
      title: "Sing About Me, I'm Dying Of Thirst",
      year: "2012",
      body: ""
    },
    { artist: "Earl Sweatshirt", title: "Chum", year: "2012", body: "" },
    { artist: "Skrillex", title: "Cinema", year: "2011", body: "" },
    { artist: "Migos", title: "T-Shirt", year: "2017", body: "" },
    { artist: "Frank Ocean", title: "Nike", year: "2016", body: "" },
    {
      artist: "Kacey Musgraves",
      title: "Slow Burn",
      year: "2018",
      body: ""
    },
    { artist: "FKA Twigs", title: "sad day", year: "2019", body: "" },
    { artist: "Charli XCX", title: "Track 10", year: "2017", body: "" },
    {
      artist: "Chief Keef (feat. Lil Reese)",
      title: "I Don’t Like",
      year: "2012",
      body: ""
    },
    {
      artist: "Snail Mail",
      title: "Speaking Terms",
      year: "2018",
      body: ""
    },
    {
      artist: "Phoebe Bridgers",
      title: "Motion Sickness",
      year: "2017",
      body: ""
    },
    {
      artist: "Smino (feat. Bari, Jean Deaux, & Noname)",
      title: "Krash Kourse",
      year: "2017",
      body: ""
    },
    { artist: "Mac Miller", title: "Diablo", year: "2014", body: "" },
    {
      artist: "Carly Rae Jepsen",
      title: "Run Away With Me",
      year: "2015",
      body: ""
    },
    {
      artist: "Lana Del Rey",
      title: "The greatest",
      year: "2019",
      body: ""
    },
    {
      artist: "Bobby Shmurda",
      title: "Hot Nigga",
      year: "2014",
      body: ""
    },
    { artist: "YG", title: "BPT", year: "2014", body: "" },
    {
      artist: "Skepta (feat. JME)",
      title: "That's Not Me",
      year: "2014",
      body: ""
    },
    {
      artist: "A Tribe Called Quest",
      title: "We the People...",
      year: "2016",
      body: ""
    },
    { artist: "Roddy Ricch", title: "Die Young", year: "2018", body: "" },
    { artist: "Polo G", title: "Finer Things", year: "2018", body: "" },
    {
      artist: "Donnie Trumpet & the Social Experiment",
      title: "Sunday Candy",
      year: "2014",
      body: ""
    },
    { artist: "Kaytranada", title: "Lite Spots", year: "2016", body: "" },
    {
      artist: "Ariana Grande",
      title: "no tears left to cry",
      year: "2018",
      body: ""
    },
    {
      artist: "Daft Punk (feat. Pharrell WIlliams)",
      title: "Get Lucky",
      year: "2013",
      body: ""
    },
    {
      artist: "Isaiah Rashad",
      title: "Free Lunch",
      year: "2016",
      body: ""
    },
    {
      artist: "Travis Scott & Young Thug (feat. Quavo)",
      title: "Pick Up the Phone",
      year: "2016",
      body: ""
    },
    { artist: "Fetty Wap", title: "Trap Queen", year: "2014", body: "" },
    {
      artist: "Danny Brown (feat. Kendrick Lamar, Ab-Soul & Earl Sweatshirt)",
      title: "Really Doe",
      year: "2016",
      body: ""
    },
    {
      artist: "Noname (feat. Saba, Smino & Phoelix)",
      title: "Shadow Man",
      year: "2016",
      body: ""
    },
    {
      artist: "Rae Sremmurd (feat. Juicy J)",
      title: "Powerglide",
      year: "2018",
      body: ""
    },
    {
      artist: "Sky Ferreira",
      title: "Heavy Metal Heart",
      year: "2013",
      body: ""
    },
    { artist: "A$AP Rocky", title: "Goldie", year: "2012", body: "" },
    { artist: "Frank Ocean", title: "Nights", year: "2016", body: "" },
    {
      artist: "Kendrick Lamar",
      title: "HUMBLE.",
      year: "2017",
      body: ""
    },
    { artist: "Dua Lipa", title: "New Rules", year: "2017", body: "" },
    { artist: "Grimes", title: "REALiTi (demo)", year: "2015", body: "" },
    { artist: "Cardi B", title: "Bodak Yellow", year: "2017", body: "" },
    { artist: "Azealia Banks", title: "212", year: "2011", body: "" },
    {
      artist: "Joey Bada$$ x Capital STEEZ",
      title: "Survival Tactics",
      year: "2012",
      body: ""
    },
    {
      artist: "Goldlink (feat. Brent Faiyaz & Shy Glizzy)",
      title: "Crew",
      year: "2017",
      body: ""
    },
    { artist: "Soccer Mommy", title: "Your Dog", year: "2018", body: "" },
    { artist: "Lorde", title: "Perfect Places", year: "2017", body: "" },
    {
      artist: "Rihanna",
      title: "Bitch Better Have My Money",
      year: "2015",
      body: ""
    },
    {
      artist: "The Weeknd",
      title: "The Morning",
      year: "2011",
      body: ""
    },
    {
      artist: "Lady Gaga",
      title: "Perfect Illusion",
      year: "2016",
      body: ""
    },
    { artist: "Drake", title: "Headlines", year: "2011", body: "" },
    { artist: "Future", title: "Trap N*****s", year: "2015", body: "" },
    {
      artist: "Jai Paul",
      title: "Str8 Outta Mumbai",
      year: "2013",
      body: ""
    },
    {
      artist: "Lil Uzi Vert",
      title: "LUV SCARS K.o 1600",
      year: "2017",
      body: ""
    },
    {
      artist: "Christine and the Queens",
      title: "Intranquillité",
      year: "2016",
      body: ""
    },
    {
      artist: "Japanese Breakfast",
      title: "Everybody Wants to Love You",
      year: "2016",
      body: ""
    },
    {
      artist: "Tame Impala",
      title: "New Person, Same Old Mistakes",
      year: "2015",
      body: ""
    },
    {
      artist: "Sky Ferreira",
      title: "Everything Is Embarrassing",
      year: "2012",
      body: ""
    },
    {
      artist: "Disclosure (feat. AlunaGeorge)",
      title: "White Noise",
      year: "2013",
      body: ""
    },
    {
      artist: "Blackpink",
      title: "As If It’s Your Last",
      year: "2017",
      body: ""
    },
    {
      artist: "Rich Homie Quan",
      title: "Type of Way",
      year: "2013",
      body: ""
    },
    {
      artist: "Freddie Gibbs & Madlib",
      title: "Thuggin'",
      year: "2012",
      body: ""
    },
    { artist: "Kehlani", title: "Undercover", year: "2017", body: "" },
    { artist: "DaBaby", title: "Intro", year: "2019", body: "" },
    {
      artist: "Playboi Carti (feat. Lil Uzi Vert)",
      title: "wokeuplikethis*",
      year: "2017",
      body: ""
    },
    { artist: "Tirzah", title: "Do You Know", year: "2018", body: "" },
    { artist: "Clairo", title: "Bags", year: "2019", body: "" },
    { artist: "Jeremih", title: "Oui", year: "2015", body: "" },
    {
      artist: "Waka Flocka Flame",
      title: "Hard in da Paint",
      year: "2010",
      body: ""
    },
    { artist: "Kelela", title: "Rewind", year: "2015", body: "" },
    {
      artist: "The Internet (feat. KAYTRANADA)",
      title: "Girl",
      year: "2015",
      body: ""
    },
    {
      artist: "Blocboy JB (feat. Drake)",
      title: "Look Alive",
      year: "2018",
      body: ""
    },
    {
      artist:
        "Chance The Rapper (feat. BJ The Chicago Kid, Lili K. & Kiara Lanier)",
      title: "Good Ass Intro",
      year: "2013",
      body: ""
    },
    {
      artist: "Sango (feat. Smino)",
      title: "Khlorine",
      year: "2018",
      body: ""
    },
    {
      artist: "Sufjan Stevens",
      title: "Should Have Known Better",
      year: "2015",
      body: ""
    },
    { artist: "Odd Future", title: "Oldie", year: "2012", body: "" },
    {
      artist: "Lil Baby & Gunna",
      title: "Drip Too Hard",
      year: "2018",
      body: ""
    },
    { artist: "A$AP Ferg", title: "Plain Jane", year: "2017", body: "" },
    { artist: "Lorde", title: "Tennis Court", year: "2013", body: "" },
    {
      artist: "Ravyn Lenae (feat. Appleby)",
      title: "Free Room",
      year: "2016",
      body: ""
    },
    {
      artist: "Nipsey Hussle (feat. YG)",
      title: "Last Time That I Checc'd",
      year: "2018",
      body: ""
    },
    {
      artist: "Porter Robinson & Madeon",
      title: "Shelter",
      year: "2016",
      body: ""
    },
    {
      artist: "Camila Cabello (feat. Young Thug)",
      title: "Havana",
      year: "2017",
      body: ""
    },
    {
      artist: "Vic Mensa",
      title: "Down on My Luck",
      year: "2014",
      body: ""
    },
    {
      artist: "Billie Eilish",
      title: "bitches broken hearts",
      year: "2018",
      body: ""
    },
    {
      artist: "Travis Scott",
      title: "Stargazing",
      year: "2018",
      body: ""
    },
    {
      artist: "Far East Movement (feat. The Cataracs, DEV)",
      title: "Like A G6",
      year: "2010",
      body: ""
    }
  ])
);
