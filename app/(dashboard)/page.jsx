import Image from "next/image";
import Link from "next/link";
import BulletinBoard from "./BulletinBoard";

export default function Home() {
  return (
    <main className="">
      <h2>Dashboard</h2>
      <p>
        Welcome to our Helpdesk Dashboard Application! This application is
        designed to provide you with real-time insights and effortless
        management of your helpdesk operations. Here is a glimpse of some sample
        text to showcase the capabilities of our dashboard:
      </p>
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>
      <BulletinBoard />
    </main>
  );
}
