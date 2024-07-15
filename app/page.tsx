import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PassKeyModal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496]">
          <div className="flex">
            <Image
              src="/assets/images/logo-file.png"
              className="h-14 w-fit mb-12"
              height={1000}
              width={1000}
              alt="patient"
            />
            <h1 className="text-center ml-2 mt-3 font-bold  text-2xl text-balance">
              Health<span className="text-green-500">Timely</span>
            </h1>
          </div>
          <PatientForm />
          <div className="mt-10 flex justify-between text-14-regular">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 HealthTimely
            </p>
            <Link href="/?admin=true" className="text-green-500 font-bold">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        alt="coverImg"
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
