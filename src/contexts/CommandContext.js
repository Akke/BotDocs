import { createContext, useContext, useState, useEffect } from "react";
import { deconstructCommands } from "../utils/json";
import useCommands from "../components/commands/useCommands";

export const CommandContext = createContext({
    categories: null,
    commands: null
});

export const CommandContextProvider = ({ children, value }) => {
    const { commands, error } = useCommands();

    return commands ? <CommandContext.Provider value={{categories: Object.keys(commands), commands: deconstructCommands(commands)}}>{children}</CommandContext.Provider> : null
};

export const useCommandContextProvider = () => useContext(CommandContext);
