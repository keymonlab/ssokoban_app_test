import { SignUp } from "@clerk/nextjs";
import Navbar from "@/components/layout/Navbar";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center py-40">
        <SignUp />
      </div>
    </div>
  );
}
