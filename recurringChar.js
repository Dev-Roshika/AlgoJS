// Find the First Recurring Character in the given String

function RecurringCharacter(str) {
    let count = {};
  for (let i = 0; i < str.length; i++) {
    console.log(str[i] )
    if (count[str[i]]) {
      console.log("First Recurring Character:", str[i]);
      break;
    }
    count[str[i]] = 1;
    console.log(count);
  }
  console.log(count)
}

RecurringCharacter("ABCA");