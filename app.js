const fs = require("fs/promises");

(async () => {

    const commandFileHandler = await fs.open("./command.txt", "r");

    commandFileHandler.on("change", async () => {

        const size = (await commandFileHandler.stat()).size;
        // allocate our buffer with the size of the file
        const buffer = Buffer.alloc(size);
        // the location at which we want to start filling our buffer
        const offset = 0;
        // how many bytes we want to read
        const length = buffer.byteLength;
        // the position in the file where we want to start reading
        const position = 0;

        const content = await commandFileHandler.read(
            buffer,
            offset,
            length,
            position
        );

        console.log(content);


        console.log("The file was changed")
    });
    const watcher = await fs.watch("./command.txt");

    for await (const event of watcher) {
        if (event.eventType === "change") {
            // emit the change event
            commandFileHandler.emit("change");
            // the file was changed
            // We want to read the content of the file

            // get the size of our file


        }
        //console.log(event);
    }
})();
