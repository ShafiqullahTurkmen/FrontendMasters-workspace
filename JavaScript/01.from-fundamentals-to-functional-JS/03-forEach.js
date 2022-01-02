// .forEach() Function

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log('my name is ', name);
    }
  }
}


var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
var suspectsList = []

for (let i = 0; i < suspects.length; i++) {
  suspectsList.push(CreateSuspectObjects(suspects[i]));
}

const _ = {};
_.each = function(list, callback) {
  
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (var key in list) {
      callback(list[key], key, list)
    }
  }

}

_.each(['sally', 'georgie', 'porgie'], function(name, i, list){
  if (list[i + 1]) {
    console.log(name, ' is younger than ', list[i + 1]);
  } else {
    console.log(name, 'is the oldest');
  }
})
