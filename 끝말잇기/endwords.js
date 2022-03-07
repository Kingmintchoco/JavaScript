var words = document.createElement('div');
words.textContent = '사과';
document.body.append(words);

var input = document.createElement('input');
document.body.append(input);

var btn = document.createElement('button');
document.body.append(btn);

var result = document.createElement('div');
document.body.append(result);

var score = 0;
var score_result = document.createElement('h2');
document.body.append(score_result);


btn.addEventListener('click', () => {
    if(words.textContent[words.textContent.length - 1] === input.value[0]){
        result.textContent = "WIN!";
        document.body.append(result);

        score++;
        score_result.textContent = score;
        document.body.append(score_result);

        words.textContent = input.value;
        input.value = '';
        input.focus();
    }else{
        result.textContent = "LOOSE!";
        document.body.append(result);
    }
});

