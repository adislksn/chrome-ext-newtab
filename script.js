const getTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
};
const interval = setInterval(() => {
    document.getElementById("time").innerHTML = getTime();
}, 1000);

const api_url = "https://api.quotable.io/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
async function getapi(url) {
    await fetch(url)
    .then((response) => response.json())
    .then((data) => {
        quote.innerHTML = `<q><i>${data[0].content}</i></q>`;
        author.innerHTML = data[0].author;
    })
    .catch((err) => {
        console.log(err);
        quote.innerHTML = `<q><i>Never stop to say Do it now!</i></q>`;
        author.innerHTML = "Anonymous";
    });
}
getapi(api_url);