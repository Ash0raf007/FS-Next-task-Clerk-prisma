import { SignUp } from "@clerk/nextjs";
// route in .env file
export default function Page() {
  return (
    <div className="inset-0 flex items-center justify-center min-h-[calc(100vh-80px)]">
      <SignUp afterSignUpUrl={"/"}/>
    </div>
  );
}
