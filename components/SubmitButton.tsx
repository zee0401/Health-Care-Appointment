import Image from "next/image";
import { Button } from "./ui/button";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ className, isLoading, children }: ButtonProps) => {
  return (
    <Button
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            alt="loader"
            width={24}
            height={24}
            src="/assets/icons/loader.svg"
            className="animate-spin"
          />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
