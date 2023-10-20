// for simplicity, creating objects of p1 and p2
const p1 = {
    score: 0,
    button : document.querySelector('#p1but'),
    display: document.querySelector('#p1display')
}
const p2 = {
    score: 0,
    button : document.querySelector('#p2but'),
    display: document.querySelector('#p2display')
}

// const p1but = document.querySelector('#p1but');
// const p2but = document.querySelector('#p2but'); 
// const p1display = document.querySelector('#p1display');
// const p2display = document.querySelector('#p2display');
const resetbut = document.querySelector('#reset');
const winscoreselect = document.querySelector('#playto');
// let p1score = 0;
// let p2score = 0;
let winscore = 3;
let isgameover = false;

function updatescore(player,opponent)
{
    if (!isgameover)
    {
        player.score += 1;
        if(player.score === winscore)
        {
            isgameover = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function()
{
    // if (!isgameover)
    // {
    //     p1score += 1;
    //     if(p1score === winscore)
    //     {
    //         isgameover = true;
    //         p1display.classList.add('has-text-success');
    //         p2display.classList.add('has-text-danger');
    //         p1but.disabled = true;
    //         p2but.disabled = true;
    //     }
    //     p1display.textContent = p1score;
    // }
    updatescore(p1,p2);
});
p2.button.addEventListener('click', function()
{
    // if (!isgameover)
    // {
    //     p2score += 1;
    //     if(p2score === winscore)
    //     {
    //         isgameover = true;
    //         p2display.classList.add('has-text-success');
    //         p1display.classList.add('has-text-danger');
    //         p1but.disabled = true;
    //         p2but.disabled = true;
    //     }
    //     p2display.textContent = p2score;
    // }
    updatescore(p2,p1);
});

winscoreselect.addEventListener('change', function()
{
    winscore = parseInt(this.value);
    resetfunc();
});
resetbut.addEventListener('click', resetfunc);

function resetfunc()
{ 
    isgameover = false;
    for(let p of [p1,p2])
    {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = 0;
    // p2.display.textContent = 0;
    // p1.display.classList.remove('has-text-success', 'has-text-danger');
    // p2.display.classList.remove('has-text-success', 'has-text-danger');
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}