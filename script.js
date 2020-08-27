var topQuotes = [];
fetch("https://quotes-api.archv.id/api/quotes/v1/latest")
    // return to response.json
    .then(response => response.json())
    .then(resJson => {
        resJson.content.map((result, i) => {
            if (i < 3) {
               printQuotes(result, i);
            }
        })
    });

function printQuotes(content, index)
{
    document.getElementById(`quote-${index}`).innerHTML = content.content;
    document.getElementById(`author-${index}`).innerHTML = `- ${content.author}`;
}
