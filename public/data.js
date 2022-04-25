var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Gosho",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Todor",
                date: Date.now(),
                content: "Hey"
            },
            {
                author: "Ivan",
                date: Date.now(),
                content: "Kvo"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Ivan",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Az",
                date: Date.now(),
                content: "Da"
            },
            {
                author: "Gosho",
                date: Date.now(),
                content: "Zdr"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}