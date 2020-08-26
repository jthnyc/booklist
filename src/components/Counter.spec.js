describe("Counter", () => {
  let counter;

  // beforeEach(() => {
  //     counter = shallow(
  //         <
  //     )
  // })

  it("renders the counter in h1", () => {
    expect(counter.find("h1").text()).to.be.equal("Counter is now at:");
  });
});
