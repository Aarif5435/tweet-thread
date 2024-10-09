export const tweetData = {
    tweets: [
      {
        id: "1",
        user: {
          username: "Tim_Denning",
          display_name: "Tim Denning",
          profile_image: "https://path_to_profile_image.jpg",
          verified: true
        },
        timestamp: "2024-10-07T15:46:00Z",
        content: `I'm 38.\n\nWhen I was 32 I worked in a bank, went woke (then broke) & suffered depression.\n\nThen I discovered Naval Ravikant's "How to get rich" post & made several million dollars by 38\n\n8 of his insights that transformed my life (and will do the same for you):`,
        media: [
          {
            type: "image",
            url: "../assets/karan.png"
          }
        ],
        stats: {
          views: 1500000,
          replies: 75,
          retweets: 805,
          likes: 6900,
          bookmarks: 11000
        },
        interactions: {
          user_reply: {
            placeholder: "Post your reply",
            button_text: "Reply"
          }
        },
        replies: []
      }
    ]
  };
  