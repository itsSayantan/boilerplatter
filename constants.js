const welcomeMessage =
    'Welcome to boilerplatter!!!\nTo get the list of commands, type `boilerplatter list`';

const allCommands = {
    mainCommands: { list: 1, create: 1 },
    commands: [
        {
            name: 'commands',
            desc: 'List all boilerplate commands.'
        },
        {
            name: 'list',
            desc: 'List all available boilerplates.'
        },
        {
            name: 'create <boilerplate_name> <project_name>',
            desc:
                'Create a new project with name <project_name> using the boilerplate <boilerplate_name>.'
        }
    ]
};

const boilerplateRepositoryMapping = {
    'react-typescript-starter': {
        desc:
            'A basic boilerplate to get started with React.JS and Typescript. Additional features include @babel/plugin-proposal-optional-chaining.',
        repo:
            'https://github.com/itsSayantan/boilerplatter-react-typescript-starter'
    },
    'react-typescript-splitchunks-starter': {
        desc:
            'A basic boilerplate to get started with React.JS and Typescript. This project includes the SplitChunksPlugin implementation. Additional features include @babel/plugin-proposal-optional-chaining.',
        repo:
            'https://github.com/itsSayantan/boilerplatter-react-typescript-splitchunks-starter'
    }
};

module.exports = {
    welcomeMessage,
    allCommands,
    boilerplateRepositoryMapping
};
