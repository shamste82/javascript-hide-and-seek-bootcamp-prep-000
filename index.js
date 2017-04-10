function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  var target = document.getElementById("nested").querySelector('div .target')
  return target
}

function increaseRankBy(n){
  const list = document.getElementById("app").querySelectorAll('ul.ranked-list li')

  for(let i = 0, l = list.length; i < l; i++){
    list[i].innerHTML = n + parseInt(list[i].innerHTML, 10)
  }
  return list
}

function deepestChild(){
  const dc = document.getElementById('grand-node').querySelector('div div div div')
  return dc

}
