[![Version](https://badge.fury.io/gh/Akke%2FBotDocs.svg)](https://badge.fury.io/gh/Akke%2FBotDocs) [![GitHub Release](https://img.shields.io/github/release/Akke/BotDocs.svg?style=flat)]()  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://opensource.org/licenses/MIT)

# BotDocs — Document your Discord bot
BotDocs is a simple and lightweight file-based, stateless command documentation software for your Discord bot. One does in fact not fit all, and have therefore designed this project with a lot of configuration and customization options in mind, making sure you can tailor it to your taste. It's the best way to display all of your commands for your bot, and the necessary data that comes with it, in a sleek and elegant way.

## Primary Features
* **Completely free to use and open source.**
* Display all of your bots commands, with their aliases, usage examples, argument parameters and much more.
* Add more details to existing command descriptions by extending them with `.md` files.
* Currently supports up to 8+ languages (and counting!)
* Simple and clean design, with built-in support for customization through themes (comes with 3 themes by default: light, midnight and discord)
* Enable, disable and extend several features of BotDocs with comprehensive configuration settings.
* Create static pages, separate from commands, using `.md` files (useful for e.g. ToS and policy pages)

Want to suggest a new feature or feel like something needs an improvement? Don't be afraid to reach out to us — we're happy to hear your criticism.

# Overview
* [Installation](README.md#Installation)
    * [Setting up your commands](README.md#Setting-up-your-commands)
* [Configuration](README.md#Configuration)
* [Translations](README.md#Translations)
* [Themes](README.md#Themes)
* [Custom Pages](README.md#Custom-Pages)
* [Extending Commands](README.md#Extending-Commands)
* [Need Help?](README.md#need-help)

## Installation
1. Download the latest release (https://github.com/Akke/BotDocs/releases/latest) from the releases page.
2. Upload everything to your desired directory.
3. Install all dependencies with `npm i`
4. Double check your commands data in `src/configs/commands.js` (create it, if it doesn't already exist) **NOTE: See below for detailed information about the commands configuration.**
5. Build BotDocs with `npm run build` (if you wish to run in developer mode without building, run `npm run dev`)
6. Run BotDocs with `npm run start`
7. (optional) See https://nextjs.org/docs/deployment for more deployment methods (e.g. Docker)

### Setting up your commands
BotDocs presents the commands by reading from a configuration file in `src/configs/commands.js` and takes a very specific object structure (as seen below). If your structure doesn't look like this, it's recommended that you pre-parse it on your own to make sure it's suited for the application, or if you don't wish to use categories at all — create all command objects under just one category.
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
**Categories**
* `Informative` - Name of the category which its children are put into. All commands inside each category will appear grouped similarly on the website.

**Properties**
* `name` (string)
* `aliases` (array with strings)
* `description` (string)
* `usage` (string)
* `params` (array with objects, see example above)
* **If a command requires a specific permission set:** `permissions` (object, see example above)

If you're missing any property, you're likely to stumble upon multiple errors.

## Configuration
The configuration that can be found in `src/configs/app.js` comes with many configuration options.
* `list_mode` - The method of displaying the commands list (`default`, `cards` or `compact`)
    * Default: A regular list with permission set visible and description preview (does not render .md syntax)
    * Cards: Commands displayed in a card view instead of a long list.
    * Compact: A list with reduced paddings to preserve space, as well as redacted permissions and description preview, to only display the command name.
* `locale` - The language all static text should be in, using ISO 639-1 language codes (https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) **Note: Locales must be added manually before building the application. See below for more information.**
    * `el` (greek)
    * `en` (english) **default**
    * `et` (estonian)
    * `fr` (french)
    * `jp` (japanese)
    * `nl` (dutch)
    * `sv` (swedish)
    * `tr` (turkish)
* `locale_fallback` - The language to fallback to in case a phrase is missing in the current active language (defaults to `en`)
* `enable_pages` - Defaults to `true` and controls whether you want to enable custom pages. The menu link for custom pages will also disappear if set to `false`
* `menu_links` - Custom link properties to replace the default static menu (icons will be disabled). To disable, leave the arrays empty.
    * ```json
      "menu_links": {
            "default": [
                {
                    "name": "Custom Home Link",
                    "target": "/"
                }
            ],
            "custom_pages": [
                {
                    "name": "Terms of Service",
                    "target": "/page/tos"
                }
            ]
        }
        ```

* `logo_url` - Public path to the url of your logo to display above the menu (e.g. `/static/images/logos/mylogo.png`)
* `category_colors` - Custom color codes for your categories to add some variety to the design (leave empty to use the themes primary color instead).
    * ```json
      "category_colors": {
           "moderation": "#F00"
       }
       ```

## Translations
Translations are supported if added manually before compiling the application. To do this, you must create a file in `src/data/locales` using an ISO 639-1 language code for the name (https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
```
{
    "categories": "Categories",
    "commands": "Commands",
    ...
}
```
Translate the text on the right and leave the keys and variables wrapped in `{{}}` tags alone. You must also modify `src/utils/i18n.js` and import the new language file.

```js
import localeEN from "../data/locales/en.json";
import localeSV from "../data/locales/sv.json";
// new import here

const resources = {
    en: {
        translation: localeEN
    },
    sv: {
        translation: localeSV
    }
    // new language object here, using ISO 639-1 codes
};
```

## Themes
You can change the color scheme and a lot of other properties of the design which is done in SASS. Locate the file `src/styles/theme.sass` and import the theme you wish to use, and comment out the inactive ones.
```sass
@import "themes/light"
//@import "themes/discord"
//@import "themes/midnight"
```
To edit an existing theme, find the theme inside the themes directory and edit the variables found within.

If you want to create a new theme, simply make a new file in `src/styles/themes/your-new-file.sass` and copy/paste the variables from an existing theme file.

## Custom Pages
You can also use BotDocs to serve regular, static pages, which you can disable in the configuration (enabled by default). Simply create file inside the `src/data/pages` directory with the `.md` suffix (markdown).

Files within the directory will create new URL handles depending on the file name and its subdirectories. For example, if you create `src/data/pages/helloworld.md` it will be served at `yoursite.com/page/helloworld`, and if you create `src/data/pages/my/extended/path/helloworld.md` it will be available at `yoursite.com/page/my/extended/path/helloworld`.

## Extending Commands
Just like you can create custom pages, you can also extend command descriptions using a similar method, with `.md` files and syntax.

If you have a category called `moderation` and a command named `ban`, you can then create the file `src/data/commands/moderation/ban.md` and everything inside this file will replace the default description property in the commands file.

You can use this method if you wish to explain into further detail how a command works, or if you wish to include images, links, and so on.

# Need help?
There is no official place to ask for help as of yet, but you can either open an issue in this repo or send me a friend request on discord at `Axwell#0538` and I will get back to you as soon as possible.
