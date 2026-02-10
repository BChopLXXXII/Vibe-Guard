/**
 * Vibe Guard - Anti-spaghetti starter for vibe coders
 *
 * This is the main entry point. Replace this with your app logic.
 */

import { greet } from "./lib/utils.js";

function main(): void {
  const message = greet("Vibe Coder");
  // eslint-disable-next-line no-console
  console.log(message);
}

main();
