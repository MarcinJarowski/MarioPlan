const initState = {
  projects: [
    { id: "1", title: "someone help me", content: "to be a senior" },
    {
      id: "2",
      title: "do you know that joke?",
      content: "every man in Mexico is senior"
    },
    { id: "3", title: "Good one", content: "heheheheh" }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
