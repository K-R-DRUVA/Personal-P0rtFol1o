import fs from "fs";
import path from "path";

export function loadStory(folder: string) {
  const storyPath = path.join(process.cwd(), folder);

  const config = JSON.parse(
    fs.readFileSync(path.join(storyPath, "story.json"), "utf8")
  );

  let content = "";

  for (const file of config.chapters) {
    content += fs.readFileSync(
      path.join(storyPath, file),
      "utf8"
    );

    content += "\n\n";
  }

  return {
    ...config,
    content,
  };
}