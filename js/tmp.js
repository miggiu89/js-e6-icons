function stampaIcone(arr) {
    $('.icons').empty();

    arr.forEach((element) => {

        const {name,prefix,family,color} = element;
        $('.icons').append(`
            <div class="icon">
                <i class="${family} ${prefix}${name}" style="color:${color}"></i>
                <div class="nome">${name}</div>
            </div>
        `);

    });
}

function filterIcon(tipo,array){
    if ( tipo == 'all'){
        return array
    }
    return array.filter((element) => element.type == tipo);
}


function stampaOpzioni(arr) {
    arr.forEach((element) => {

        $('#type').append(`
            <option value="${element}">${element}</option>
        `);

    });
}
// sezioni funzioni




$(document).ready(function() {
const icons = 
			[
				{
					name: 'cat',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas'
				},
				{
					name: 'crow',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas'
				},
				{
					name: 'dog',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas'
				},
				{
					name: 'dove',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas'
				},
				{
					name: 'dragon',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas'
				},
				{
					name: 'horse',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas'
				},
				{
					name: 'hippo',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas'
				},
				{
					name: 'fish',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas'
				},
				{
					name: 'carrot',
					prefix: 'fa-',
					type: 'vegetable',
					family: 'fas'
				},
				{
					name: 'apple-alt',
					prefix: 'fa-',
					type: 'vegetable',
					family: 'fas'
				},
				{
					name: 'lemon',
					prefix: 'fa-',
					type: 'vegetable',
					family: 'fas'
				},
				{
					name: 'pepper-hot',
					prefix: 'fa-',
					type: 'vegetable',
					family: 'fas'
				},
				{
					name: 'user-astronaut',
					prefix: 'fa-',
					type: 'user',
					family: 'fas'
				},
				{
					name: 'user-graduate',
					prefix: 'fa-',
					type: 'user',
					family: 'fas'
				},
				{
					name: 'user-ninja',
					prefix: 'fa-',
					type: 'user',
					family: 'fas'
				},
				{
					name: 'user-secret',
					prefix: 'fa-',
					type: 'user',
					family: 'fas'
				}
			];

	// assegno la proprietà color appropriata al tipo di oggetto e popolo la select
    const blu = '#0000ff';
    const arancione = '#ffa500';
    const viola = '#800080';
    const tipiIcone = [];


    const colori = icons.map((element) => {

        const {type} = element;
        if ( !tipiIcone.includes(type) ){
            tipiIcone.push(type);
        }

        console.log(tipiIcone);
        return {
            ...element,
            color: type == 'animal' ? blu :
            type == 'user' ? arancione : viola
        };

    });
    
    // stampo nella select
    stampaOpzioni(tipiIcone);
    

    // creo all'interno di icons nell'html le varie icon colorate nel modo giusto
    stampaIcone(colori);

    // vedo a schermo solo le icon selezionate in base alla select
    const select = $('#type');
    select.change(function() {

        const valore = $(this).val();
        const elementiFiltrati = filterIcon(valore,colori);
        stampaIcone(elementiFiltrati);

    });

});
