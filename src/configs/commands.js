module.exports = {
    "Informative": [
        {
            "name": "help",
            "aliases": [
                "h"
            ],
            "description": "Gives a link to a website where you can find all the information you need.",
            "usage": "help",
            "params": [
                {
                    "name": "category",
                    "description": "Lock a command category to one channel",
                    "type": "string",
                    "required": true
                },
                {
                    "name": "channel",
                    "description": "Mention a channel with #channelname",
                    "type": "channel",
                    "default": "Takes the channel the command was ran in"
                }
            ],
            "permissions": {
                "logic": "OR",
                "levels": [
                    {
                        "type": "server",
                        "name": "MANAGE_CHANNELS"
                    }
                ]
            }
        }
    ]
}
