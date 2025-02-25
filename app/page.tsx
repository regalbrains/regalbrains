import Link from "next/link";

export default function Home() {
  return (
    <main
      className="
        min-h-screen 
        bg-cover 
        bg-center 
        bg-no-repeat
      "
      style={{ backgroundImage: "url('/img/bg-by-pexels-steve-29586677.jpg')" }}
    >
      <nav
        className="
          px-24
          py-4
          bg-opacity-50
        ">
        <Link
          href="https://regalbrains.com"
          className="
            text-xl
            text-primary
          ">
            regalbrains.
        </Link>
      </nav>
      <section
        className="
          flex
          p-12
          m-12
          rounded-2xl
          bg-white
          bg-opacity-10
          backdrop-blur-sm
        ">
          <div className="w-1/2 flex-col">
            <h1
              className="
              text-8xl
              text-black
              font-bold
              mb-20">
                We&apos;re<br /> mobile app<br />makers.</h1>
            <div className="flex text-black text-l uppercase flex-justify-between">
                <p className="p-16 pl-0">B2C Apps.</p>
                <p className="p-16">Enterprise Software.</p>
                <p className="p-16">IT Consulting.</p>
            </div>

          </div>
      </section>
    </main>
  );
}