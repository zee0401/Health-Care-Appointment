import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496]">
          <Image
            src="/assets/icons/logo-full.svg"
            className="h-10 w-fit mb-12"
            height={1000}
            width={1000}
            alt="patient"
          />
          <PatientForm />
          <div className="m-20 flex justify-between text-14-regular">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500" />
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
