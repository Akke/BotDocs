/**
* @param {String} string String to remove special characters from.
* @return {String} The given string with all special characters (including whitespaces) removed (does not remove non-latin characters).
*/
export function trimSpecialCharacters(string) {
    return string.replace(/[&\s/\\#,+()$~%.'":*?<>{}]/g, "");
}
