import PlayIndex from "@/src/components/PlayIndex";
import { playExperiments, playIllustration } from "@/src/lib/play";

export const metadata = {
  title: "Play",
  description: "Illustration and creative-code experiments.",
};

export default function PlayPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-14">
      <PlayIndex illustration={playIllustration} experiments={playExperiments} />
    </main>
  );
}
