"use client"

import EasyAndFun from "@/components/EasyAndFun";
import Header from "@/components/Header";
import HeartFeltCleaning from "@/components/HeartFeltCleaning";
import MagicFoamClean from "@/components/MagicFoamClean";
import Satisfying from "@/components/Satisfying";
import Supports from "@/components/Supports";
import ViralTiktok from "@/components/ViralTiktok";
import WhatMagicFoam from "@/components/WhatMagicFoam";

export default function Home() {
  return (
    <div className="max-w-[1920px] overflow-hidden mx-auto">
      <Header />
      <ViralTiktok />
      <MagicFoamClean />
      <EasyAndFun />
      <HeartFeltCleaning />
      <Supports />
      <Satisfying />
      <WhatMagicFoam />
    </div>
  );
}
