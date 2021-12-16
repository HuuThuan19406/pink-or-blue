async function prediction(name) {
    let data = await fetch('https://ml.itbclub.com/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name })
    })
        .then(response => response.json());

    return {
        female: data.score[0].toFixed(2),
        male: data.score[1].toFixed(2)
    };
}

function handlePredict(score, maleElement, femaleElement, maleLabel, femaleLabel) {
    score
        .then(response => {
            maleElement.style.width = maleLabel.innerText = response.male * 100 + '%';
            femaleElement.style.width = femaleLabel.innerText = response.female * 100 + '%';
        });
}
