let colorNames = ["qirmizi","mavi","yasil","sari"];
colorNames.splice(1,0,"orange");
console.log(colorNames);

colorNames.pop();
console.log(colorNames)


colorNames.unshift("Pink");
console.log|(colorNames);

colorNames.shift();
console.log(colorNames);



for(i=0;i<colorNames.length;i++){
  console.log( colorNames[i]);
}
