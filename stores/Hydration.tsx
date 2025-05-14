"use client";

import * as React from "react";
import { useFeedStore } from "./feed-store";


const Hydration = () => {
  React.useEffect(() => {
    useFeedStore.persist.rehydrate();
  }, []);

  return null;
};

export default Hydration;