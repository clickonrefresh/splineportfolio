import Spline from "@splinetool/react-spline";
import { Suspense } from "react";

export default function Logo() {
  return (
    <Suspense fallback={null}>
      <Spline scene="https://prod.spline.design/JGJUGPUUSJkSmUuk/scene.splinecode" />
    </Suspense>
  );
}
