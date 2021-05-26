module.exports = {
    "Informative": [
        {
            "name": "help",
            "aliases": [
                "h"
            ],
            "description": "Gives a link to a website where you can find all the information you need.",
            "usage": "help",
            "params": [],
            "example": "help"
        },
        {
            "name": "invite",
            "aliases": [
                "inv"
            ],
            "description": "Invite Damon to your Discord server.",
            "usage": "invite",
            "params": [],
            "example": "invite"
        },
        {
            "name": "ping",
            "aliases": [
                "pong"
            ],
            "description": "Shows ping to Discord, response time and reply time.",
            "usage": "ping",
            "params": [],
            "example": "ping"
        },
        {
            "name": "stats",
            "aliases": [
                "status"
            ],
            "description": "Shows a couple of stats about Damon.",
            "usage": "stats",
            "params": [],
            "example": "stats"
        }
    ],
    "Moderation": [
        {
            "guild_only": true,
            "name": "lock",
            "aliases": [],
            "description": "Lock specific command category to one channel.",
            "usage": "lock <category> [# channel]",
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
            },
            "example": "lock music #music"
        },
        {
            "guild_only": true,
            "name": "unlock",
            "aliases": [
                "remove lock",
                "removelock",
                "rmlock"
            ],
            "description": "Remove the feature lock if one was in place.",
            "usage": "remove lock <category>",
            "params": [
                {
                    "name": "category",
                    "description": "Remove lock from this category",
                    "type": "string",
                    "required": true
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
            },
            "example": "unlock music"
        },
        {
            "guild_only": true,
            "name": "reset prefix",
            "aliases": [
                "remove prefix",
                "resetprefix"
            ],
            "description": "Reset the prefix to the default value.",
            "usage": "reset prefix",
            "params": [],
            "permissions": {
                "logic": "OR",
                "levels": [
                    {
                        "type": "server",
                        "name": "MANAGE_CHANNELS"
                    }
                ]
            },
            "example": "reset prefix"
        },
        {
            "guild_only": true,
            "name": "set prefix",
            "aliases": [
                "setprefix",
                "changeprefix"
            ],
            "description": "Change the bot its prefix in your server.",
            "usage": "setprefix <new-prefix>",
            "params": [
                {
                    "name": "new-prefix",
                    "description": "Changes the prefix to which Damon Music listens on in your server.",
                    "type": "string",
                    "default": "Resets the the custom prefix if one was set."
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
            },
            "example": "changeprefix b?"
        }
    ],
    "DJ": [
        {
            "guild_only": true,
            "name": "dj add",
            "aliases": [],
            "description": "Add a DJ user.",
            "usage": "dj add <@ mention>",
            "params": [
                {
                    "name": "user",
                    "description": "The user to be added.",
                    "type": "user",
                    "required": true
                }
            ],
            "example": "dj add"
        },
        {
            "guild_only": true,
            "name": "dj disable",
            "aliases": [],
            "description": "Disable the DJ system.",
            "usage": "dj disable",
            "params": [],
            "permissions": {
                "logic": "OR",
                "levels": [
                    {
                        "type": "server",
                        "name": "MANAGE_CHANNELS"
                    }
                ]
            },
            "example": "dj disable"
        },
        {
            "guild_only": true,
            "name": "dj enable",
            "aliases": [],
            "description": "Enable the DJ system.",
            "usage": "dj enable",
            "params": [],
            "permissions": {
                "logic": "OR",
                "levels": [
                    {
                        "type": "server",
                        "name": "MANAGE_CHANNELS"
                    }
                ]
            },
            "example": "dj enable"
        },
        {
            "guild_only": true,
            "name": "dj info",
            "aliases": [],
            "description": "Shows some information about the DJ system and which modes exists.",
            "usage": "dj info",
            "params": [],
            "example": "dj info"
        },
        {
            "guild_only": true,
            "name": "dj list",
            "aliases": [],
            "description": "Shows a list of all users that are currently DJ.",
            "usage": "dj list",
            "params": [],
            "example": "dj list"
        },
        {
            "guild_only": true,
            "name": "dj lock",
            "aliases": [
                "dj unlock"
            ],
            "description": "Lock the playlist from being modified by non DJ users.",
            "usage": "dj lock",
            "params": [],
            "example": "dj lock"
        },
        {
            "guild_only": true,
            "name": "dj mode",
            "aliases": [],
            "description": "Change the DJ mode.",
            "usage": "dj mode <# mode>",
            "params": [
                {
                    "name": "mode",
                    "description": "The new mode to be used for DJ's",
                    "type": "string",
                    "required": true
                }
            ],
            "example": "dj mode FREEFORALL"
        },
        {
            "guild_only": true,
            "name": "dj persistmode",
            "aliases": [
                "dj persist mode"
            ],
            "description": "This will enforce a set DJ mode on the server.",
            "usage": "dj persistmode <# mode>",
            "params": [
                {
                    "name": "mode",
                    "description": "The new mode to be used for DJ's",
                    "type": "string",
                    "required": true
                }
            ],
            "example": "dj persistmode"
        },
        {
            "guild_only": true,
            "name": "dj remove",
            "aliases": [],
            "description": "This command forcefully resigns a DJ from his position.",
            "usage": "dj remove <@ mention>",
            "params": [
                {
                    "name": "user",
                    "description": "The user to be forcefully resigned.",
                    "type": "user",
                    "required": true
                }
            ],
            "permissions": {
                "logic": "OR",
                "levels": [
                    {
                        "type": "SERVER",
                        "name": "MANAGE_GUILD"
                    }
                ]
            },
            "example": "dj remove @Yimura#6969"
        },
        {
            "guild_only": true,
            "name": "dj leave",
            "aliases": [
                "resign"
            ],
            "description": "Add a DJ user.",
            "usage": "dj leave",
            "params": [],
            "example": "dj leave"
        }
    ],
    "Music": [
        {
            "guild_only": true,
            "name": "equalizer",
            "aliases": [
                "eq"
            ],
            "description": "Change the equalizer of the music player, do d!equalizer to get the equalizer presets that are available.",
            "usage": "eq <preset>",
            "params": [
                {
                    "name": "preset",
                    "description": "A preset name.",
                    "type": "string",
                    "required": true
                }
            ],
            "example": "eq deep"
        },
        {
            "guild_only": true,
            "name": "leave",
            "aliases": [
                "quit",
                "exit",
                "stop"
            ],
            "description": "Make the bot leave the voice channel.",
            "usage": "leave",
            "params": [],
            "example": "leave"
        },
        {
            "guild_only": true,
            "name": "pause",
            "aliases": [],
            "description": "Pause music playback, use d!resume to resume playback.",
            "usage": "pause",
            "params": [],
            "example": "pause"
        },
        {
            "guild_only": true,
            "name": "play",
            "aliases": [
                "p"
            ],
            "description": "Search a song on YouTube or give a link from YouTube, SoundCloud, Spotify... to add to the queue.",
            "usage": "play <search>",
            "params": [
                {
                    "name": "search",
                    "description": "Search on YouTube or use a link to add to the queue.",
                    "type": "string",
                    "required": true,
                    "is_sentence": true
                }
            ],
            "example": "play https://www.youtube.com/watch?v=rVHn3GOXvzk"
        },
        {
            "guild_only": true,
            "name": "play next",
            "aliases": [
                "pn",
                "playnext"
            ],
            "description": "Adds song directly after currently playing song, if no music is playing a queue will be created and the song will be played instead.",
            "usage": "play next <search>",
            "params": [
                {
                    "name": "search",
                    "description": "Search on YouTube or use a YouTube link.",
                    "type": "string",
                    "required": true,
                    "is_sentence": true
                }
            ],
            "example": "play https://www.youtube.com/watch?v=rVHn3GOXvzk"
        },
        {
            "guild_only": true,
            "name": "playtime",
            "aliases": [
                "pt"
            ],
            "description": "Returns how long the bot has been playing audio for.",
            "usage": "playtime",
            "params": [],
            "example": "playtime"
        },
        {
            "guild_only": true,
            "name": "previous",
            "aliases": [
                "back"
            ],
            "description": "Play the previous song in queue.",
            "usage": "previous",
            "params": [],
            "example": "previous"
        },
        {
            "guild_only": true,
            "name": "queue",
            "aliases": [
                "q"
            ],
            "description": "Show all the queue'd songs",
            "usage": "queue [page-number]",
            "params": [
                {
                    "name": "page-number",
                    "description": "Queue page number",
                    "type": "int",
                    "default": "Shows the first page of queue"
                }
            ],
            "example": "queue 2"
        },
        {
            "guild_only": true,
            "name": "remove",
            "aliases": [
                "rm",
                "remove song",
                "removesong"
            ],
            "description": "Remove a song by giving the number of the song in queue.",
            "usage": "remove [query]",
            "params": [
                {
                    "name": "query",
                    "description": "Title of the song or the queue number",
                    "type": "string",
                    "default": "Will remove the currently playing song from queue",
                    "is_sentence": true
                }
            ],
            "example": "remove 3"
        },
        {
            "guild_only": true,
            "name": "repeat",
            "aliases": [
                "loop"
            ],
            "description": "Repeat the active song.",
            "usage": "repeat",
            "params": [],
            "example": "repeat"
        },
        {
            "guild_only": true,
            "name": "repeat playlist",
            "aliases": [
                "repeatplaylist",
                "repplaylist",
                "rep playlist",
                "playlist repeat",
                "playlist rep",
                "playlistrep",
                "playlistrepeat",
                "repeat queue",
                "repeatqueue",
                "queue repeat",
                "queuerep",
                "rq",
                "r q",
                "rp",
                "r p"
            ],
            "description": "The entire queue is looped, when the end of the queue is reached it starts over.",
            "usage": "repeat playlist",
            "params": [],
            "example": "repeatplaylist"
        },
        {
            "guild_only": true,
            "name": "restart",
            "aliases": [],
            "description": "Stop music playback and start playing from the start of the queue.",
            "usage": "restart",
            "params": [],
            "example": "restart"
        },
        {
            "guild_only": true,
            "name": "resume",
            "aliases": [],
            "description": "Resume music playback.",
            "usage": "resume",
            "params": [],
            "example": "resume"
        },
        {
            "guild_only": true,
            "name": "reverse",
            "aliases": [],
            "description": "Reverse the queue, use d!restart to make the queue start from the beginning.",
            "usage": "reverse",
            "params": [],
            "example": "reverse"
        },
        {
            "guild_only": true,
            "name": "shuffle",
            "aliases": [],
            "description": "Shuffle all the songs currently in the queue.",
            "usage": "shuffle",
            "params": [],
            "example": "shuffle"
        },
        {
            "guild_only": true,
            "name": "skip",
            "aliases": [
                "next",
                "s"
            ],
            "description": "Skip the active song and start playing the next in queue.",
            "usage": "skip",
            "params": [],
            "example": "skip"
        },
        {
            "guild_only": true,
            "name": "skip to",
            "aliases": [
                "skipto"
            ],
            "description": "Skip to a specific song nummer in queue.",
            "usage": "skip to <#queue-number>",
            "params": [
                {
                    "name": "queue-number",
                    "description": "Number of a song in queue",
                    "type": "int",
                    "required": true
                }
            ],
            "example": "skipto 5"
        },
        {
            "guild_only": true,
            "name": "volume",
            "aliases": [
                "vol",
                "v"
            ],
            "description": "Change the volume of the music player.",
            "usage": "volume [volume]",
            "params": [
                {
                    "name": "volume",
                    "description": "A number ranging from 1 to 200",
                    "type": "int",
                    "default": "Will show the current volume."
                }
            ],
            "example": "volume 50"
        }
    ]
}
