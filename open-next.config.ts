import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Minimal config: this site has no ISR/on-demand revalidation, so no
// incremental cache (R2/KV) override is needed. Add one here later if you
// introduce ISR or `revalidate`.
export default defineCloudflareConfig();
