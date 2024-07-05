import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Stock() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-800 text-white">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-start pt-8 p-8 relative">
                <Link href="/projects" legacyBehavior>
                    <a className="absolute top-4 left-4 text-white bg-blue-500 rounded-full p-2 hover:bg-blue-700 transition">
                        ← Back to Projects
                    </a>
                </Link>
                <h1 className="text-4xl font-bold p-4 mt-16">Stock Market Simulator</h1>
                <a
                    href="/project2-download-link"
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4 mb-8"
                >
                    Download
                </a>
                <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
                    <Image
                        src="/images/stock-market.png"
                        alt="Stock Market Simulator"
                        width={800}
                        height={600}
                        className="object-cover w-full md:w-1/2"
                    />
                    <div className="p-8 flex-1">
                        <p className="text-lg mb-4">
                            The Stock Market Simulator is an interactive application that allows users to simulate trading stocks in a virtual environment. Users can experience the highs and lows of the stock market, practice their trading strategies, and learn about financial markets without risking real money.
                        </p>
                        <p className="text-lg mb-4">
                            Features include real-time stock data, portfolio management, historical data analysis, and various tools to help users make informed trading decisions. The simulator is designed for both beginners and experienced traders to refine their skills and gain confidence in the stock market.
                        </p>
                        <p className="text-lg">
                            By using this simulator, you can track your progress over time, analyze your trading behavior, and develop better investment strategies. Whether you're a student, a hobbyist, or a professional, the Stock Market Simulator is an excellent tool for enhancing your understanding of the stock market.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
