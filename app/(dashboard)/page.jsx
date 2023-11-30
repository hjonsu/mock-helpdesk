import Link from "next/link";
import BulletinBoard from "./BulletinBoard";
import Loading from "./loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col mx-0 px-0 gap-2 md:mx-auto md:flex-row">
      <div className="flex flex-col basis-1/3">
        <h2 className="my-1">Dashboard</h2>
        <p>
          Welcome to our Helpdesk Dashboard Application! This application is
          designed to provide you with real-time insights and effortless
          management of your helpdesk operations. Be sure to update your profile
          information!
        </p>
        <div className="flex justify-center my-8 md:justify-start">
          <Link href="/tickets">
            <button className="btn-primary">View Tickets</button>
          </Link>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <BulletinBoard />
      </Suspense>
    </main>
  );
}
