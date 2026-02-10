/**
 * Utility functions
 */

/**
 * Generate a greeting message
 * @param name - The name to greet
 * @returns A greeting string
 */
export function greet(name: string): string {
  return `Hello, ${name}! Your code is protected by Vibe Guard. 🛡️`;
}

/**
 * Safely parse JSON with error handling
 * @param input - JSON string to parse
 * @returns Parsed object or null if invalid
 */
export function safeJsonParse<T>(input: string): T | null {
  try {
    return JSON.parse(input) as T;
  } catch {
    return null;
  }
}

/**
 * Check if a value is defined (not null or undefined)
 * @param value - Value to check
 * @returns True if defined
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * Sleep for a specified duration
 * @param ms - Milliseconds to sleep
 * @returns Promise that resolves after the duration
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
