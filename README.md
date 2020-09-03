## Samantha's Process
I have only a Chromebook at the moment, so I had to overcome the hurdle of running all of this on repl.it, which was giving me various errors. 

I decided to first make a stand-alone JavaScript file, tinker with the `createMenuData` function until it did what I wanted, and then try to reintegrate it into the main folder. I created an array that would be easier for me to keep track of using some names from my family and my friend's family: `["ray/samantha", "ray/hailey", "ray/morgan", "danny/jill", "danny/kristine", "oliver"]`. I played with the `createMenuData` function until it returned: 

`[
  {
    title: "ray",
    data: ["samantha", "hailey", "morgan"]
  },
  {
    title: "danny",
    data: ["jill", "kristine"]
  }
]`

Then I plugged the constant `data` into the function to confirm that it also returned what was required in that case.

After that, I still had a struggle getting my code to work with the other files in repl.it. After phoning my generous friend Becca, I learned the answer was to run `npm install` followed by `jest gradTest.test.js` in the console. At that point, `jest` confirmed that my code passed the test suite.

Finally, I added my example array based on our families, `ourFams`, to the tests for `jest` to check. `jest` confirmed that `createMenuData`worked as required on that input also.

_________________________________________________________________

## Below are the orignal instructions:
## Clone this repository
please do not fork it!

## Setup
install yarn or npm globally 

run `yarn` or `npm install`

## Challenge
Write some code to implement the function `createMenuData`

Use the test runner `jest` to run the `gradTest.test.js` 

Commit your changes and push them up to your own git repository!
Once done, link us the URL of your solution

## Tips

The data set in the test ends at parent 4, but imagine any number of parents and children could be passed to this function.

When the test passes clean up your code.
It's worth spending time formatting and simplifing thins.
It's more important that humans can read your code than computers.
Software tools like `eslint` do some amazing things 🕶
