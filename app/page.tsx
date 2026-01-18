import Model from "@/components/Spline";

export default function Home() {
  return (
    <div className="flex h-[300vh] items-start bg-zinc-50 dark:bg-[#C9C9C9]">
      <div className="w-1/2 pt-16 pl-16 font-mono bg-[#C9C9C9]">
        <div className="h-[100vh]">
          <h2 className="text-[4rem] spline-sans-mono-bold text-gray-900/80 ">Section 1</h2>
          <p className="text-[1.4rem] spline-sans-mono-medium text-gray-900/40">This is the first section of text. It appears at the top.</p>
        </div>
        <div className="h-[100vh] pt-16">
          <h2 className="text-[4rem] spline-sans-mono-bold text-gray-900/80">Section 2</h2>
          <p className="text-[1.4rem] spline-sans-mono-medium text-gray-900/40">This is the second section of text. You will see this as you scroll down.</p>
        </div>
        <div className="h-[100vh] pt-16">
          <h2 className="text-[4rem] spline-sans-mono-bold text-gray-900/80">Section 3</h2>
          <p className="text-[1.4rem] spline-sans-mono-medium text-gray-900/40">This is the third and final section of text.</p>
        </div>
      </div>
      <main className="w-1/2 flex justify-center h-screen fixed top-0 right-0 bg-[#C9C9C9]">
        <Model />
      </main>
    </div>
  );
}
