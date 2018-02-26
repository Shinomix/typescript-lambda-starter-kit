# typescript-lambda-starter-kit
> AWS Lambda basics to develop and test in Typescript

### Starting to dev
Before all, you need to install some packages:
- `npm install`
- `npm install -g typings` (if you don't have typings yet)
- `npm install --global dt~mocha`
From that point you can start to dev in the `app/` folder.

To compile the project with a hot reload system, run `npm run dev`.
Output is placed at the project root in a `index.js` file. You can then run that file using node to test it.


### Unit tests
Unit tests are developed with Node standard lib [assert](https://nodejs.org/api/assert.html) but can be replaced by anything you like (chai.js for example).
Project also includes [sinon.js](http://sinonjs.org/) for spy and stub needs.
All of the tests run using [mocha](https://mochajs.org/) and can be started with a simple `npm run test`.

In case you need a hot reload testing system, run `npm run test-watch`. When a tests file is updated, all the specs will be re-run.
