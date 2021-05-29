import fs, { existsSync, readdirSync, lstatSync, readFileSync } from "fs";
import DataObj from "../../configs/commands"
import path from "path";

export default function handler(req, res) {
    const filePath = "./src/data/commands";
    const temp = [];

    let tempDefault = DataObj;

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
                    const category = path.dirname(fileName).split(path.sep).pop();
                    const name = path.basename(fileName).replace(".md", "");

                    temp.push({
                        category: category,
                        name: name,
                        description: data
                    });
                }
            }
        }
    }

    temp.forEach(t => {
        Object.keys(tempDefault).forEach(category => {
            tempDefault[category].forEach(cmd => {
                if((category.toLowerCase() === t.category.toLowerCase()) && (cmd.name.toLowerCase() === t.name.toLowerCase())) {
                    cmd.description = t.description;
                }
            });
        });
    });

    res.status(200).json(tempDefault);
}
