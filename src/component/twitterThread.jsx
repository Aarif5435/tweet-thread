import Thread from "./thread";
import { tweetData } from "../data";

export const TwitterThread = () => {
  return (
      <div className="bg-[#000000] min-h-screen py-10">
        <h1 className="text-center text-2xl font-bold mb-6">Tweet Thread</h1>
        {tweetData.tweets.map((tweet) => (
          <Thread key={tweet.id} tweet={tweet} />
        ))}
      </div>
  );
};