# dvm-minlib-js
Skeleton package to build JavaScript library and publish to NpmJs

## Steps:

* [Clone repository](#clone-git)
* [Create the NPM package](#create-npm-package)
* [Write and test the library locally](#write-and-test)
* [Publish the code and the package](#publish-package)
* [Test your library](#test-lib)


## Clone repository

On the shell run the following commands:

`git clone https://github.com/davmixcool/dvm-minlib-js.git`

`cd dvm-minlib-js`

`git init`

`git add --all`

`git commit -m "Initial commit"`

`git remote add origin https://github.com/<location to your remote repo>.git`

`git push -u origin master`

- This will create and push the first (empty) version of your library`

## Create the NPM package 

Go to [npmjs.com](https://npmjs.com) and sign up to create account

To work with npm you need to install node. Also on the first time you need to create a user profile file `.npmrc` (located on the home directory) to create it run the following commands:

`npm set init-author-name 'Your name'`  

`npm set init-author-email 'your@email.com'`

`npm set init-author-url 'http://www.your-url.com'`

`npm set init-license 'MIT'`

`npm set save-exact true`

- To connect to the remote package manager you need to run:

`npm adduser`


## Write and test the library locally

- Now you are done with the library and can test it using node command line tool:

`$ node`

`> var lib=require('./src/index.js');`

`> lib.addNumbers(6,7);`

`13`

`> .exit`


## Publish your library to GitHub and NPM

- Push it to github run the following commands:

`git add .`

`git commit –m 'basic files'`

`git push`

- And publish it to npm using the command:

`npm publish`

Thats it!!! you can use the library now

To creare a relese version run:

`git tag 1.0.0`

`git push –tags`

`npm publish`
