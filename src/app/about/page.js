import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col max-w-s mt-auto mb-auto mx-auto items-center gap-6 text-center">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            This is the about page of my NextJS Demo application.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Want to learn more about Project Structure and Layouts? Head over to{" "}
            <a
              href="https://nextjs.org/docs/app/getting-started/project-structure"
              className="font-medium text-zinc-950 dark:text-zinc-50"
              target="_blank"
            >
              Project structure and organization
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/docs/app/getting-started/layouts-and-pages"
              className="font-medium text-zinc-950 dark:text-zinc-50"
              target="_blank"
            >
              Layouts and Pages
            </a>{" "}
            docs.
          </p>
        </div>
      </main>
    </div>
  );
}
