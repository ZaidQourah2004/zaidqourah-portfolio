import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Stock() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-800 text-white">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-start pt-8 p-8 relative">
                <Link href="/projects"
                      className="absolute top-4 left-4 text-white bg-blue-500 rounded-full p-2 hover:bg-blue-700 transition">
                    ← Back to Projects
                </Link>
                <h1 className="text-4xl font-bold p-4 mt-16">Stock Market Simulator</h1>
                <button
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
                    Download
                </button>

                <button
                    className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                    <div
                        className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent"/>
                    <span className="relative z-20">
    Top gradient
  </span>
                </button>

                <button
                    className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                    Next.js Blue
                </button>
                <button
                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span
                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                    <span
                        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Border Magic
  </span>
                </button>
                <button
                    className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                    Gradient
                </button>
                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
      Tailwind Connect
    </span>
                        <svg
                            fill="none"
                            height="16"
                            viewBox="0 0 24 24"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.75 8.75L14.25 12L10.75 15.25"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-4xl p-8">
                    <p className="text-lg mb-4">
                        The Stock Market Simulator is an interactive application that allows users to simulate trading
                        stocks in a virtual environment. Users can experience the highs and lows of the stock market,
                        practice their trading strategies, and learn about financial markets without risking real money.
                    </p>
                    <p className="text-lg mb-4">
                        Features include real-time stock data, portfolio management, historical data analysis, and
                        various tools to help users make informed trading decisions. The simulator is designed for both
                        beginners and experienced traders to refine their skills and gain confidence in the stock
                        market.
                    </p>
                    <p className="text-lg">
                        By using this simulator, you can track your progress over time, analyze your trading behavior,
                        and develop better investment strategies. Whether you're a student, a hobbyist, or a
                        professional, the Stock Market Simulator is an excellent tool for enhancing your understanding
                        of the stock market.
                    </p>
                </div>
            </main>
        </div>
    );
}
