$(document).ready(function(){
    $("#tardis-takeoff").play();
    var image_array = ["https://s-media-cache-ak0.pinimg.com/originals/c8/3a/ce/c83ace6e2751a862d21d48c59d63a780.jpg", "http://img01.deviantart.net/8061/i/2014/300/5/a/doctor_who__patrick_troughton_by_jonathanslack1997-d84bfq1.jpg", "https://pbs.twimg.com/media/Br2wu9mIcAEgfTm.jpg:large",
             "https://www.tombakerofficial.com/wp-content/uploads/revslider/tbgallery/04.jpg",
                   "http://i.dailymail.co.uk/i/pix/2013/11/02/article-2485073-19275F1300000578-213_306x423.jpg",
                   "http://www.chicagonow.com/geek-girl-chicago/files/2013/12/ColinBaker_Six.jpg",
                   "http://digitalspyuk.cdnds.net/15/30/768x1152/gallery-uktv-doctor-who-sylvester-mccoy.jpg",
                   "https://s-media-cache-ak0.pinimg.com/originals/7a/35/45/7a3545cbc686c6fa1ec53be36f47f524.jpg",
                   "http://black-leatherjacket.com/blog/wp-content/uploads/2015/11/6-beyondhollywood.jpg", "https://s-media-cache-ak0.pinimg.com/originals/81/66/d7/8166d762bf2c451e48cd030dd2e5a021.jpg", "http://www.themindrobber.co.uk/matt-smith-karen-gillan-amy-pond/matt-smith-the-eleventh-doctor.jpg", "https://www.david-tennant-news.com/wp-content/uploads/2013/11/5012708-high-doctor-who.jpg", "http://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2014/01/doctor_who_peter_capaldi.jpg", "https://s-media-cache-ak0.pinimg.com/originals/c8/3a/ce/c83ace6e2751a862d21d48c59d63a780.jpg"
                  ];
    var img_count=0;
    var about_array = ['William Hartnell was the first actor to play the role of the Doctor, from 1963 to 1966. He left the role due to failing health (some say studio issues). He reappeared in a later episode, The Three Doctors, along with Patrick Troughton and Jon Pertwee, but his scenes were filmed from his hospital bed and he was only shown on a screen in the TARDIS. He died in 1975, a mere 3 years after that guest appearance.<br><br>"The least important things, sometimes, my dear boy, lead to the greatest discoveries."', 'Patrick Troughton played the Doctor from 1966 to 1969. He played the character as sort of a hobo, and his trademark was a recorder that he would carry around and play. It was in his final story that the Doctor was first revealed to be of a race called Time Lords. After leaving in 1969, he returned to the show three times, in 1972 (The Three Doctors), 1983 (The Five Doctors), and in 1985 (The Two Doctors). He died in 1987.<br><br>"Our lives are different to anybody else&#39s. That&#39s the exciting thing. Nobody in the universe can do what we&#39re doing."', 'Jon Pertwee&#39s Doctor was earthbound for the first part of his five-year tenure (1970-1974), having been exiled as punishment by the Time Lords. While on earth, Pertwee would drive around in a jalopy he called Bessie. It was during his exile that the Doctor began his long association with the United Nations Task Force (UNIT). He revisited the role in both The Three Doctors in 1972 and in the Five Doctors in 1985, and also in two later BBC audio productions. He died in 1996.<br><br>"A straight line may be the shortest distance between two points, but it is by no means the most interesting."', 'Tom Baker, who played the doctor from 1974 to 1981 (the longest period for an actor to play the Doctor), was considered the favorite Doctor by most fans of the show&#39s original 26 year run. He wore an insanely huge scarf and liked to hand out sugary candies called Jelly Babies. He ended up marrying one of his companions from the show, Lalla Ward (Romana). Although he declined to appear in The Five Doctors, he did return to the Doctor Who set in 50th anniversary episode The Day of the Doctor, although it is a little vague as to whether he is playing a future incarnation of the Doctor or not.<br><br>"There&#39s no point in being grown up if you can&#39t be childish sometimes."', 'Peter Davison played the Doctor from 1981 to 1984. He was more serious than his predecessors, though not in a brooding way. He wore a stalk of celery on his jacket, something of which few took notice. Many of his stories took harder tones. One of his most memorable episodes involved the death of one of his companions, Adric. Years after leaving the role, Davison took it up again to record many audio adventure Doctor Who stories through the company Big Finish. He also reprised the role in the short Red Nose Day special video Time Crash with David Tennant.<br><br>"For some people, small, beautiful events are what life is all about."', 'Colin Baker (no relation to Tom Baker) is generally regarded as the least favorite Doctor. He was as arrogant as he was colorful. He is the only actor to have officially been fired from the role, his reply to which was to refuse to film a regeneration scene to hand over the role to the next actor. He did, however, revisit the role in several audio adventures by Big Finish. He held the role on the show from 1984 to 1986.<br><br>"A little gratitude wouldn&#39t irretrievably damage my ego..."', 'Sylvester McCoy was final actor to play the role during the show&#39s original run. He had to fill both his own and Colin Baker&#39s roles in the regeneration scene leading to his incarnation. His trademark was an umbrella with a question mark as a handle. He portrayed the Doctor as both comical and manipulative. He held the role through the end of the original run in 1989. He came back for the Doctor Who television movie in 1996 to turn the role over to the next actor. He also starred in many Big Finish Doctor Who audio adventures.<br><br>"You can always judge a man by the quality of his enemies."', 'Paul McGann only appeared twice on screen as the Doctor, first in the Doctor Who television movie released in 1996, and second, in a short internet episode entitled Night of the Doctor, produced in conjunction with the 50th anniversary episode Day of the Doctor, and which featured his regeneration scene. BBC had hoped the 1996 movie would lead to a comeback for the show, but that did not happen. McGann&#39s main body of work in Doctor Who was through the audio adventures by produced by Big Finish. Of course, his character has also had quite a bit of development in novels, so fans are not left without any idea of why this Eighth Doctor is like.<br><br>"I can&#39t make your dream come true forever, but I can make it come true today."', 'When Christopher Eccelston took over as the Doctor in 2005, the show had just come back as a series after being off the air (with the exception of the movie) for 17 years. Christopher&#39s Doctor brought several new things to the show, including somewhat ordinary clothing rather than something flamboyant, and short hair for the first time (McGann, who had short hair, had to wear a wig because he was told the Doctor always had long hair). Although Eccelston&#39s run on the show was short-lived, his performance definitely cemented the success of the show&#39s return. Christopher had a chance to return to the show for the 50th anniversary episode the Day of the Doctor but declined.<br><br>"You were fantastic, absolutely fantastic. And do you know what? So was I."', 'David Tennant is by far considered the most popular Doctor of the new series, if not the whole series from the beginning. What makes his story all the better is that the reason he went into acting in the first place is because, since he was a young boy, he always wanted to play the Doctor. Tennant has been the only Doctor to use up a regeneration and not change bodies, at least not the first time. Offscreen, Tennant married Georgia Moffett in 2011. Not only did Moffett play the Doctor&#39s daughter in a Tennant episode, but Georgia is in fact the real-life daughter of Peter Davison, the fifth Doctor. Tennant left the role in 2010, after being the Doctor for five years. However, he did return in the previously mentioned Day of the Doctor alongside Matt Smith, the eleventh Doctor, and a heretofore unseen previous incarnation (more on that later).<br><br>"I don&#39t want to go!"', 'Matt Smith is the youngest actor to play the Doctor to date. He is best known for his bowtie and the occasional Fez. He also has the distinction of being featured in a U.S.Lego set, along with Peter Capaldi. Smith was originally a football(soccer) player until an injury sidelined him, but he had a chance to show off his incredible talent in an episode of Doctor Who. Smith was fantastic at playing a really old person in a young person&#39s body (the Doctor was, at that time, over 900 years old). In 2013, he starred in the 50th anniversary episode of the Show, The Day of the Doctor. This episode was actually aired in movie theaters as well as on television. Matt gave up the role in the very next episode.<br><br>"The way I see it, every life is a pile of good things and bad things. The good things don&#39t always soften the bad things, but vice versa, the bad things don&#39t always spoil the good things and make them unimportant."', 'John Hurt&#39s role as the so-called War Doctor was a bit unusual. He appeared on the show only once as a main character, in The Day of the Doctor, and only for a few seconds in the episode before that. Yet his incarnation was one that took place between Paul McGann and Christopher Eccelston, during the time of a great Time War between his race and their archenemies the Daleks. The story was that we had not seen him or heard of him before because the Doctors after him did not really consider Hurt&#39s character to be the Doctor because of his unsavory wartime activities, including, or so they thought, the destruction of his own planet and race (Matt Smith and David Tennant saved him from actually doing so). He has also had at least one book written about his character, and he has done four Big Finish audio productions. Hopefully, audiences will have more chances to catch him on the screen, but only time will tell.<br><br>"Great men are forged in fire. It is the privilege of lesser men to light the flame."', 'Peter Capaldi is the latest, though not the last, incarnation of the Doctor, picking up the role in 2014. He has announced that 2017 will be his last year as the Doctor. His Doctor is known for bluntness and an inability to sense or understand other&#39s feelings, making him seem altogether more alien than most of the other Doctors. He is also the only Doctor to have a regular Scottish accent (David Tennant is Scottish but hid his accent for the show). Although the picture shows him wearing a white dress shirt and a long dress coat, more often than not in the show he is wearing a hoodie and a t-shirt, and even sunglasses (the glasses are, shall we say, high tech). Capaldi also plays the electric guitar several times throughout the show. Big Finish at this time is not allowed to produce any Peter Capaldi stories, presumably because of his current role on television, but they will most likely be able to produce some once Capaldi has left.<br><br>"I&#39m the Doctor. I&#39ve lived for over 2000 years. I&#39ve made many mistakes. It&#39s about time that I did something about that."'];
    var side=true;

    $("#card").click(function(){
      $(this).toggleClass("flipped");
      side=!side;
      console.log(side);

      if(side){
        $(".front").css("background-image", "url("+image_array[img_count]+")");
      }else{
        $(".back").css("background-image", "url("+image_array[img_count]+")");
      }
      $("p").replaceWith("<p>"+about_array[img_count]+"</p>");
      // Increment counter
      img_count++;

      // If counter has reached the end of the image array, reset it.
      if(img_count==image_array.length){
        img_count=0;
      }
    });
});