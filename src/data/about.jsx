import React from 'react';

export const aboutDescription = (
  <>
    <p>
      Join us at Blue Festival, where the beauty and power of blue music comes
      alive. Immerse yourself in a community of like-minded individuals and
      experience the magic of music that captures the spirit of the color blue.{' '}
    </p>
    <p>
      Get ready for a musical experience like no other! Blue Festival is back,
      and it's bigger and bluer than ever before. This two-day festival
      celebrates all things blue, with a lineup of talented musicians who will
      have you tapping your feet and singing along. Join us on dates and
      location for a weekend of great music, delicious food, and good vibes.
      With two stages and a diverse lineup of blues, jazz, rock, and more,
      there's something for everyone at Blue Festival. <br /> But that's not
      all! We also have a wide variety of vendors offering tasty treats and
      refreshing drinks, as well as interactive art installations and activities
      for all ages. Whether you're a seasoned festival-goer or a first-timer,
      you won't want to miss this one-of-a-kind event. Get your tickets now and
      get ready to paint the town blue! Don't miss out on the fun – grab your
      friends and family and come experience the magic of Blue Festival. See you
      there!
    </p>
    <p>
      Come and find your blue groove, celebrate the power of blue music, and
      join the blue revolution at Blue Festival.
    </p>
  </>
);

export const aboutHashtags = [
  'BlueFestival',
  'BlueMusic',
  'TrueBlue',
  'FindYourBlueGroove',
  'BlueRevolution',
  'BlueCommunity',
  'FeelTheRhythmOfTheBlue',
  'BlueVibes',
  'CelebrateBlue',
  'ImmerseInBlue',
  'BlueExperience',
  'TheBluesComeAlive',
  'MusicInBlue',
  'BlueCelebration',
  'BlueConnection',
];

/**
 * @typedef KeyPoint
 * @prop {string} title The title of key point
 * @prop {string} src The image source path of key point
 * @prop {React.ReactNode} description The descriptoin paragraph element
 */

/** @type KeyPoint[] */
export const aboutKeyPoints = [
  {
    title: 'Music',
    src: '/images/blue-square-1.png',
    description: (
      <>
        <p>
          The primary focus of Blue Festival is the celebration of music. All
          performers and acts featured in the festival are chosen based on their
          ability to showcase the "blue" theme, whether it's through the use of
          blue instruments, blue-themed lyrics, or simply an overall blue vibe.{' '}
        </p>
        <p>
          The festival aims to create an immersive experience for attendees by
          showcasing a diverse range of musical genres that capture the spirit
          of the color blue.
        </p>
      </>
    ),
  },
  {
    title: 'Community',
    src: '/images/blue-square-2.png',
    description: (
      <>
        <p>
          Blue Festival is not just a music festival, it's a community
          gathering. The festival aims to create a welcoming and inclusive
          environment where people from all walks of life can come together to
          celebrate their love of music and the color blue.
        </p>
        <p>
          In addition to the music performances, there are also opportunities
          for attendees to participate in workshops, activities, and interactive
          experiences that foster a sense of community and connection.
        </p>
      </>
    ),
  },
  {
    title: 'Sustainability',
    src: '/images/blue-square-3.png',
    description: (
      <>
        <p>
          Blue Festival is committed to promoting sustainability and reducing
          its environmental impact. The festival encourages attendees to
          practice eco-friendly behaviors, such as using reusable water bottles
          and bags, carpooling or using public transportation, and properly
          disposing of waste.
        </p>
        <p>
          The festival also works with vendors and partners who share its
          commitment to sustainability by using environmentally friendly
          materials and practices. The goal is to create a festival that not
          only celebrates music and community but also demonstrates a commitment
          to protecting the planet.
        </p>
      </>
    ),
  },
];
