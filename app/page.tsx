import Link from "next/link";
export default function Home() {
return (
    <main className="p-8">
        <h1 className="text-3xl font-bold">
            Hello, my name is Harold Suello
        </h1>
        <br></br>
        <p className="mt-2">
            I am a 3rd-year Information Technology student at MDC. I am 20 years old. I currently reside in Tubigon.
        </p>
        <br></br>
        <p className="mt-2">
           <Link href="/projects" className="text-blue-500 underline"> See my projects </Link>.
        </p>
    </main>
    );
}