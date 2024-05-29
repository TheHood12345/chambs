const {Telegraf} = require("telegraf");

//const bot = new Telegraf("6746602608:AAGD0Zw4faTKjkKGBQZvSNP4vvxRIx5vZnk");

const bot = new Telegraf("7314753089:AAE_PLif6pnLpPKdDvD8KOVR1Tv4XYbtFW4");

let x = 1;

bot.start(async(ctx)=>{
    x = 1;

    let mes = ctx.from.username;
    await ctx.reply(`Hello @${mes}`);
    await ctx.reply(`What can this bot do?`);
    await ctx.reply(`This bot pays you 100$ for uploading screenshots of your Chambs token holdings\n\nPlease send your Chambs token screenshot below from day 1 to 7, ensure your screenshot captures device date and chambs balance at the same time.`);

    bot.on("photo", async(ctx)=>{
        const fileId = ctx.message.photo[ctx.message.photo.length - 1].file_id;
        x += 1;
        if(x <= 7){
            ctx.reply(`Screenshot received. Please upload for day ${x}`)
        }
        else if(x == 8){
            ctx.reply(`Screenshot recieved\n\n...\n\nPlease wait for confirmation..\n\nIf passed you will be credited within 24 hours.\n\nDrop your solana wallet address below\n\n**NOTE** This is subject to vetting decision`);
        }
        
        // bot.on("Photo", async(ctx)=>{
        //     ctx.reply("day 2")
        // });

        // bot.telegram.getFileLink(fileId).then((url)=>{
        //     console.log(`File URL: ${url}`);

        //     axios({
        //         url,
        //         responseType: 'stream',
        //     }).then((response)=>{
        //         const filePath = path.resolve(__dirname,'images',`${fileId}.jpg`);
        //         response.data.pipe(fs.createWriteStream(filePath));
        //         console.log(`Image saved to ${filePath}`)
        //     }).catch(console.error);
        // });
    });
});

bot.launch().then(()=>{
    console.log("Telegram bot launched successfully");
});

// process.once('SIGINT',()=> bot.stop('SIGINT'));


