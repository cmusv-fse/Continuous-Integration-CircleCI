Continuous Integration (CircleCI) [![Circle CI](https://circleci.com/gh/cmusv-fse/Continuous-Integration-CircleCI/tree/master.svg?style=svg)](https://circleci.com/gh/cmusv-fse/Continuous-Integration-CircleCI/tree/master)
==============
Implementation of a bowling score card.

Reference for Unit Testing lab for FSE Fall 2015 at CMU-SV.

Updated for CircleCI Integration for FSE Spring 2016 at CMU-SV.

Install
==============
1. Install needed tools using: `npm install -g grunt-cli mocha istanbul`
2. Install needed dependencies using: `npm install`

Tests results
==============
* `grunt test`

Coverage results
==============
* `grunt coverage`
* The results with be in `coverage/lcov-report/index.html`
![Alt text](/resources/coverage.jpg)

CircleCI integration
==============
* Link your account with CircleCI by following ["Getting Started with CircleCI"](https://circleci.com/docs/getting-started).

* After the account is linked, when you push changes to the repo CircleCI will run your tests and code coverage.

* You can see the results under `Test Summary` and `Artifacts > Coverage`.

### Test Summary
![Alt text](/resources/TestSummary.png)

### Artifacts > Coverage
![Alt text](/resources/Artifacts.png)
