

var data = [
    {name: "Rohit Sharma", src: "https://imgs.search.brave.com/G0S96lNVIw1mHvuXqjNCbopwf6flno3zHVheQCenKiM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c19zcXVhcmVfd182/NDAscV81MC9sc2Np/L2RiL1BJQ1RVUkVT/L0NNUy8zMTY1MDAv/MzE2NTg0LnBuZw"},
    {name: "Virat kohli", src: "https://imgs.search.brave.com/DBalBilU3gF3DSjO_IvfJ32xCg1M0K5DGB3cE9qBgio/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c19zcXVhcmVfd182/NDAscV81MC9sc2Np/L2RiL1BJQ1RVUkVT/L0NNUy8zMTY2MDAv/MzE2NjA1LnBuZw"},
    {name: "Rishabh pant", src: "https://imgs.search.brave.com/0rZFmihgtIpOKY5QSt3Ch09UJY-8BAfffTpAJ8HA594/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c19zcXVhcmVfd182/NDAscV81MC9sc2Np/L2RiL1BJQ1RVUkVT/L0NNUy8zMjMwMDAv/MzIzMDM2LnBuZw"},
    {name: "Suryakumar yadav", src: "https://imgs.search.brave.com/pdJ4lW2HMnuICIxMSmMVAUsRUzSFINWzrNHsgWmo3Ow/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c19zcXVhcmVfd182/NDAscV81MC9sc2Np/L2RiL1BJQ1RVUkVT/L0NNUy8zMzExMDAv/MzMxMTYzLnBuZw"},
    {name: "Shivam Dube", src: "https://imgs.search.brave.com/L-dK-AycQ-PlBBTIbn7PQ6YDjCCHEzXzFLoRoNOyJeo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c19zcXVhcmVfd182/NDAscV81MC9sc2Np/L2RiL1BJQ1RVUkVT/L0NNUy8zODM3MDAv/MzgzNzczLnBuZw"},
    {name: "Hardik Pandya", src: "https://imgs.search.brave.com/1Vweur3v-_EOt7-_gbzMHAfRPa6PD-TqRbXG63UCxAE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cG5nZ2FsbGVyeS5j/b20vd3AtY29udGVu/dC91cGxvYWRzL2hh/cmRpay1wYW5keWEt/MDEucG5n"},
    {name: "Ravindra Jadeja", src: "https://imgs.search.brave.com/TjbSZVBJd7QlX8cIQqRHE8DfSHLHijG-R8XXQEizY6w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c19zcXVhcmVfd182/NDAscV81MC9sc2Np/L2RiL1BJQ1RVUkVT/L0NNUy8zMTY2MDAv/MzE2NjAwLnBuZw"},
    {name: "Axar Patel", src: "https://imgs.search.brave.com/7KjxNv0hPo-tblh5BaL2l3SOuJDUhScX5GCuUhilRu4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c19zcXVhcmVfd182/NDAscV81MC9sc2Np/L2RiL1BJQ1RVUkVT/L0NNUy8zMzExMDAv/MzMxMTY0LnBuZw"},
    {name: "Kuldeep Yadav", src: "https://imgs.search.brave.com/G09t7fUD1d1QdshdgPtdnkE58qQfLUq5bHsvgtM2Ois/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c19zcXVhcmVfd182/NDAscV81MC9sc2Np/L2RiL1BJQ1RVUkVT/L0NNUy8zMTk5MDAv/MzE5OTQzLnBuZw"},
    {name: "Arshdeep Singh", src: "https://imgs.search.brave.com/VOMd7sKxCE6PK_pAIilSZCMzg5dJj4-ub4Dajh89XtU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c19zcXVhcmVfd182/NDAscV81MC9sc2Np/L2RiL1BJQ1RVUkVT/L0NNUy8zMjIxMDAv/MzIyMTc4LnBuZw"},
    {name: "Jasprit Bumrah", src: "https://imgs.search.brave.com/E02ByEezdtt_tct4dsvKy0Su0vxmfQTPmOXWIM1VBuM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c19zcXVhcmVfd182/NDAscV81MC9sc2Np/L2RiL1BJQ1RVUkVT/L0NNUy8zMTk5MDAv/MzE5OTQwLnBuZw"},
]


var pers = ""
data.forEach(function(elem){
     pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
})


var people = document.querySelector(".people")
var inp = document.querySelector("input")

people.innerHTML = pers
inp.addEventListener("input", function(){
  var matching =  data.filter(function(e){
        return  e.name.startsWith(inp.value)
    })

    var newusers = ""
    matching.forEach(function(elem){
        newusers += `<div class="person">
                       <div class="img">
                           <img src="${elem.src}" alt="">
                       </div>
                       <h4>${elem.name}</h4>
                   </div>`
   })

   people.innerHTML = newusers
    
})






 