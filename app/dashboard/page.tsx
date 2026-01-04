import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const user = await currentUser();
  return (
    <div className="flex felx-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">
        Welcome to the XiCON, {user?.firstName}
      </h1>
    </div>
  );
}
