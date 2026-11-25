import Link from "next/link";

export default function Home() {
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold text-white">
                Hello, my name is Harold Suello!
            </h1>

            <p className="mt-4 text-gray-300 leading-relaxed">
                I am a 3rd-year Information Technology student at MDC.
                I am 20 years old and currently reside in Tubigon.
            </p>

            <p className="mt-6">
                <Link
                    href="/projects"
                    className="text-blue-400 underline hover:text-blue-300"
                >
                    See my projects →
                </Link>
            </p>
        </main>
    );
}
