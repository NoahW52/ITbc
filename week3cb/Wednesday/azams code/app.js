const layout = document.getElementById('layout')
const dropDown = document.getElementById('sources')
const sourceSelecter = document.getElementById('sourceSelecter')
const articles = news.articles

//dropdown logic
const sourcesArr = sources.sources
const sourceNames = sourcesArr.map((source) => {
    return `<option>${source.name}</option>`
})
dropDown.innerHTML = sourceNames

function filterSources() {
    if(this.value == 'All Sources') {
        return generateNews(articles)
    }
    const filteredArticles = articles.filter((article) => {
        return article.source.name === this.value
    })
    generateNews(filteredArticles)
}

//News list logic
function generateNews(filteredArticles) {
    layout.innerHTML = ""

    const info = filteredArticles.map((article) => {
        return `
        <div>${article.author}</div>
        <div>${article.title}</div>
        <div>${article.description}</div>
        <div>${article.url}</div>
        <img = 'image' src = '${article.urlToImage}' width = 300px >
        <div>${article.publishedAt}</div>
        `
    })
    layout.innerHTML = info.join('')
}

generateNews(articles)


dropDown.addEventListener('change', filterSources)

//Use this.value to filter articles
//news.article.filter to pass the this.value to filter articles by source name

