// eslint-disable-next-line no-unused-vars
import commander from "commander";
// eslint-disable-next-line no-unused-vars
import { CliOptions, transMd2Html } from "./md2html";
import { promises as fs } from "fs";

export class MDTrans {
  constructor(private readonly cmd: commander.CommanderStatic) {}
  private opts: CliOptions = {
    gfm: true,
  };

  private setOpts(opts: CliOptions) {
    this.opts = Object.assign(this.opts, opts);
    return this;
  }

  parse(argv: string[]): MDTrans {
    this.cmd.parse(argv);
    return this;
  }

  async trans(): Promise<string> {
    this.setOpts(this.cmd.opts());
    const filePath = this.cmd.args[0];
    const md = await fs.readFile(filePath, { encoding: "utf-8" });
    return transMd2Html(md, this.opts);
  }
}
