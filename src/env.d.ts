/* eslint-disable no-unused-vars */
/**
 * Global types definition for
 * environment variables.
 *
 * @see environment variables schema
 */

namespace NodeJS {
  interface ProcessEnv {
    // SECTION: project info from package.json
    readonly NEXT_PUBLIC_APP_NAME: string
    readonly NEXT_PUBLIC_APP_VERSION: string
    readonly NEXT_PUBLIC_APP_DESCRIPTION: string

    // SECTION: base config
    readonly NEXT_PUBLIC_API: string
  }
}
