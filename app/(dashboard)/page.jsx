import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        sollicitudin consectetur blandit. Donec at mi efficitur, imperdiet justo
        id, molestie augue. Praesent tortor risus, egestas quis ornare eget,
        mattis at eros. Integer sit amet ante id neque iaculis efficitur ut vel
        neque. Ut efficitur velit at nulla elementum, in convallis ligula
        dictum. Nullam sollicitudin diam id nisi dictum, et ornare libero
        pellentesque. Donec enim dui, laoreet vitae consectetur id, sodales in
        ex. Aenean auctor risus ante, at tempus urna gravida eget. Nullam dictum
        neque quis est scelerisque, in consectetur neque ullamcorper.
      </p>
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>
      <h2>Company Updates</h2>
      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at
          quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
          pariatur molestiae, modi beatae corrupti.
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at
          quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
          pariatur molestiae, modi beatae corrupti, assumenda distinctio
          adipisci, cupiditate minima eum vitae? Similique dicta est facilis
          debitis, autem temporibus quo repellat illum unde id iste veritatis
          eveniet, aspernatur enim quas.
        </p>
      </div>{" "}
    </main>
  );
}
