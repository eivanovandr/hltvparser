const axios = require('axios')
const cheerio = require('cheerio')


const url = "https://www.hltv.org/matches"


axios.get(url).then(function (response){
    const $ = cheerio.load(response.data)
    
    let matches = $('.upcoming-match')
    let count = 1
    matches.each(function(){
        if($(this).find('.team').text() != ''){
           console.log(count + ')' + $(this).find('.team').first().text() + ' vs ' +  $(this).find('.team').last().text()) 
           count++
        }
        
    })
})

