import Photo from "./photo";


export default function Landing() {
  return (
    <section className="h-screen p-11">
      <div className="container mx-auto">
        <div className="flex flex-row lt-md:flex-col items-center justify-between xl:pt-8 xl:pb-24">
          <div className="leading-7">
            <h1 className="text-3xl font-semibold ">
              Hi! I'm
              <br />
              <span>Yashwanth Karuparthi</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}