const renderButton = (content) => {
  const btn = document.createElement("button");
  btn.append(content);
  return btn;
};

const renderBox = (...content) => {
  const div = document.createElement("div");
  div.append(...content);
  return div;
};
