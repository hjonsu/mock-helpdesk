import Loading from "../loading";
import { Suspense } from "react";
import ProfileInfo from "./ProfileInfo";

export default function Profile() {
  return (
    <main className="text-center flex flex-col justify-center items-center gap-4">
      <div className="card">
        <div className="flex flex-col gap-4 w-80">
          <div className="flex flex-row w-full justify-center">
            <h2>Profile: </h2>
          </div>
          <Suspense fallback={<Loading />}>
            <ProfileInfo />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
