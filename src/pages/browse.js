import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  console.log(series, films);
  const slides = selectionFilter({ series, films });
  console.log("slides", slides);

  return <BrowseContainer slides={slides} />;
}

export default Browse;
