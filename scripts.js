

const posts = [
    {
        title: "Google Chrome",
        content: "Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!"
    },
    {
        title: "Mozilla Firefox",
        content: "Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018."
    },
    {
        title: "Microsoft Edge",
        content: "Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer."
    }
];

const wrapper = document.getElementById("posts");
;

for (let i=0; i<posts.length; i++) {

    const potsData = posts[i];
    console.log (potsData)

    const article = document.createElement("article")

    wrapper.appendChild(article)

}
