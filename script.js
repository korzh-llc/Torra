const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})



let infoCards = document.querySelector(".info-cards")                       

let carArr = []

class Card{
  constructor(line, image, name, descr){
    this.line = line
    this.image = image
    this.name = name
    this.descr = descr
  }
  tohtml(){
    return `          <div class="info-card">
                            <div class="info-card-inner">
                                <div class="line">${this.line}</div>
                                <div class="card-elements">
                                    <img src="${this.image}" class="card-img">
                                    <h2 class="card-name">${this.name}</h2>
                                    <p class="card-descr">${this.descr}</p>
                                </div>
                            </div>
                        </div>`
  }
}

carArr.push(new Card("|","images/abtImg1.png", "Кофе", "Свежая обжарка, настроенный<br> помол,и стабильный вкус каждый<br> день."))
carArr.push(new Card("|","images/abtImg2.png", "Протеин", "Шейки на молоке или воде — для<br> тех, кто считает белок."))
carArr.push(new Card("|","images/abtImg3.png", "Комфорт", "Тёплый свет, розетки, и музыка<br> потише. Можно работать часами!"))
carArr.push(new Card("|","images/abtImg4.png", "Десерты", "Домашняя выпечка и чизкейки,<br> которые заканчиваются к<br> вечеру."))

for( i = 0 ; i < carArr.length ; i++){
  infoCards.innerHTML += carArr[i].tohtml()
}                       
                                            
 
let coffees = document.querySelector(".items")

let cofArr = []

class Coffee{
  constructor(item, mline, price){
    this.item = item
    this.mline = mline
    this.price = price
  }
  tohtml(){
    return`
                <div class="item">
                    <h4 class="item-name">${this.item}</h4>
                    <p class="menu-line">${this.mline}</p>
                    <p class="price">${this.price}</p>
                </div>`
  }
}
                        
cofArr.push(new Coffee("Эспрессо", "......................................................", "700 ₸"))                        
cofArr.push(new Coffee("Американо", "...................................................", "900 ₸"))                        
cofArr.push(new Coffee("Капучино", "....................................................", "1200 ₸"))    
cofArr.push(new Coffee("Латте", "..........................................................", "1300 ₸"))                        
cofArr.push(new Coffee("Раф ванильный", ".........................................", "1600 ₸"))                        
cofArr.push(new Coffee("Айс латте", "...................................................", "1500 ₸"))                        
                        
for( i = 0 ; i < cofArr.length ; i++){
  coffees.innerHTML += cofArr[i].tohtml()
}                           
                        
 
let proteins = document.querySelector(".items2")

let proArr = []

class Protein{
  constructor(item, mline, price){
    this.item = item
    this.mline = mline
    this.price = price
  }
  tohtml(){
    return`<div class="item">
                    <h4 class="item-name">${this.item}</h4>
                    <p class="menu-line">${this.mline}</p>
                    <p class="price">${this.price}</p>
                </div>`  
  }
}

proArr.push(new Protein("Шоколад", "...................................................", "2200 ₸"))                                 
proArr.push(new Protein("Ваниль", "......................................................", "2200 ₸"))                                 
proArr.push(new Protein("Банан–арахис", "...........................................", "2500 ₸"))                                 
proArr.push(new Protein("Ягодный", "...................................................", "2500 ₸"))                                 
                        
for( i = 0 ; i < proArr.length ; i++){
  proteins.innerHTML += proArr[i].tohtml()
}                           


let desserts = document.querySelector(".items3")

let desArr = []

class Dessert{
  constructor(item, mline, price){
    this.item = item
    this.mline = mline
    this.price = price
  }
  tohtml(){
    return`<div class="item">
                            <h4 class="item-name">${this.item}</h4>
                            <p class="menu-line">${this.mline}</p>
                            <p class="price">${this.price}</p>
                        </div>`  
  }
}

desArr.push(new Dessert("Чизкейк", "......................................................", "1800 ₸"))                                
desArr.push(new Dessert("Брауни", "........................................................", "1600 ₸"))                                
desArr.push(new Dessert("Медовик", ".....................................................", "1700 ₸"))                                
desArr.push(new Dessert("Круассан", "....................................................", "1200 ₸"))                                
                        
for( i = 0 ; i < desArr.length ; i++){
  desserts.innerHTML += desArr[i].tohtml()
}         




let locInform = document.querySelector(".loc-inform")

let locArr = []

class Location{
  constructor(image, name, descr){
    this.image = image
    this.name = name
    this.descr = descr
  }
  tohtml(){
    return`<div class="inform">
                <img class="inform-img" src="${this.image}">
                <h1 class="inform-name">${this.name}</h1>
                <p class="inform-descr">${this.descr}</p>
            </div>`  
  }
}

locArr.push(new Location("images/point.png", "Адрес", "Астана, Шәмші Қалдаяқов 4"))                           
locArr.push(new Location("images/clock.png", "Часы работы", "Ежедневно 08:00 – 23:00"))                           
locArr.push(new Location("images/phone.png", "Связаться", "+7 778 222 25 18 · WhatsApp<br>Inst:torracoffee_astana"))                         
                        
for( i = 0 ; i < locArr.length ; i++){
  locInform.innerHTML += locArr[i].tohtml()
}                           
                        
                        
                        
                        