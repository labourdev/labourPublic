import React from "react";
import { largeCardsData } from "../data/joinOurTeamData";
import LargeCard from "../components/LargeCard";

const LargeCards = () => {
  return (
    <>
      {largeCardsData?.map((card, index) => (
        <div key={index}>
          <LargeCard data={card} />
        </div>
      ))}
    </>
  );
};

export default LargeCards;
