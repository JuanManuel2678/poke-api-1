import { helix } from "ldrs";

export const Loader = () => {
  helix.register();

  return (
    <div className="flex justify-center content-center items-center min-w-[900px] min-h-[900px]">
      <l-helix size="144" speed="2.5" color="black"></l-helix>
    </div>
  );
};
