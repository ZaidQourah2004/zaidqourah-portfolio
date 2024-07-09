import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Resume() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-800 text-white">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-start pt-8 p-8 relative overflow-hidden">
                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 z-10 mt-12">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-5xl font-bold">Resume</h1>
                        <h2 className="text-3xl font-semibold mt-8">Zaid Qourah</h2>
                        <p className="text-lg">qourahza@msu.edu | qourahzaid04@gmail.com | (562) 561-0476</p>
                        <p className="text-lg">linkedin.com/in/zaid-qourah | zaidqourah.com | github.com/ZaidQourah2004</p>

                        <h3 className="text-2xl font-bold mt-8">Education</h3>
                        <p className="text-lg">
                            <strong>Michigan State University</strong><br />
                            East Lansing, Michigan<br />
                            Bachelor of Science in Computer Science Engineering, Minor in Economics<br />
                            GPA: 3.77<br />
                            Expected Graduation: Fall 2025
                        </p>

                        <h3 className="text-2xl font-bold mt-8">Experience</h3>
                        <p className="text-lg">
                            <strong>Quality Logistics Ltd Co.</strong><br />
                            Software Engineering Intern<br />
                            May 2024 – Aug 2024<br />
                            - Led full-stack development of the company website using ReactJS, Node.js, and MongoDB, significantly enhancing user experience and responsiveness.<br />
                            - Configured HTTPS, managed DNS, and implemented security protocols, improving data security.<br />
                            - Optimized website performance through techniques like lazy loading and code splitting, reducing load times by 50%.<br />
                            - Applied SEO best practices to improve search engine rankings and visibility, resulting in a 300% increase in monthly visitors.
                        </p>

                        <h3 className="text-2xl font-bold mt-8">Clubs and Activities</h3>
                        <p className="text-lg">
                            <strong>MSU AI Club</strong><br />
                            Project Team Lead<br />
                            Sep 2023 – Apr 2024<br />
                            - Led a group of 10 members in building an AI-powered Nutrition Recommendation web-app as lead developer, designating member roles, tracking progress, and measuring team success.<br />
                            - Designed Frontend of web-app using Tailwind CSS and ReactJS.<br />
                            - Programmed LLM using datasets from Kaggle and implemented GPT API to create an AI assistant that generates sample diet plans based on user input and answers nutrition-related questions.<br />
                            - Utilized Google Firebase for secure user authentication.<br />
                            - Managed database operations using DigitalOcean and MySQL for efficient data handling.<br />
                            - Deployed the project in April 2024, hosting over 1000 concurrent users until July. Achieved a 45% positive feedback rate with a 40% retention rate.
                        </p>
                        <p className="text-lg">
                            <strong>Software Engineering & Computer Science Club</strong><br />
                            Co-founder<br />
                            Dec 2023 – Present<br />
                            - Mentoring over 200 students on how to navigate the field of Software Engineering and Computer Science and how to succeed.<br />
                            - Hosting networking events, workshops, and LeetCode practice competitions about good coding practices and uses of GIT.<br />
                            - Creating a permanent server AWS-like service for our own future projects and other clubs on campus.<br />
                            - Collaborated with non-profits like Footprints of Michigan and Lansing Catalyst by enhancing their frontend and backend designs, databases, and digital presence.
                            Technical Skills and Relevant Coursework
                            Languages: Python, C++, Java, Assembly, JS, SQL, NOSQL, GIT, HTML, CSS
                            Frameworks: Django, Flask, Next.js, .NET
                            Libraries: Pandas, Tkinter, PyQt5, Numpy, Sympy, Scikit-Learn, React
                            Coursework: Algorithms & Data Structures, Object-Oriented Software Design, Database Systems
                            Honors & Awards
                            -	Member of MSU Honors College
                            -	Dean’s List
                            -	MSU Academic Scholarship

                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-full max-w-xs overflow-hidden rounded-lg h-96 bg-gray-800">
                            <Image
                                src="/images/ZQ1.png"
                                alt="Profile Image"
                                fill
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
