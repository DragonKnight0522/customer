import React from "react";
import Slider from './components/Home/Slider';
import Welcome from "./components/Home/Welcome";
import Intro from "./components/Home/Intro";
import Quality from "./components/Home/Quality";
import Guide from "./components/Home/Guide";
import GhostExtracts from "./components/Home/GhostExtracts";
import TorchXGhost from "./components/Home/TorchXGhost";
import FeedBacks from "./components/Home/FeedBacks";

export default function Home() {
  return (
    <div>
      <Slider />
      <Welcome />
      <Intro />
      <Quality />
      <Guide />
      <GhostExtracts />
      <TorchXGhost />
      <FeedBacks />
    </div>
  )
}
