import { createHandler } from "slshx";
import { epikdance } from "./epikdance";
import { gortdance } from "./gortdance";
import { ground } from "./ground";
import { hiddencake } from "./hiddencake";


const handler = createHandler({
  // Replaced by esbuild when bundling, see scripts/build.js (do not edit)
  applicationId: SLSHX_APPLICATION_ID,
  applicationPublicKey: SLSHX_APPLICATION_PUBLIC_KEY,
  applicationSecret: SLSHX_APPLICATION_SECRET,
  testServerId: SLSHX_TEST_SERVER_ID,
  // Add your commands here
  commands: { epikdance, gortdance, ground, hiddencake },
});

export default { fetch: handler };
