/* eslint-disable */

const excuse = {
  who: ["The dog", "My grandma", "His turtle", "My bird"],
  action: ["ate", "peed", "crushed", "broke"],
  what: ["my homework", "the keys", "the car"],
  when: [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ]
};

window.onload = () => {
  document.querySelector("#Demo").innerHTML = excuseGenerator();
};

function excuseGenerator() {
  return (
    excuse.who[Math.floor(Math.random() * excuse.who.length)] +
    " " +
    excuse.action[Math.floor(Math.random() * excuse.action.length)] +
    " " +
    excuse.what[Math.floor(Math.random() * excuse.what.length)] +
    " " +
    excuse.when[Math.floor(Math.random() * excuse.when.length)]
  );
}
