import { FC } from "react";
import RacketCard from "@/components/Rackets/RacketCard";
import { Racket } from "@/types/racket";

type Props = {
  getData: () => Promise<Racket[]>;
};

const RacketsHomeList: FC<Props> = async ({ getData }) => {
  const rackets = await getData();
  return (
    <>
      {rackets.map((racket) => (
        <RacketCard key={racket.id} racket={racket} />
      ))}
    </>
  );
};

export default RacketsHomeList;
