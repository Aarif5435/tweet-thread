import { tweetData } from "../data";
import Thread from "./thread";


export const TwitterThread: React.FC = () => {
  return (
      <div className="bg-[#000000] min-h-screen py-10">
        <h1 className="text-center text-2xl font-bold mb-6">Tweet Thread</h1>
        {tweetData.tweets.map((tweet: any) => (
          <Thread key={tweet.id} tweet={tweet} />
        ))}
      </div>
  );
};