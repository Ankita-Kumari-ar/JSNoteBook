import express from "express";
import fs from "fs/promises";
import path from "path";

interface Cell {
  id: string;
  content: string;
  type: "text" | "code";
}

interface LocalApiError {
  code: string;
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());

  const fullPath = path.join(dir, filename);
  router.get("/cells", async (request, response) => {
    const isLocalApiError = (err: any): err is LocalApiError => {
      return typeof err.code === "string";
    };
    try {
      // Read the file
      const result = await fs.readFile(fullPath, { encoding: "utf-8" });

      response.send(JSON.parse(result));
    } catch (err) {
      // If read throws an error
      // Inspect the error, see if it says that the file doesn't exists

      if (isLocalApiError(err)) {
        if (err.code === "ENOENT") {
          // ENOENT stands for error no entity
          // Add code to create a file and add default cells
          await fs.writeFile(fullPath, "[]", "utf-8");
          response.send([]);
        }
      } else {
        throw err;
      }
    }
  });

  router.post("/cells", async (request, response) => {
    // Take the list of cells from the request object
    // serialize them
    const { cells }: { cells: Cell[] } = request.body;

    // Write the cells into the file
    const comment = "//";
    let fileData = "";

    for (let cell of cells) {
      if (cell.content) {
        if (cell.type === "text") {
          fileData +=
            "\n" + comment + cell.content.replaceAll("\n", "\n" + comment);
        } else {
          fileData += "\n\n" + cell.content;
        }
      }
    }

    // console.log(cells);
    // await fs.writeFile(fullPath, JSON.stringify(cells), "utf-8");

    console.log(fileData);
    await fs.writeFile(fullPath, fileData, "utf-8");

    response.send({ status: "ok" });
  });
  return router;
};
