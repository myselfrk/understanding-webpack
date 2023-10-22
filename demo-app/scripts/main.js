function Container() {
  const { fname, lname } = { fname: "rohit", lname: "kumar" };

  console.log(fname, lname);

  return renderBox(
    renderButton("Do Nothing"),
    renderButton("Do Nothing"),
    renderButton("Do Nothing")
  );
}

render(Container());
