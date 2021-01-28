for(let item in statistics){
  if(item[0] == 'r' || item[0] == 'R' || statistics[item] % 2){
    console.log(statistics[item]);
  }
}
