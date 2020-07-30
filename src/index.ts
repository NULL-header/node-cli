import commander from "commander";
import { MDTrans } from "./trans";

async function main() {
  commander.option("--gfm", "GFMを有効にする");
  const trans = new MDTrans(commander).parse(process.argv);
  try {
    const html = await trans.trans();
    console.log(html);
  } catch (e) {
    console.log(e);
  }
}

main();
