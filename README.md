![Alt text](https://img.shields.io/shippable/562529bf1895ca44741ea1bd.svg)
Bowling Score Card - TDD
==============
Implementation of a bowling score card.
Reference for Unit Testing lab for FSE Fall 2015 at CMU-SV.

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
![Alt text](/coverage/coverage.jpg)

Shippable integration - CI
==============
![Alt text](https://img.shields.io/shippable/562529bf1895ca44741ea1bd.svg)

* Link your account with shippable by following [Step 3: Enable CI/CD for repos](http://docs.shippable.com/#step-3-enable-cicd-for-repos).

* After the account is linked, when you push changes to the repo shippable will run your tests and code coverage.

* You can see the results under `Tests` and `Coverage`.

### Test Results
![Alt text](/coverage/testresult.jpg)

### Code Coverage
![Alt text](/coverage/coverageresult.jpg)
