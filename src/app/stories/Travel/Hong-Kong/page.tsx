import StoryRenderer from "@/components/StoryRenderer";
import { loadStory } from "@/lib/story";

export default function HongKongStory() {
  const story = loadStory(
    "src/app/stories/Travel/Hong-Kong"
  );

  return (
    <StoryRenderer
      title={story.title}
      content={story.content}
    />
  );
}