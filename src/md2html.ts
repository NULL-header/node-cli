import marked from "marked";

export interface CliOptions {
  gfm?: boolean;
}

export function transMd2Html(markdown: string, cliOptions: CliOptions): string {
  return marked(markdown, { gfm: cliOptions.gfm });
}
