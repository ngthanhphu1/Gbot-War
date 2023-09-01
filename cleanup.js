import { readdirSync, statSync, unlinkSync, rmSync } from "fs";

try {
    [
        "./application/commands/cache/",
        "./src/core/data/cache/",
    ]
        .forEach(path => {
            const files = readdirSync(path);
            files.forEach(file => {
                const filePath = `${path}${file}`;
                if (statSync(filePath).isFile() && file != "README.txt") {
                    unlinkSync(filePath);
                }
            });
        });
} catch (e) {
    console.error(e);
}
