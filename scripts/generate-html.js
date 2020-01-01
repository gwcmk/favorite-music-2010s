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
      body: `
    <p>
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
      your culture. Coming to terms with your otherness while longing for acceptance
      is so painful and confusing. Mitski expresses that so well in this song:
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
      decade because she writes about self-acceptance in a way that resonates with
      me and many others like me.
    </p>    
      `
    },
    {
      artist: "Future",
      title: "March Madness",
      year: "2015",
      body: `
  <p>
    Future’s series of mixtapes leading up to <em>DS2</em> was an incredible run,
    and “March Madness” is the standout track of the bunch. At first glance, this
    era of his music seems to be a shameless dive into hedonism. Nearly every
    track mentions borderline abuse of drugs and alcohol, typically under the
    guise of nihilism. However, listening to these mixtapes in their entirety, a
    fuller picture comes into focus. Cracks in his armor betray deep sadness,
    particularly on tracks like “Codeine Crazy” and “Throw Away.”
  </p>
  <p>
    While I can’t relate to his struggles, I think any straight man raised to
    aspire to toxic masculine ideals understands the pressure to hide those
    emotions, and that’s the undercurrent of his music that really resonated with
    me in 2015 when these mixtapes were coming out. I was grappling with anxiety
    and depression and was not emotionally mature enough to fully understand and
    process how I was feeling. “March Madness” captures the full range of these
    experiences. Just within the hook, he goes from drugs as an escape (“Dirty
    soda in a styrofoam/Spend a day to get my mind blown”), violence and paranoia
    (“Shoot a nigga like a film in a movie/Nigga, gone let 'em have it”), to
    worrying about police brutality (Ballin' like the March Madness/All these cops
    shooting niggas, tragic”). Regardless of what you’re going through, there are
    times when seemingly too many things pile up. Future is one of the best at
    expressing what it’s like trying to appear cool through that overwhelming
    feeling of anxiety.
  </p>
    `
    },
    {
      artist: "Carly Rae Jepsen",
      title: "Cut to the Feeling",
      year: "2017",
      body: `
    <p>
      Honesty and positivity are two of the biggest mantras of Carly’s music and
      it’s been such a source of inspiration for me throughout this decade. I had an
      internship in the summer of 2015, and I have so many memories of listening to
      <em>Emotion</em> at work or walking around Chicago. To be honest, I wasn’t in
      a good place mentally at the time, but in those moments Carly’s music
      genuinely brought me hope and optimism. The missing link was that I wasn’t
      sure why. I think of that summer as the first time in my life when I started
      to be honest with myself about how I felt, and I credit her music with helping
      me better understand my own feelings. “Cut to the Feeling” makes me feel the
      energy of wanting to find the joy in life and just going for it. Back then, If
      you asked me what I thought of that, I’d probably think it’s a bit immature.
      Now though, I can’t think of anything more important.
    </p>
      `
    },
    { artist: "Lil Uzi Vert", title: "XO Tour Llif3", year: "2017", body: "" },
    {
      artist: "Young Thug",
      title: "Halftime",
      year: "2015",
      body: `
  <p>
    Anyone who knows me and has talked to me about rap knows that I think Young
    Thug is an icon of our time. As we close out the decade, his influence is
    everywhere. Despite all of the imitators though, no one is quite like him. He
    effortlessly rides any kind of beat, adding his own unique flair to every song
    he’s on. What he may lack in heady lyricism, he makes up for with
    otherworldly, innovative flows and memorable lines. Name one other rapper who
    has 1% of what it takes to pull off
    <a href="https://youtu.be/KyCTZ8c-trc?t=45" target="_blank"
      >an 11 second “skrrrt” while wearing a designer trench coat, leather studded
      pants, and Timbs</a
    >. 🐐
  </p>
    `
    },
    {
      artist: "Kanye West",
      title: "New Slaves",
      year: "2013",
      body: `
  <p>
    At the beginning of the decade, I thought Kanye was a creative genius and the
    greatest hip hop artist of all time, and my arguments for it are all on
    display in “New Slaves.” Most of my opinions were formed regarding craft
    rather than culture, and this song, along with the rest of <em>Yeezus</em>, is
    masterfully made. Kanye and his producers put together sparse instrumentals
    that serve as an excellent backdrop for Kanye’s raw and gritty vocals. The
    collaborator and sample choice throughout is also great. The outro of “New
    Slaves” pairs Frank Ocean and a sample of 60s Hungarian rock song, and it’s a
    surprisingly perfect fit for this song. I never would have guessed that the
    guy who made this song would one day be a Republican shill who speaks at mega
    churches, but unfortunately that’s where we’re at. In spite of him tarnishing
    his legacy, this song, along with the rest of Yeezus, stands as a testament to
    his talent, taste, and skill. It’s a powerful, passionate statement that will
    stick with me for many more years to come.
  </p>  
    `
    },
    {
      artist: "Charli XCX & Christine and the Queens",
      title: "Gone",
      year: "2019",
      body: `
    <p>
      One of my favorite things to follow in the latter half of this decade was
      Charli XCX’s string of projects, starting with her <em>Vroom Vroom EP</em> in
      early 2016, which were a creative partnership between her and PC Music’s
      founder A.G. Cook. “Gone” feels like a culmination of that era. Incorporating
      a lot of the harsh electronic sounds from PC Music’s aesthetic, Charli’s music
      started sounding more futuristic. I loved these songs stylistically but even
      more so because they complemented her greatest strength, her songwriting.
      Through all of the glitches and synths, her songs are so human. “Gone” does
      this best, exploring the intersection of love, insecurity, and social anxiety.
      That specific combination of feelings is so crippling, but overcoming it feels
      so good. I think she said it best herself:
    </p>
    <p class="quote">
      “Both this song and video are a huge release of energy for me. When I hear it
      and when I dance to it I feel truly euphoric and alive, like I’m pushing out
      all the bad feelings from my brain. [It’s] like I’m channeling all my anger
      and frustration (and sometimes sadness) into dancing it all away.”
      <a href="https://www.instagram.com/p/Bz_APevn3H5/" target="_blank"
        >(source)</a
      >
    </p>
    <p>
      One of the biggest changes in my music taste during this decade was my
      increasing love for pop. There’s something so universal and freeing about a
      good pop song. The world sucks sometimes and we often look for ways to escape,
      and I find pop to be one of the most pure feelings of release that you can
      find in music. Charli is one of the best at chasing that feeling, and that’s
      why she’s one of my favorite artists of the decade.
    </p>    
      `
    },
    {
      artist: "Chance the Rapper (feat. Saba)",
      title: "Angels",
      year: "2015",
      body: `
    <p>
      Before Gen Z grew up, all young millennials can remember when cynicism was the
      norm. Chance the Rapper challenged that with so much joy that even we couldn’t
      deny it. I think one of the main reasons it worked was because he wasn’t just
      happy for the sake of it, it was really grounded in reality. “Angels” is my
      favorite song of his because it is my favorite example of that. It’s such a
      fun song, first going on a tour of his Chicago roots, but when it gets real
      (“It's too many young angels on the southside/Got us scared to let our
      grandmommas outside”), it’s so heartbreaking. It makes the refrain “Wear your
      halo like a hat, that's like the latest fashion/I got angels all around me,
      they keep me surrounded” that much more powerful.
    </p>
    <p>
      Chance raps and sings honestly about what is happening around him in Chicago,
      and faced with those harsh realities, he chooses to follow the light and seek
      out love. His love for God, his family, friends, and the city of Chicago is so
      pure and that’s what really shines through in his music. I have a very vivid
      memory of walking alone after studying late at night (down Noyes coming from
      Mudd back to my apartment), not feeling good about much in life, and I
      listened to this song for the first time. In that moment, I had a rising sense
      of optimism in my chest, a feeling that everything will be alright. That’s a
      precious feeling, and I have “Angels” to thank for that.
    </p>    
      `
    },
    {
      artist: "Jamie xx (feat. Young Thug & Popcaan)",
      title: "I Know There’s Gonna Be (Good Times)",
      year: "2015",
      body: ""
    },
    { artist: "Robyn", title: "Dancing On My Own", year: "2010", body: "" },
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
      body: `
    <p>
      I spent a lot of time following Young Thug’s career between 1017 Thug and
      Jeffrey, and a huge part of that was a ton of singles, loosies, and leaks. Out
      of all of the canceled and scrapped Young Thug projects over the decade, I’m
      most disappointed that we never got Metro Thuggin :(
    </p>    
      `
    },
    {
      artist: "HYUNA",
      title: "Bubble Pop!",
      year: "2011",
      body: `
  <p>
    K-pop has played a pretty interesting and unexpected role in my life
    throughout this past decade, and it started with this song. I don’t know
    exactly when I first heard “Bubble Pop!”, but I remember liking it. I thought
    it was catchy, even though I didn’t understand any of the lyrics. I
    intuitively knew that I couldn’t share this with any of my friends though.
    They would think it’s so weird!
  </p>
  <p>
    I continued to listen to this song and eventually more K-pop songs that I
    liked, but I also continued to be ashamed of it. A few months (or maybe a
    year?) later “Gangnam Style” blew up around the world, and my high school was
    included in that mania. This seemed like a good opportunity to start to admit
    that I liked a few K-pop songs, and my friends didn’t think much of it.
    Despite that, this was still a source of discomfort for me.
  </p>
  <p>
    I can’t really explain why, but I somehow just swept under the rug that I had
    this deep shame about liking something that’s so clearly foreign, even though
    it’s literally from the country where my family is from. Bottling up that
    shame and self deprecation drove a lot of insecurity and anxiety in my life,
    and when I finally got around to acknowledging that, my fandom of K-pop was
    really important. It was such a blatant example of how I had internalized
    racism and white supremacy and how those power structures had become pillars
    in my worldview. It’s kinda silly in retrospect that this fun pop song was a
    catalyst for something so important, but in the following years, I’ve come to
    enjoy more K-pop songs in the process of becoming more accepting of my racial
    and cultural identity.
  </p>
  <p>
    A few other notes about why I genuinely think this song is gr8:
  </p>
  <ul>
    <li>
      HyunA really pushed boundaries and set the stage for current and future
      generations of female K-pop stars, challenging outdated standards of
      acceptability.
    </li>
    <li>
      She also has the solo star power that many idols can’t capitalize on because
      of being part of a group. She set the precedent for her style of music, and
      we’re seeing the influence of that today.
    </li>
    <li>
      The dubstep breakdown is pretty funny and borderline absurd now, but that
      kind of exploration of western trends, as long as it’s not appropriative, is
      a fun part of modern K-pop that I enjoy.
    </li>
    <li>
      Many K-pop singles commit to concepts and fully go for them. When it doesn’t
      it the mark, they can come of as kitschy or melodramatic, but when songs
      like this do it well, that kind of maximalism produces some of the best pop
      songs.
    </li>
  </ul>  
    `
    },
    { artist: "Ariana Grande", title: "Into You", year: "2016", body: "" },
    { artist: "Drake", title: "Passionfruit", year: "2017", body: "" },
    {
      artist: "Kendrick Lamar",
      title: "Sing About Me, I'm Dying Of Thirst",
      year: "2012",
      body: ""
    },
    { artist: "Earl Sweatshirt", title: "Chum", year: "2012", body: "" },
    { artist: "Vince Staples", title: "Big Fish", year: "2017", body: "" },
    { artist: "FKA Twigs", title: "sad day", year: "2019", body: "" },
    {
      artist: "Skrillex",
      title: "Cinema",
      year: "2011",
      body: `
  <p>
    I have a tendency to overthink things, and that was even more common when I
    was younger. For music, I often felt like I needed to be able to explain why I
    liked something or else it didn’t make sense. I remember Skrillex actually
    challenging me in this regard. I don’t think I’m alone in Skrillex being the
    first dubstep that I had ever heard. It was harsh sounding and almost painful
    to listen to, compared to the other EDM I listened to at the time. In my
    opinion, it didn’t really have many musical qualities. Despite that, I liked
    it. Now that I’m older and have listened to a lot more music, I have plenty of
    reasons why I think Skrillex made good music and innovated in major ways. The
    absence of those explanations was important for me though, because I credit my
    love of this song as a teen for opening my mind to weirder things. I didn’t
    really know why I liked this song, but that didn’t matter. I just needed to
    find something that went as HARD as this shit, and for the next 9 years that
    became a huge part of my life, teaching me to follow my feelings more than my
    thoughts.
  </p>  
    `
    },
    { artist: "Migos", title: "T-Shirt", year: "2017", body: "" },
    { artist: "Kacey Musgraves", title: "Slow Burn", year: "2018", body: "" },
    { artist: "Frank Ocean", title: "Nike", year: "2016", body: "" },
    { artist: "Mitski", title: "Nobody", year: "2018", body: "" },
    { artist: "Charli XCX", title: "Track 10", year: "2017", body: "" },
    {
      artist: "Chief Keef (feat. Lil Reese)",
      title: "I Don’t Like",
      year: "2012",
      body: ""
    },
    { artist: "Snail Mail", title: "Speaking Terms", year: "2018", body: "" },
    {
      artist: "Phoebe Bridgers",
      title: "Motion Sickness",
      year: "2017",
      body: ""
    },
    {
      artist: "Smino (feat. Bari, Jean Deaux & Noname)",
      title: "Krash Kourse",
      year: "2017",
      body: ""
    },
    { artist: "Lana Del Rey", title: "The greatest", year: "2019", body: "" },
    {
      artist: "Carly Rae Jepsen",
      title: "Run Away With Me",
      year: "2015",
      body: ""
    },
    { artist: "Roddy Ricch", title: "Die Young", year: "2018", body: "" },
    { artist: "Bobby Shmurda", title: "Hot Nigga", year: "2014", body: "" },
    { artist: "YG", title: "BPT", year: "2014", body: "" },
    {
      artist: "Skepta (feat. JME)",
      title: "That's Not Me",
      year: "2014",
      body: `
    <p>
      This song and its
      <a href="https://www.youtube.com/watch?v=_xQKWnvtg6c" target="_blank"
        >music video</a
      >
      are what got me into grime. I had heard a few grime songs before, but “That’s
      Not Me” really made it click for me. The lofi setup felt really underground
      and genuine even though I didn’t know anything about the scene, and the raps
      sound like radio freestyles (in a good way). A random bit that’s stuck with me
      since then is that you can use headphones as a mic (lol).
    </p>    
      `
    },
    {
      artist: "A Tribe Called Quest",
      title: "We the People...",
      year: "2016",
      body: ""
    },
    { artist: "Polo G", title: "Finer Things", year: "2018", body: "" },
    {
      artist: "Donnie Trumpet & the Social Experiment",
      title: "Sunday Candy",
      year: "2014",
      body: `
    <p>
      I’ve seen this song at Chance’s shows many times now, but two of those shows
      really stayed with me. In the lead up to <em>Coloring Book</em>, Chance had so
      much support in Chicago from all different kinds of people. I was at Towkio’s
      show for his debut mixtape, and Chance showed up to perform this song, along
      with “Heaven Only Knows.” It was at the Metro, a sizable venue but nothing
      compared to where Chance would be performing at just a year later, and it
      truly felt like every single person there was singing along to this song. I
      had a similar but much larger scale experience a few months later at the
      Pitchfork Festival in Chicago. Chance had really done it; he had the whole
      city behind him with a message of overwhelming positivity. “Sunday Candy” is
      so comfy, especially if you’ve been raised in a Christian household, and
      sharing that nostalgia and joy with the city was something I’ll never forget.
    </p>    
      `
    },
    { artist: "Kaytranada", title: "Lite Spots", year: "2016", body: "" },
    {
      artist: "Ariana Grande",
      title: "no tears left to cry",
      year: "2018",
      body: ""
    },
    { artist: "Isaiah Rashad", title: "Free Lunch", year: "2016", body: "" },
    {
      artist: "Lorde",
      title: "Perfect Places",
      year: "2017",
      body: `
  <p>
    Lorde is one of the best pop songwriters of our time, particularly when
    writing about the millennial experiences of longing. At once, this song
    expresses how it feels to not have a sense of belonging in the world as well
    how difficult it is to cope with the anxiety of trying to find a place for
    ourselves. The hook of this song is just perfect:
  </p>
  <p class="quote">
    <em>
      All of the things we’re taking<br />
      'cause we are young and we’re ashamed<br />
      Send us to perfect places<br />
      All of our heroes fading<br />
      Now I can’t stand to be alone<br />
      Let's go to perfect places
    </em>
  </p>
  <p>
    It doesn’t matter who you are, where you grew up, or what you’re into, there
    is something immensely relatable about this feeling and she nails it. The song
    closes with the sobering realization that inevitably follows:
  </p>
  <p class="quote">
    <em>
      All the nights spent off our faces<br />
      Tryna find these perfect places<br />
      What the fuck are perfect places anyway?
    </em>
  </p>  
    `
    },
    { artist: "Future", title: "Trap N*****s", year: "2015", body: "" },
    { artist: "Mac Miller", title: "Diablo", year: "2014", body: "" },
    {
      artist: "Travis Scott & Young Thug (feat. Quavo)",
      title: "Pick Up the Phone",
      year: "2016",
      body: ""
    },
    { artist: "Soccer Mommy", title: "Your Dog", year: "2018", body: "" },
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
      artist: "A$AP Rocky",
      title: "Goldie",
      year: "2012",
      body: `
  <p>
    Yams and Rocky were so ahead of their time, and it felt that way in 2011. They
    took internet rap mainstream, creating something post-regional before that was
    so commonplace. As much as I found the OG internet pioneers like Lil B
    enjoyable, songs like “Goldie” took it to another level. I liked these songs
    at the time, but it’s made better today by reflecting on how influential all
    of the stylistic choices of Rocky’s early music and visuals have been
    throughout the decade. R.I.P. A$AP Yams
  </p>  
    `
    },
    { artist: "Frank Ocean", title: "Nights", year: "2016", body: "" },
    { artist: "Kendrick Lamar", title: "HUMBLE.", year: "2017", body: "" },
    {
      artist: "Dua Lipa",
      title: "New Rules",
      year: "2017",
      body: `
  <p>
    One of my favorite concert memories of the decade was going to a Dua Lipa show
    at a relatively small music festival in Incheon, Korea. At the time, this song
    was blowing up a bit, but Dua Lipa was nowhere close to the popstar that she
    is today. That didn’t matter though.
    <a href="https://youtu.be/KnMT--t23LY?t=86" target="_blank"
      >The Korean fans around me knew this song by heart, and their energy was so
      infectious</a
    >. It’s a universally fun and empowering song, and one of my favorite pop
    songs of the decade.
  </p>  
    `
    },
    { artist: "Grimes", title: "REALiTi (demo)", year: "2015", body: "" },
    { artist: "Cardi B", title: "Bodak Yellow", year: "2017", body: "" },
    { artist: "Azealia Banks", title: "212", year: "2011", body: "" },
    {
      artist: "Joey Bada$$ x Capital STEEZ",
      title: "Survival Tactics",
      year: "2012",
      body: `
    <p>
      As mainstream rap continues to grow away from the traditions and styles of the
      golden age era, lots of kids today still prefer 90s aesthetics. Particularly
      young rappers, like Joey Bada$$ on his first mixtape, capture the same energy
      that the rap legends of the past generation did. It’s fresh but familiar in a
      way that truly affirms the timelessness of hip hop, and as a fan of both
      generations, that’s awesome to see.
    </p>    
      `
    },
    {
      artist: "Goldlink (feat. Brent Faiyaz & Shy Glizzy)",
      title: "Crew",
      year: "2017",
      body: ""
    },
    {
      artist: "Daft Punk (feat. Pharrell WIlliams)",
      title: "Get Lucky",
      year: "2013",
      body: ""
    },
    {
      artist: "Rihanna",
      title: "Bitch Better Have My Money",
      year: "2015",
      body: ""
    },
    { artist: "Lady Gaga", title: "Perfect Illusion", year: "2016", body: "" },
    { artist: "Drake", title: "Headlines", year: "2011", body: "" },
    { artist: "Jai Paul", title: "Str8 Outta Mumbai", year: "2013", body: "" },
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
      artist:
        "Chance The Rapper (feat. BJ The Chicago Kid, Lili K. & Kiara Lanier)",
      title: "Good Ass Intro",
      year: "2013",
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
      artist: "Sky Ferreira",
      title: "Heavy Metal Heart",
      year: "2013",
      body: ""
    },
    { artist: "Rich Homie Quan", title: "Type of Way", year: "2013", body: "" },
    {
      artist: "Freddie Gibbs & Madlib",
      title: "Thuggin'",
      year: "2012",
      body: ""
    },
    { artist: "The Weeknd", title: "The Morning", year: "2011", body: "" },
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
      artist: "Lil Uzi Vert",
      title: "LUV SCARS K.o 1600",
      year: "2017",
      body: ""
    },
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
    { artist: "2NE1", title: "I Am the Best", year: "2011", body: "" },
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
    { artist: "Vic Mensa", title: "Down on My Luck", year: "2014", body: "" },
    { artist: "ScHoolboy Q", title: "Man of the Year", year: "2013", body: "" },
    { artist: "Kehlani", title: "Undercover", year: "2017", body: "" },
    { artist: "Travis Scott", title: "Stargazing", year: "2018", body: "" },
    {
      artist: "Far East Movement (feat. The Cataracs, DEV)",
      title: "Like A G6",
      year: "2010",
      body: `
    <p>
      Now that I live in socal, this song makes a lot more sense lol. Even though
      it’s trashy and is the musical equivalent of an Asian guy with an undercut
      and/or perm, I’ll take this over anything 88rising has put out this decade. I
      love my fellow azns :^)
    </p>    
      `
    }
  ])
);
