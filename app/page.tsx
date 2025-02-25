import Link from "next/link"

export default function Home() {

  return (
    <div className="xl:w-1/2 flex-col">
      <h1 className="mb-10 xl:mb-20">
        <span className="text-2xl xl:text-6xl">We build</span><br />
        apps <i className="font-thin">&</i> websites<br />
        <span className="text-3xl font-thin"> that just work! 🚀 </span>
      </h1>
      <Link className="inline-flex items-center border border-primary_light rounded-full transition duration-300 hover:bg-white/10" href="mailto:diwan@regalbrains.com">
        <span className="p-3 pl-12 text-primary_light">Lets talk!</span>
        <svg 
          className="h-12 w-auto border border-primary_light rounded-full ml-12" 
          viewBox="0 0 24 24" 
          fill="none" 
          preserveAspectRatio="xMidYMid meet"
        >
          <g>
            <path d="M9.5 7L14.5 12L9.5 17" stroke="#679DFA" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
      </Link>
      <div className="mt-12 xl:mt-0 xl:flex text-l uppercase flex-justify-between">
        <p className="p-2 xl:p-16 xl:pl-0">Consumer apps.</p>
        <p className="p-2 xl:p-16">Enterprise software.</p>
        <p className="p-2 xl:p-16">IT consulting.</p>
      </div>
    </div>
  );
}