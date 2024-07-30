function studentHogwarts () {
  var privateScore = 0;
  var name = null;
  
  function changeScoreBy (points) {
    privateScore += points;
  }
  
  return {
    setName (newName) {
      name = newName;
    },
    rewardStudent () {
      changeScoreBy(1);
    },
    penalizeStudent () {
      changeScoreBy(-1);
    },
    getScore () {
      return name + ': ' + privateScore;
    }
  };
}

const harry = new studentHogwarts();

harry.setName('Harry');
for (let i = 0; i < 4; i++) {
  harry.rewardStudent();
}

console.log(harry.getScore());


const draco = new studentHogwarts();

harry.setName('Draco');

draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

console.log(draco.getScore());
