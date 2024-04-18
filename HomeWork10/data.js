let globalData;
async function fetchData() {
    try {
        const response = await fetch(
            "https://official-joke-api.appspot.com/random_ten"
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        globalData = data;
        processData();
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
}

// Функция для обработки данных, зависящих от globalData
function processData() {
    const jokesBox = document.querySelector(".jokes-box");
    console.log(globalData);
    globalData.forEach((joke) => {
        const divElem = document.createElement("div");

        const typeJoke = document.createElement("h3");
        typeJoke.textContent = joke.type;

        const maneJoke = document.createElement("p");
        maneJoke.textContent = `Mane joke:   ${joke.setup}`;

        const punchJoke = document.createElement("p");
        punchJoke.textContent = `Punchline:   ${joke.punchline}`;

        divElem.appendChild(typeJoke);
        divElem.appendChild(maneJoke);
        divElem.appendChild(punchJoke)
        jokesBox.appendChild(divElem);
        console.log(joke);
    });
}

fetchData();
