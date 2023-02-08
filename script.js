let btnSchool = document.querySelector("#button_school");
let btnFin = document.querySelector("#button_fin");
let btnEditor = document.querySelector("#button_editor")

function commonDenominator ()
{
    let a = document.querySelector("#input_school_a");
    let b = document.querySelector("#input_school_b");

    let result;
    let aNum = Number(a.value);
    let bNum = Number(b.value);

    if(aNum <= 0 || bNum <= 0 || !Number.isInteger(aNum) || !Number.isInteger(bNum)){
        let out = document.querySelector("#label_school_output");
        out.innerHTML = "Eror";
        return;
    }

    for(let i = Math.min(aNum, bNum); i > 0; i--)
    {
        if((bNum / i) % 1 === 0 && (aNum / i) % 1 === 0)
        {
            result = i;
            break;
        }
    }

    let out = document.querySelector("#label_school_output");
    out.innerHTML = result;
}

btnFin.addEventListener("click", spellingHryvnia);


function spellingHryvnia()
{
    let c = document.querySelector("#input_fin");
    let cNum = Number(c.value);
    let result;

    if(!Number.isInteger(cNum) || cNum <= 0)
    {
        result = "Eror";
        let out = document.querySelector("#label_fin_output");
            out.innerHTML = result;
        return;
    }

    if(cNum >= 5 && cNum <= 20)
    {
        result = "гривень";
    }
    else if(cNum % 10 === 1)
    {
        result = "гривня";
    }
    else if(cNum % 10 === 2 || cNum % 10 === 3 || cNum % 10 === 4){
        result = "гривні";
    }
    else{
        result = "гривень";
    }

    let out = document.querySelector("#label_fin_output");
    out.innerHTML = result;
}

btnSchool.addEventListener("click", commonDenominator);


function firstLetterToCapital ()
{
    let input = document.querySelector("#input_editor").value;
    let splited = input.split(" ");
    let result = splited.length;
    
    for (let i = 0; i < splited.length; i++)
    {
        let test = splited[i].includes(" ");
        if (splited[i].length === 0)
        {
            result--;
        }
    }

    let out = document.querySelector("#label_editor_output");
    out.innerHTML = result;
}

btnEditor.addEventListener("click", firstLetterToCapital);