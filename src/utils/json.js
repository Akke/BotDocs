import { trimSpecialCharacters } from "./strings";

/**
* @param {Object} config Configuration file containing all commands and their respective categories.
* @param {String} category Name of the category to search for within the deconstructed object.
* @return {Object} The amount of occurrences of the given category in the deconstructed object.
*/
export function countDeconstructedCategories(config, category) {
    let counter = 0;

    if(!config)
        return;

    config.map((command) => {
        if(command.category === category)
            counter++;
    });

    return counter;
};

/**
* @param {Object} permissions The permission object from a command object.
* @return {Array} Deconstructed permission names as an array.
*/
export function deconstructPermissionLevels(permissions) {
    const deconstructed = [];

    Object.values(permissions.levels).forEach(p => {
        deconstructed.push(p.name);
    });

    return deconstructed;
};

/**
* @param {Object} config Configuration file containing all commands and their respective categories.
* @return {Object} Deconstructed object of the configuration file with a new 'category' property.
*/
export function deconstructCommands(config) {
    const deconstructed = [];

    Object.entries(config).map((category) => {
        const currentCategory = category[0],
            values = category[1];

        Object.values(values).map((command) => {
            deconstructed.push({
                category: currentCategory,
                url: {
                    category: trimSpecialCharacters(currentCategory).toLowerCase(),
                    name: trimSpecialCharacters(command.name).toLowerCase(),
                    full: `/command/${trimSpecialCharacters(currentCategory).toLowerCase()}/${trimSpecialCharacters(command.name).toLowerCase()}`
                },
                requiredPermissions: command.permissions ? deconstructPermissionLevels(command.permissions) : [],
                ...command
            })
        })
    });

    const sortByStarred = deconstructed.sort((a, b) => {
        return (b.starred - a.starred) ? 0 : b.starred ? 1 : -1
    });

    return sortByStarred;
};
