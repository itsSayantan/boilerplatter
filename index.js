#!/usr/bin/env node

const cp = require('child_process');

const {
    allCommands,
    boilerplateRepositoryMapping,
    welcomeMessage
} = require('./constants');
const args = process.argv;
const mainCommand = args[2];

const executeCommand = (mainCommand, args) => {
    switch (mainCommand) {
        case 'commands': {
            console.log(
                'Following is the list of currently supported commands:'
            );
            const comm = allCommands['commands'];
            const l = comm.length;
            for (let i = 0; i < l; ++i) {
                console.log(`\n\u2023 ${comm[i]['name']} - ${comm[i]['desc']}`);
            }
            break;
        }
        case 'list': {
            const boilerplates = Object.keys(boilerplateRepositoryMapping);
            const l = boilerplates.length;

            if (l === 0) {
                console.log(`There are currently no boilerplates available.`);
            } else {
                console.log(
                    'Following is the list of currently available boilerplates:'
                );

                for (let i = 0; i < l; ++i) {
                    const bi = boilerplates[i];
                    const brm = boilerplateRepositoryMapping[bi];
                    console.log(
                        `\n\u2023 ${bi} - (${brm['repo']}) - ${brm['desc']}`
                    );
                }
            }

            break;
        }
        case 'create': {
            const boilerplateName = args[3];
            const projectName = args[4];

            if (boilerplateName === void 0 || projectName === void 0) {
                console.error(
                    `Invalid create command. Type \`boilerplate list\` to get the list of commands.`
                );
            } else {
                const b = boilerplateRepositoryMapping[boilerplateName];
                if (b === void 0) {
                    console.error(`${boilerplateName} does not exist.`);
                } else {
                    cp.exec(`git clone ${b['repo']} ${projectName}`);
                }
            }
            break;
        }
        default: {
            break;
        }
    }
};

if (mainCommand === void 0) {
    console.error(`${welcomeMessage}`);
} else {
    if (allCommands['mainCommands'][mainCommand] === void 0) {
        console.error(
            `Invalid command ${mainCommand}. To get the list of available commands, type \`boilerplatter list\``
        );
    } else {
        executeCommand(mainCommand, args);
    }
}
