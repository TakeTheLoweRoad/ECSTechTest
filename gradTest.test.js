/*The function createMenuData() takes as input an array of strings naming parents and possibly one of their children separated by a "/". For instance, ["ray/samantha", "ray/hailey", "ray/morgan", "danny/jill", "danny/kristine", "oliver"]. The funtion returns a diffrent array in the following format:
[
  {
    title: "ray",
    data: ["samantha", "hailey", "morgan"]
  },
  {
    title: "danny",
    data: ["jill", "kristine"]
  }
]
Notice that there is no object in this array with the title "oliver" because oliver had no children listed in the original array.
*/



function createMenuData(data) {
  /*First we create an array of each parent that has at least one child, called parentsWithChildren. From that, we make a set (so each parent with at least one child appears in the set exactly once.) Finally, we create from this set an array called uniqueParents. As the name suggests, each parent with at least one child appears exactly once in the uniqueParents array*/
  var parentsWithChildren = new Array();
  for (var i=0 ; i<data.length; i++){
    /*This next line changes, for example, "ray/samantha" into ["ray", "samantha"] or "oliver" into ["oliver"]. */
    data[i] = data[i].split("/");
    /*The conditional excludes parents that do not have any children listed. It pushes those that do into our parentsWithChildren array. The same parent might get pushed into the array more than once.*/
    if (data[i].length > 1){ 
      parentsWithChildren.push(data[i][0]);
    }
  }
  /*Now from parentsWithChildren we make a set, so each of those parents appears exactly once.*/
  var parentsWithChildrenSet = new Set(parentsWithChildren);
  /*And we make from that set a new array because those are easier to work with.*/
  var uniqueParents = Array.from(parentsWithChildrenSet);

  /*Next we initialize an array called "menu" that we will populate with objects that each have two attributes. The "title" attribute of the object will be a parent, and the "data" attribute will be an array of that parent's children. For example, 
        {
          title: "ray",
          data: ["samantha", "hailey", "morgan"]
        }
  PS I do not love the fact that both the input of the main function and part of the output are called "data", but we live in an imperfect world and that was the assignment.*/
  var menu = new Array();
  /*Loop through the array of parents with at least one child in which no parent appears more than once.*/
  for (var i=0; i<uniqueParents.length; i++){
    /*Make an array of this partcular parent's children, looping through the input "data" array (which we have modified earlier) to find who their children are.*/
    var children = new Array();
    for (var j=0; j<data.length; j++){
      if (uniqueParents[i]==data[j][0] && data[j].length>1){
        children.push(data[j][1]);
      }
    }
    /*Create an object whose "title" is the parent in question and whose "data" is an array of that parent's children. Then push this object into the "menu" array.*/
    var parentObject = {title: uniqueParents[i], data: children}
    menu.push(parentObject);
  }
  
  return menu;
}

describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];

      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });

  describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const ourFams = ["ray/samantha", "ray/hailey", "ray/morgan", "danny/jill", "danny/kristine", "oliver"];

      const expectedResult = [
  {
    title: "ray",
    data: ["samantha", "hailey", "morgan"]
  },
  {
    title: "danny",
    data: ["jill", "kristine"]
  }
  ];
  
      const actualResult = createMenuData(ourFams);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });

  
