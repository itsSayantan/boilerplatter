# boilerplatter

## v1.0.1

A CLI to create boilerplates.

# Installation

```
npm install --global boilerplatter
```

or

```
yarn global add boilerplatter
```

# Usage

```js
boilerplatter <command> <options>
```

# List of commands

```
boilerplatter list
```

# Create a project from a boilerplate

- Goto the directory where you want to create a project.
- Type the following command in your terminal.

```
boilerplatter create <boilerplate_name> <project_name>
```

# Adding boilerplates to this project

- Create a repository for the boilerplate.
- Add the required details in ```./constants.js``` file in the ```boilerplateRepositoryMapping``` constant.
