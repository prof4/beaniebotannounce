module.exports= {
    name: 'youtube',
    description: "send the youtube link!",
    execute(message, args){
        message.channel.send('https://www.youtube.com/channel/UCRCnkwj20LCs_xy6iy-b2nw?view_as=subscriber')

    }
}