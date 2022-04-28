var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Gosho",
        date: Date.now(),
        content: "Thread contend",
        content: "Thread content",
        comments: [
            {
                author: "Gosho",
                author: "Todor",
                date: Date.now(),
                content: "Da",
                content: "Hey"
            },
            {
                author: "Ivan",
                date: Date.now(),
                content: "Ne",
            },
            {
                author: "Krisko",
                date: Date.now(),
                content: "Bruh",
                content: "Kvo"
            }
        ]
    },
    {
        title: "Thread 1",
        author: "Gosho",
        id: 2,
        title: "Thread 2",
        author: "Ivan",
        date: Date.now(),
        content: "Thread contend",
        content: "Thread content 2",
        comments: [
            {
                author: "Gosho",
                date: Date.now(),
                content: "Da",
            },
            {
                author: "Ivan",
                author: "Az",
                date: Date.now(),
                content: "Ne",
                content: "Da"
            },
            {
                author: "Krisko",
                date: Date.now(),
                content: "Bruh",
            }
        ]
    },
    {
        title: "Thread 1",
        author: "Gosho",
        date: Date.now(),
        content: "Thread contend",
        comments: [
            {
                author: "Gosho",
                date: Date.now(),
                content: "Da",
            },
            {
                author: "Ivan",
                date: Date.now(),
                content: "Ne",
            },
            {
                author: "Krisko",
                date: Date.now(),
                content: "Bruh",
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