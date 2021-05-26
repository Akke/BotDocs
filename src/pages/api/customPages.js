import fs, { existsSync, readdirSync, lstatSync, readFileSync } from "fs";
import config from "../../configs/app";
import path from "path";

export default function handler(req, res) {
    if(!config.enable_pages) return;

    const filePath = "./src/data/pages";
    const temp = [];

    try {
        readFiles(filePath);
    } catch(e) {
        throw e;
    }

    function readFiles(directory) {
        if(existsSync(directory)) {
            const files = readdirSync(directory);
            for(const i in files) {
                const fileName = path.join(directory, files[i]);
                const stat = lstatSync(fileName);

                if(stat.isDirectory()) {
                    readFiles(fileName);
                } else if(/\.md$/.test(fileName)) {
                    const data = readFileSync(fileName, {encoding: "utf8", flag: "r"});
                    const name = path.basename(fileName).replace(".md", "");
                    const recursiveDirectoryNames = path.dirname(fileName).split("pages").pop().replace(/\\|\//g, ",").split(",");

                    temp.push({
                        name: name,
                        contents: data,
                        recursive: recursiveDirectoryNames
                    });
                }
            }
        }
    }

    res.status(200).json(temp);
}
