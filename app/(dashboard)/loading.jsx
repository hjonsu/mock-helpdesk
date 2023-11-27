"use client";
import { TailSpin, ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    // <ThreeDots
    //   height="40"
    //   width="40"
    //   color="#000"
    //   ariaLabel="loading"
    //   radius="1"
    //   wrapperStyle={{}}
    //   wrapperClass=""
    //   visible={true}
    // />
    <main className="text-center">
      <h2 className="text-primary">Loading...</h2>
      <p>Thanks for waiting</p>
    </main>
  );
}
