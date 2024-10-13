import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function ScrollBasedVelocityText() {
  return (
    <VelocityScroll
      text="Learn. Revise. Succeed."
      default_velocity={5}
      className="text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
