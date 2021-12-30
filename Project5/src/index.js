const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  const button = document.querySelector("button");
  const body = document.querySelector("body");
  
  function handleChange() {
    let nums = [];
    nums.push(Math.floor(Math.random() * colors.length));
    while (true) {
      let temp = Math.floor(Math.random() * colors.length);
      if (temp !== nums[0]) {
        nums.push(temp);
        break;
      }
    }
    const color1 = colors[nums[0]];
    const color2 = colors[nums[1]];
    body.style.background = `linear-gradient(to left, ${color1}, ${color2})`;
  }
  
  button.addEventListener("click", handleChange);