/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import wrapWithProvider from "./src/components/wrap-with-provider";

import "./src/styles/styles.scss";

export const wrapRootElement = wrapWithProvider;
