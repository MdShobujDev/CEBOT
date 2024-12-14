import Link from "next/link";

type primaryButtonProps = {
  text: string;
};

function PrimaryButton({ text }: primaryButtonProps) {
  return (
    <div>
      <Link
        href="/"
        className="px-5 py-3 font-medium relative inline-block overflow-hidden rounded-[50px] uppercase"
        style={{
          border: "2px solid transparent",
          borderRadius: "50px",
          backgroundImage: `
            linear-gradient(black, black), 
            linear-gradient(90deg, #E67EBE 20.68%, #539DE1 54.72%, #3A47E1 86.25%)`,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        {text}
      </Link>
    </div>
  );
}

export default PrimaryButton;
