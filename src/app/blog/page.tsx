import React from "react";

// Mark as dynamic to prevent static generation timeout
export const dynamic = 'force-dynamic';

function Page() {
  return (
    <div className="container mx-auto text-zinc-300 flex justify-center items-center h-full">
      <h1 className="text-3xl">Oops no blog posts!</h1>
    </div>
  );
}

export default Page;
