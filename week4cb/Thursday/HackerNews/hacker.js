const hackerUl = document.getElementById('hackerUl')

async function getID() {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    const idArr = await response.json()
    idArr.map(function(id) {
        fetchStory(id)
    })
}
async function fetchStory(storyID) {

    const id = storyID
    response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    const stories = await response.json()
    const date = new Date(stories.time * 1000)

    const story = `
    <h1>${stories.title}</h1>
    <a href="${stories.url}">Access Article</a>
    <li>By: ${stories.by}</li>
    <li>Published: ${date.toLocaleDateString('en-US')}</li>
    `
    hackerUl.innerHTML += story
}
getID()