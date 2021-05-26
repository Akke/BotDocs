# BotDocs — Document your Discord bot
BotDocs is a simple and lightweight file-based, stateless command documentation software for your Discord bot. One does in fact not fit all, and have therefore designed this project with a lot of configuration and customization options in mind, making sure you can tailor it to your taste.

## Installation
1. Download the latest release (https://github.com/Akke/BotDocs/releases/latest) from the releases page.
2. Upload everything to your desired directory.
3. Install all dependencies with `npm i`
4. Double check your commands data in `src/configs/commands.js` (create it, if it doesn't already exist) **NOTE: See below for detailed information about the commands configuration.**
5. Build BotDocs with `npm run build` (if you wish to run in developer mode without building, run `npm run dev`)
6. Run BotDocs with `npm run start`
7. (optional) See https://nextjs.org/docs/deployment for more deployment methods.

### Setting up your commands
BotDocs only supports a single format of commands in form of an object currently.
```js
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
```
`Informative` is the category name, where commands should be grouped, but if you don't have any clear categories it would be more suitable to create a "generic" category and place all of your commands inside of that.

The following properties must exist for the application to behave correctly:
* name (string)
* aliases (array with strings)
* description (string)
* usage (string)
* params (array with objects, see example above)
* **If a command requires a specific permission set:** permissions (object, see example above)

## Configuration

## Translations

## Themes
