//const heading = React.createElement("h1" , {} , "Hello From react World");

const parent = React.createElement("div" , 
{id : "parent"},
React.createElement("div" , {id: "child"} , [React.createElement("h1", {} , "This is World"), React.createElement("h2" , {} , "This is India")])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);