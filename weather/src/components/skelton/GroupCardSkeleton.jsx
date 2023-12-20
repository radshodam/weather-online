import React from "react";
import { CardSkeleton } from "./CardSkeleton";

export default function GroupCardSkeleton({ count }) {

  const skeletonItems = Array.from({ length: count }, (_, index) => index + 1);

  return (
    skeletonItems.map((item) => (
      <CardSkeleton key={item} />
    ))
  );
}